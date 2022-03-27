<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "@/store/index";
const store = useTodoStore();
const items = ["タスク名", "", "ステータス", "優先度", "作成日時", "更新日時"];
const todos = computed(() => store.todos);
const emit = defineEmits(["edit-todo"]);
const editTodo = (item) => emit("edit-todo", item);
let isToast = ref(false);
const deleteTodo = async (index) => {
  console.log(index);
  if (window.confirm("削除してよろしいでしょうか")) {
    try {
      await store.deleteTodo(index);
    } catch (error) {
      console.error(error);
    }
    isToast.value = true;
    await new Promise((resolve) => setTimeout(resolve, 3000));
    isToast.value = false;
  }
};
const changeStatus = (index, todo) => {
  store.changeStatus({ index, todo });
};
const changePriority = (index) => {
  store.changePriority(index);
};
</script>

<template>
  <div class="w-auto mx-auto mt-10">
    <div class="table w-4/5 mx-auto">
      <div class="table-header-group pb-10">
        <div class="table-row bg-gray-500/50 bg-opacity-10">
          <div
            class="table-cell px-5 font-bold pl-5 p-2 text-center"
            v-for="(item, index) in items"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div class="table-row-group" v-for="(todo, index) in todos" :key="index">
        <div class="table-row h-12">
          <div class="table-cell pt-3 w-350px flex">
            <input type="checkbox" class="mx-2 inline-block" />
            <span
              class="text-blue-500"
              @click="emit('move-detailpage', todo)"
            >
              {{ todo.taskName }}
            </span>
          </div>
          <div class="table-cell pt-3">
            <button
              class="w-25px h-25px ml-3 border-2 font-medium text-sm text-gray-500 rounded hover:bg-gray-200 shadow-2xl"
            >
              <Icon name="Pencil" @click="emit('edit-todo', todo)" solid />
            </button>

            <button
              class="w-25px h-25px ml-3 border-2 font-medium text-sm text-gray-500 rounded hover:bg-gray-200 shadow-2xl"
              @click="deleteTodo(index)"
            >
              <Icon name="Trash" solid />
            </button>
          </div>
          <div class="table-cell">
            <select
              @change="changeStatus(index, todo)"
              v-model="todo.status"
              :class="[
                'text-center  mx-auto rounded-4xl ',
                todo.status === '進行中' ? 'bg-blue-100' : '',
                todo.status === '進行中' ? 'text-blue-700' : '',
                todo.status === '着手前' ? 'bg-orange-100' : '',
                todo.status === '着手前' ? 'text-orange-700' : '',
                todo.status === '完了' ? 'bg-green-100' : '',
                todo.status === '完了' ? 'text-green-700' : '',
              ]"
            >
              <option>着手前</option>
              <option>進行中</option>
              <option>完了</option>
            </select>
          </div>
          <div class="table-cell">
            <button
              @click="changePriority(index)"
              class="flex justify-center items-center ml-6"
            >
              <div
                :class="[
                  'text-center w-15px h-15px rounded-1/2 border-3 ',
                  todo.priority === '低' ? 'border-green-500' : '',
                  todo.priority === '中' ? 'border-yellow-500' : '',
                  todo.priority === '高' ? 'border-red-500' : '',
                ]"
              />
              <span class="ml-2">{{ todo.priority }}</span>
            </button>
          </div>
          <div class="table-cell">
            <div>
              <p class="tracking-tighter text-sm text-center">
                2021-11-8 18:55:07
              </p>
            </div>
          </div>
          <div class="table-cell">
            <div>
              <p class="tracking-tighter text-sm text-center">
                2021-11-8 18:55:07
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="isToast"
      class="card w-96 bg-info shadow-xl fixed bottom-0 right-0 bg-info animate-bounce"
    >
      <div class="card-body text-center">
        <p class="text-info-content">削除しました</p>
      </div>
    </div>
  </div>
</template>
