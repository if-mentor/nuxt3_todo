<script setup>
import { computed } from "vue";
import { useTodoStore } from "@/store/index";
import { useRouter } from "vue-router";

const store = useTodoStore();
const items = [
    {
    value: "taskName",
    text:"タスク名"
  },
  {
    value: "",
    text: "",
  },
  {
    value: "",
    text:"ステータス", 
  },
  {
    value: "",
    text:"優先度",
  },
  {
    value: "createDate",
    text:"作成日時",
  },
  {
    value: "updateDate",
    text:"更新日時"
  },
];
const priorityTexts = store.priorityText;
const todos = computed(() => store.filteredTodos);
const router = useRouter();

const emit = defineEmits(["edit-todo", "change-handler"]);
const editTodo = (item) => emit("edit-todo", item);




const deleteTodo = (todo) => {
  if (window.confirm("削除してよろしいでしょうか")) {
    store.deleteTodo(todo);
    store.popUp();
  }
};
const changeStatus = (todo) => {
  store.changeStatus(todo);
};
const changePriority = (todo) => {
  store.changePriority(todo);
};
const changeHandler = (id) => emit("change-handler", id);

const moveDetailPage = todo => {
  router.push(`/detail/${todo.id}`)

}

// ソート機能を行った際の昇順降順アイコン処理
const changeSortIcon = (item) => {
    if(item != '') {
      return {
        'asc': store.sortKey === item && store.sortAsc,
        'desc': store.sortKey === item && !store.sortAsc,
      }
    }
};
// ソート機能を行った際の処理
const sortTodos = (item) => {
  store.sortTodos(item);
};

</script>

<template>
  <div class="w-auto mx-auto mt-10">
    <div class="table w-4/5 mx-auto">
      <div class="table-header-group pb-10">
        <div class="table-row bg-gray-500/50 bg-opacity-10">
          <div
            class="table-cell px-5 font-bold pl-5 p-2 text-center relative" 
            v-for="item in items"
            :key="item"
            @click="sortTodos(item.value)" 
            :class="changeSortIcon(item.value)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>

      <div class="table-row-group" v-for="todo in todos" :key="todo.id">
        <div class="table-row h-12">
          <div class="table-cell pt-3 w-350px">
            <input type="checkbox" @change="changeHandler(todo.id)" class="mx-2 inline-block" />
            <span
              class="text-blue-500 hover:(text-blue-100) inline-block cursor-pointer"
              @click="moveDetailPage(todo)"
            >{{ todo.taskName }}</span>
          </div>
          <div class="table-cell pt-3">
            <button
              class="w-25px h-25px ml-3 border-2 font-medium text-sm text-gray-500 rounded hover:bg-gray-200 shadow-2xl"
            >
              <Icon name="Pencil" @click="emit('edit-todo', todo)" solid />
            </button>

            <button
              class="w-25px h-25px ml-3 border-2 font-medium text-sm text-gray-500 rounded hover:bg-gray-200 shadow-2xl"
              @click="deleteTodo(todo)"
            >
              <Icon name="Trash" solid />
            </button>
          </div>
          <div class="table-cell">
            <select
              @change="changeStatus(todo)"
              v-model="todo.status"
              :class="[
                'text-center mx-auto rounded-4xl ',
                todo.status == 1 ? 'bg-blue-100 text-blue-700' : '',
                todo.status == 2 ? 'bg-orange-100 text-orange-700' : '',
                todo.status == 3 ? 'bg-green-100 text-green-700' : '',
              ]"
            >
              <option value="1">着手前</option>
              <option value="2">進行中</option>
              <option value="3">完了</option>
            </select>
          </div>
          <div class="table-cell">
            <button @click="changePriority(todo)" class="flex justify-center items-center ml-6">
              <div
                :class="[
                  'text-center w-15px h-15px rounded-1/2 border-3 ',
                  todo.priority == 1 ? 'border-red-500' : '',
                  todo.priority == 2 ? 'border-yellow-500' : '',
                  todo.priority == 3 ? 'border-green-500' : '',
                ]"
              />
              <span class="ml-2">{{ priorityTexts[todo.priority].text }}</span>
            </button>
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

<style scoped>
.asc::after {
  content: "▲";
  position: absolute;
  font-size: 70%;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
}
.desc::after {
  content: "▼";
  position: absolute;
  font-size: 70%;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
}

</style>