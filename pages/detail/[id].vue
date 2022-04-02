<script setup lang="ts">
import { computed } from 'vue';
import { useTodoStore } from '~/store/index';

const todos = useTodoStore()
const route = useRoute()
const router = useRouter()
const id = route.params.id


const selectedTodo = computed(() => {
  const todosGetters = todos.filteredTodos
  const selecedItemArray = todosGetters.filter(todo => todo.id === Number(id))
  return selecedItemArray[0]
})

</script>




<template>
  <div>
    <header class="bg-gray-500 py-5">
      <h1 class="ml-12 text-white text-3xl">Todoアプリ</h1>
    </header>
    <div class="container mx-auto mt-20">
      <div class="table w-auto h-auto">
        <div class="table-row-group">
          <div class="table-row">
            <div class="table-cell py-10 whitespace-nowrap text-center border-b-2">
              タスク名
              <span class="ml-15">:</span>
            </div>
            <div class="table-cell pl-30 border-b-2">{{ selectedTodo.taskName }}</div>
          </div>

          <div class="table-row">
            <div class="table-cell text-center whitespace-nowrap pt-10 pb-30 border-b-2">
              内容
              <span class="ml-20">:</span>
            </div>
            <div
              class="table-cell pl-30 border-b-2"
            >最近、忙しくてアニメを見る時間がないのでここらでひたすらアニメを見る時間が必要だと思う。 眠たむなっても大丈夫なようにmosterと眠眠打破を用意する。 もし、寝落ちしてしまったら、もう一度初めから見直す。</div>
          </div>

          <div class="table-row">
            <div class="table-cell text-center border-b-2 py-10 whitespace-nowrap">
              ステータス
              <span class="ml-13">:</span>
            </div>
            <div class="table-cell border-b-2 pl-30">{{ selectedTodo.status }}</div>
          </div>

          <div class="table-row">
            <div class="table-cell tex-center whitespace-nowrap border-b-2 py-10">
              優先度
              <span class="ml-20">:</span>
            </div>
            <div class="table-cell border-b-2 pl-30">{{ selectedTodo.priority }}</div>
          </div>
        </div>
      </div>
      <div class="w-100% text-right">
        <button
          class="bg-gray-500 cursor-pointer p-2 mt-10 text-white rounded-md"
          @click="router.push('/')"
        >戻る</button>
        <button
          class="bg-gray-500 cursor-pointer p-2 mt-10 ml-5 text-white rounded-md"
          @click="router.push(`/edit/${selectedTodo.id}`)"
        >編集</button>
      </div>
    </div>
  </div>
</template>



