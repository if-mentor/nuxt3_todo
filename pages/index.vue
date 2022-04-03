<template>
  <div>
    <header>
      <h1 class="text-white bg-gray-500 text-2xl font-sans pl-5 py-3">
        Todoアプリ
      </h1>
    </header>

    <div class="flex mt-10 ml-5">
      <div class="text-xl">
        <div>
          <div>
            <div v-show="display_flag === 'condition'">
              <div v-if="itemAmount">
                <p>
                  ステータスが<span class="text-pink-500">{{ state }}</span
                  >のタスクは<span class="text-pink-500">{{ itemAmount }}</span
                  >個あります
                </p>
              </div>
              <div v-else>
                ステータスが<span class="text-pink-500">{{ state }}</span
                >のタスクはありません
              </div>
            </div>

            <div v-show="display_flag === 'priority'">
              <div v-if="itemAmount">
                <p>
                  優先度が<span class="text-pink-500">{{ priority }}</span
                  >のタスクは<span class="text-pink-500">{{ itemAmount }}</span
                  >個あります
                </p>
              </div>
              <div v-else>
                <p>
                  優先度が<span class="text-pink-500">{{ priority }}</span
                  >のタスクはありません
                </p>
              </div>
            </div>

            <div v-show="display_flag === 'noItem'">
              <p :class="{ allDone: noItemClass }">
                Congratulations!! Nothing to do!!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="text-white bg-gray-500 text-xs ml-5 py-2 px-4 rounded-lg bg-opacity-70"
      >
        + タスクを追加
      </button>
      <button
        class="text-white bg-blue-500 text-xs ml-5 py-2 px-4 rounded-lg bg-opacity-70"
        @click="allDelteTodo"
      >
        - 選択されたタスクを削除
      </button>
    </div>

    <div class="flex mt-10 ml-5">
      <div>
        <p>キーワード</p>
        <input type="text" placeholder="キーワードを入力" class="border" />
      </div>
      <div class="ml-5">
        <p>ステータス</p>
        <select
          name="status"
          class="border w-177px"
          v-model="state"
          @change="display_flag = 'condition'"
        >
          <option value="すべて" selected>すべて</option>
          <option value="着手前">着手前</option>
          <option value="進行中">進行中</option>
          <option value="完了">完了</option>
        </select>
      </div>
      <div class="ml-5">
        <p>優先度</p>
        <select
          name="priority"
          class="border w-177px"
          v-model="priority"
          @change="display_flag = 'priority'"
        >
          <option selected>すべて</option>
          <option value="高">高</option>
          <option value="中">中</option>
          <option value="低">低</option>
        </select>
      </div>
    </div>
    <Table @edit-todo="EditTodo" @change-handler="changeHandler" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useTodoStore } from "@/store/index";
import { computed, watch } from "vue";
export default {
  setup() {
    const store = useTodoStore();
    const router = useRouter();
    //VueRouter設定
    const todos = computed(() => {
      return store.filteredTodos;
    });
    const EditTodo = (todo) => {
      router.push(`/edit/${todo.id}`);
    };
    const changeHandler = (id) => store.changeTodoState(id);
    const allDelteTodo = () => {
      const message = "選択された項目を全て削除してもよろしいでしょうか?";
      const result = window.confirm(message);
      if (!result) return;
      store.allDeleteTodo();
    };

    const state = ref("すべて");
    const priority = ref("すべて");
    const noItemClass = ref(false);

    const display_flag = ref("condition");

    const itemAmount = computed(() => {
      if (display_flag.value === "condition") {
        const filterdStatus = todos.value.filter((todo) => {
          if (state.value === "すべて") {
            return todo;
          } else {
            return todo.status === state.value;
          }
        });
        

        return filterdStatus.length;
      } else if (display_flag.value === "priority") {
        const filteredPriority = todos.value.filter((todo) => {
          if (priority.value === "すべて") {
            return todo;
          } else {
            return todo.priority === priority.value;
          }
        });

        return filteredPriority.length;
      }
    });

    watch(
      todos,
      () => {
        itemAmount.value;
        if (todos.value.length === 0) {
          display_flag.value = "noItem";
          noItemClass.value = true;
        }
      },
      { deep: true }
    );

    return {
      EditTodo,
      changeHandler,
      allDelteTodo,
      todos,
      state,
      priority,
      itemAmount,
      display_flag,
      noItemClass,
    };
  },
};
</script>

<style>
.allDone {
  color: gold;
}
</style>
