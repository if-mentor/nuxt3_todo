<script setup>
import { useRouter } from "vue-router";
import { useTodoStore } from "@/store/index";
import { computed } from "vue";
const store = useTodoStore();
const router = useRouter();
//VueRouter設定
// 絞り込み後のタスク
const todos = computed(() => {
  return store.filteredTodos;
});
// 絞り込み後のタスク数
const countItem = computed(() => {
  return todos.value.length;
});
// 全体タスク数
const countAllItem = computed(() => {
  return store.todos.length;
});
const EditTodo = (todo) => {
  router.push(`/edit/${todo.id}`);
};
// タスクのステータスオブジェクト
const statusTexts = store.statusText;
// タスクの優先度オブジェクト
const priorityTexts = store.priorityText;
// フィルターの内容
const filterQuery = {
  keywords: '',
  status: 0,
  priority: 0,
};
// 絞り込みを行った際の処理
const changeFilterQuery = () => {   
  store.changeFilterQuery(filterQuery);
};
const changeHandler = (id) => store.changeTodoState(id);
const allDelteTodo = () => {
  const message = "選択された項目を全て削除してもよろしいでしょうか?";
  const result = window.confirm(message);
  if (!result) return;
  store.allDeleteTodo();
};
const moveCreatePage = ()=>{
  router.push('/create')
}

const isPopUp = computed(() => store.isPopup)

const closePopUp = () => {
  store.isPopup = false;
}

</script>

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
            <div v-if="countAllItem" class="flex">
              <p>
                {{ filterQuery.status == 0 && filterQuery.priority == 0 ? 'すべての' : '' }}
                {{ filterQuery.status !== 0 ? `ステータスが${statusTexts[filterQuery.status].text}` : '' }}
                {{ filterQuery.status !== 0 && filterQuery.priority == 0 ? 'の' : '' }}
                {{ filterQuery.status !== 0 && filterQuery.priority !== 0 ? '且つ、' : '' }}
                {{ filterQuery.priority !== 0 ? `優先度が「${priorityTexts[filterQuery.priority].text}」の` : '' }}
                タスクは
                {{ countItem ? `${countItem}個あります` : 'ありません。' }}
              </p>
            </div>
            <div v-else>
              <p class="allDone">
                Congratulations!! Nothing to do!!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="text-white bg-gray-500 text-xs ml-5 py-2 px-4 rounded-lg bg-opacity-70" @click="moveCreatePage">
        + タスクを追加
      </button>
      <button class="text-white bg-blue-500 text-xs ml-5 py-2 px-4 rounded-lg bg-opacity-70" @click="allDelteTodo">
        - 選択されたタスクを削除
      </button>
    </div>

    <div class="flex mt-10 ml-5">
      <div>
        <p>キーワード</p>
        <input type="text" placeholder="キーワードを入力" class="border" v-model="filterQuery.keywords" />
      </div>
      <div class="ml-5">
        <p>ステータス</p>
        <select name="status" class="border w-177px" v-model="filterQuery.status" @change="changeFilterQuery('status')">
          <option v-for="statusText in statusTexts" :key="statusText.value" :value="statusText.value">{{
            statusText.text
          }}</option>
        </select>
      </div>
      <div class="ml-5">
        <p>優先度</p>
        <select name="priority" class="border w-177px" v-model="filterQuery.priority"
          @change="changeFilterQuery('priority')">
          <option v-for="priorityText in priorityTexts" :key="priorityText.value" :value="priorityText.value">{{
            priorityText.text
          }}</option>
        </select>
      </div>
    </div>
    <Table @edit-todo="EditTodo" @change-handler="changeHandler" />
     <div v-show="isPopUp" :class="{ popMessage: isPopUp }">
        <div class="close-container">
          <span class="close" @click="closePopUp">✖︎</span>
        </div>
        <p class="text-black">削除されました</p>
      </div>
  </div>
</template>

<style scoped>
.allDone {
  color: gold;
}

.flex {
  display: flex;
}

.popMessage {
  width: 400px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: lightgreen;
  position: fixed;
  bottom: 30px;
  right: 12px;

  animation: pop 3s forwards;
}

@keyframes pop {
  0% {
    transform: translateY(20px);
    opacity: 0;
    animation-timing-function: ease-out;
  }
  20%,
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 1;
  }
}
</style>
