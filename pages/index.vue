
<template>
  <div>
    <header>
      <h1 class="text-white bg-gray-500 text-2xl font-sans pl-5 py-3">Todoアプリ</h1>
    </header>

    <div class="flex mt-10 ml-5">
      <p class="text-xl">
        進行中のタスクは
        <span class="text-pink-500">3個</span>あります
      </p>
      <button
        class="text-white bg-gray-500 text-xs ml-5 py-2 px-4 rounded-lg bg-opacity-70"
      >+ タスクを追加</button>
    </div>

    <div class="flex mt-10 ml-5">
      <div>
        <p>キーワード</p>
        <input type="text" placeholder="キーワードを入力" class="border" />
      </div>
      <div class="ml-5">
        <p>ステータス</p>
        <select name="status" class="border w-177px">
          <option selected>すべて</option>
          <option value="着手前">着手前</option>
          <option value="進行中">進行中</option>
          <option value="完了">完了</option>
        </select>
      </div>
      <div class="ml-5">
        <p>優先度</p>
        <select name="priority" class="border w-177px">
          <option selected>すべて</option>
          <option value="高">高</option>
          <option value="中">中</option>
          <option value="低">低</option>
        </select>
      </div>
    </div>
    <Table @edit-todo="EditTodo" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useTodoStore } from "../store/index";
export default {
  setup(){
    const router = useRouter();
    //VueRouter設定
    const store = useTodoStore();
    //pinia設定
    //storeToRefsでreactiveになる

      const editTodoSet = (item) => {
        store.setEditTodo(item)
      }

    const EditTodo = (todo) => {
      router.push({
        path: `/edit/${todo.id}`,
      })
      editTodoSet(todo)
    }
    return { EditTodo }
  },
}

</script>