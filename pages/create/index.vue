<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoStore } from '~~/store';

const router = useRouter()
const todosStore = useTodoStore()

const id = ref(new Date().getTime().toString(16))
const taskName = ref<string>('')
const content = ref<string>('')
const selectedPriority = ref<string>('')
const createDate = "2021-11-8 18:55:07"
const updateDate = "2021-11-8 18:55:07"

const todos = computed(() =>
  JSON.parse(
    JSON.stringify(todosStore.filteredTodos)
  )
)

const addTodo = () => {
  if (taskName.value === '' || selectedPriority.value === '') {
    coution()
    return
  }
  todosStore.addTodo({
    id: id.value,
    taskName: taskName.value,
    status: '着手前',
    priority: selectedPriority.value,
    contents: content.value,
    createDate: createDate,
    updateDate: updateDate,
    memo: '',
    isDeleted: ''
  })
  taskName.value = ''
  content.value = ''
  selectedPriority.value = ''
  router.push('/')
}

const coution = ()=>{
  confirm('タスク名と優先度は必ず入力してください')
}


</script>


<template>
  <div>
    <header>
      <h2 class="text-light-50 bg-gray-400 p-4 text-2xl">Todoアプリ</h2>
    </header>

    <form class="pl-8">
      <div class="mt-8 ml-4 mx-auto">
        <div class="table w-auto h-auto">
          <div class="table-row">
            <div class="table-cell p-4 border-b whitespace-nowrap">
              <label>タスク名:</label>
            </div>
            <div class="table-cell p-4 border-b">
              <input type="text" class="w-screen-sm border" v-model="taskName" />
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell p-4 border-b">
              <label>内容:</label>
            </div>
            <div class="table-cell p-4 border-b">
              <textarea class="w-screen-sm border h-110px" v-model="content"></textarea>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell p-4 border-b">
              <label>優先度:</label>
            </div>
            <div class="table-cell p-4 border-b">
              <select class="border w-16" id="priority" v-model="selectedPriority">
                <option selected value>---</option>
                <option value="1">高</option>
                <option value="2">中</option>
                <option value="3">低</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="flex justify-end pt-24 pr-12">
      <button
        class="text-light-50 bg-sky-300 w-16 h-10 mx-4 rounded-md"
        @click="router.push('/')"
      >戻る</button>
      <button class="text-light-50 bg-sky-800 w-16 h-10 rounded-md" @click="addTodo">保存</button>
      <!-- ボタンの色がwindiの標準色になかったため、近い色で代用 -->
    </div>

    <h4>{{ todos }}</h4>
  </div>
</template>
