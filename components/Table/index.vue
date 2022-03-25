<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "@/store/index";
const store = useTodoStore();
const items = ["タスク名", "", "ステータス", "優先度", "作成日時", "更新日時"];
const todos = computed(() => store.todos);

//山ちゃんの書き方
// const emit = defineEmits(['edit-todo'])
// const editTodo = item => emit('edit-todo', item)

//梁瀬の書き方
interface TodoState {
  id: number;
  taskName: string;
  status: string;
  priority: string;
  createDate: string;
  updateDate: string;
}
const emit = defineEmits<{
  (event: "edit-todo", item: TodoState);
}>();
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
          >{{ item }}</div>
        </div>
      </div>

      <div class="table-row-group" v-for="(todo, index) in todos" :key="todo.taskName">
        <div class="table-row h-12">
          <div class="table-cell pt-3 w-350px flex">
            <input type="checkbox" class="mx-2 inline-block" />
            <span class="text-blue-500">{{ todo.taskName }}</span>
          </div>
          <div class="table-cell pt-3">
            <button
              class="w-25px h-25px ml-3 border-2 font-medium text-sm text-gray-500 rounded hover:bg-gray-200 shadow-2xl"
            >
              <!-- <Icon name="Pencil" @click="editTodo(todo)" solid /> -->

              <Icon name="Pencil" @click="emit('edit-todo', todo)" solid />
            </button>
          </div>
          <div class="table-cell">
            <div
              :class="[
                'text-center w-1/2 mx-auto rounded-4xl ',
                todo.status === '進行中' ? 'bg-blue-100' : '',
                todo.status === '進行中' ? 'text-blue-700' : '',
                todo.status === '着手前' ? 'bg-orange-100' : '',
                todo.status === '着手前' ? 'text-orange-700' : '',
              ]"
            >{{ todo.status }}</div>
          </div>
          <div class="table-cell">
            <div class="flex justify-center items-center">
              <div
                :class="[
                  'text-center w-15px h-15px rounded-1/2 border-3 ',
                  todo.priority === '低' ? 'border-green-500' : '',
                  todo.priority === '中' ? 'border-yellow-500' : '',
                  todo.priority === '高' ? 'border-red-500' : '',
                ]"
              />
              <span class="ml-2">{{ todo.priority }}</span>
            </div>
          </div>
          <div class="table-cell">
            <div>
              <p class="tracking-tighter text-sm text-center">2021-11-8 18:55:07</p>
            </div>
          </div>
          <div class="table-cell">
            <div>
              <p class="tracking-tighter text-sm text-center">2021-11-8 18:55:07</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
