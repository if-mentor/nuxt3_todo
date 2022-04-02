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
              <label for="taskName">タスク名:</label>
            </div>
            <div class="table-cell p-4 border-b">
              <input type="text" class="w-screen-sm border" id="taskName" v-model="taskName" />
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell p-4 border-b">
              <label for="contents">内容:</label>
            </div>
            <div class="table-cell p-4 border-b">
              <textarea
                type="text"
                class="w-screen-sm border h-110px"
                id="contents"
                v-model="contents"
              />
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell p-4 border-b">
              <label for="priority">優先度:</label>
            </div>
            <div class="table-cell p-4 border-b">
              <select class="border w-16" id="priority" v-model="selectedPriority">
                <option value>---</option>
                <option value="高">高</option>
                <option value="中">中</option>
                <option value="低">低</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="flex justify-end pt-24 pr-12">
      <button class="text-light-50 bg-sky-300 w-16 h-10 mx-4 rounded-md" @click="returnToppage">戻る</button>
      <button class="text-light-50 bg-sky-800 w-16 h-10 rounded-md" @click="addTodo">保存</button>
      <!-- ボタンの色がwindiの標準色になかったため、近い色で代用 -->
    </div>
    <h3>{{todosGetters}}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoStore } from '~/store/index';

const todosStore = useTodoStore()
const router = useRouter()
const taskName = ref<string>('')
const contents = ref<string>('')
const selectedPriority = ref<string>('')
const createDate = "2021-11-8 18:55:07"
const updateDate = "2021-11-8 18:55:07"

const todosGetters = computed(() => {
  return todosStore.filteredTodos
})

// const emit = defineEmits<{
//   (evetn: 'add-todo', todo: any): void
// }>()
const returnToppage = () => {
  router.push('/')
}



const addTodo = () => {
  todosStore.addTodo({
    id: todosGetters.value.length + 1,
    taskName: taskName.value,
    status: '着手前',
    priority: selectedPriority.value,
    contents: contents.value,
    createDate: createDate,
    updateDate: updateDate
  })

  taskName.value = ''
  contents.value = ''
  selectedPriority.value = ''

}

</script>