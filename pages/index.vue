<script setup>
import { useRouter } from "vue-router";
import { useTodoStore } from "@/store/index";

const store = useTodoStore();
const router = useRouter();
//VueRouter設定

const statusTexts = store.statusText;
const priorityTexts = store.priorityText;

const filterQuery = {
  keywords: "",
  status: 0,
  priority: 0,
};
const EditTodo = (todo) => {
  router.push(`/edit/${todo.id}`);
};
const changeFilterQuery = () => store.changeFilterQuery(filterQuery);
const changeHandler = (id) => store.changeTodoState(id);
const allDelteTodo = () => {
  const message = "選択された項目を全て削除してもよろしいでしょうか?";
  const result = window.confirm(message);
  if (!result) {
    return;
  }
  store.allDeleteTodo();
};
</script>


<template>
  <div>
    <header>
      <h1 class="text-white bg-gray-500 text-2xl font-sans pl-5 py-3">
        Todoアプリ
      </h1>
    </header>

    <div class="flex mt-10 ml-5">
      <p class="text-xl">
        進行中のタスクは
        <span class="text-pink-500">3個</span>あります
      </p>
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
        <input
          type="text"
          placeholder="キーワードを入力"
          class="border"
          v-model="filterQuery.keywords"
        />
      </div>
      <div class="ml-5">
        <p>ステータス</p>
        <select
          name="status"
          class="border w-177px"
          v-model="filterQuery.status"
          @change="changeFilterQuery"
        >
          <option v-for="(statusText, index) in statusTexts" :key="index" :value="index">{{ statusText }}</option>
        </select>
      </div>
      <div class="ml-5">
        <p>優先度</p>
        <select
          name="priority"
          class="border w-177px"
          v-model="filterQuery.priority"
          @change="changeFilterQuery"
        >
          <option v-for="(priorityText, index) in priorityTexts" :key="index" :value="index">{{ priorityText }}</option>
        </select>
      </div>
    </div>
    <Table @edit-todo="EditTodo" @change-handler="changeHandler" />
  </div>
</template>
