<script setup>
const items = ["タスク名", "", "ステータス", "優先度", "作成日時", "更新日時"];
const todos = [
  {
    taskName: "Github上に静的サイトをホスティングする",
    status: "進行中",
    priority: "低",
    createDate: "2021-11-8 18:55:07",
    updateDate: "2021-11-8 18:55:07",
  },
  {
    taskName: "ReactでTodoサイトを作成する",
    status: "着手前",
    priority: "中",
    createDate: "2021-11-8 18:55:07",
    updateDate: "2021-11-8 18:55:07",
  },
  {
    taskName: "Todoサイトで画面遷移できるようにする",
    status: "着手前",
    priority: "高",
    createDate: "2021-11-8 18:55:07",
    updateDate: "2021-11-8 18:55:07",
  },
];

const router = useRouter()

const moveDetailPage = () => {
  console.log(router.currentRoute.value)
  router.push('/detail')
}
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

      <div class="table-row-group" v-for="todo in todos" :key="todo.taskName">
        <div class="table-row h-12">
          <div class="table-cell pt-3 w-350px">
            <input type="checkbox" class="mx-2" />
            <span class="text-blue-500" @click="moveDetailPage">{{ todo.taskName }}</span>
          </div>
          <div class="table-cell pt-3">
            <button 
              class="w-25px h-25px ml-3 border-2 font-medium text-sm text-gray-500 rounded hover:bg-gray-200 shadow-2xl"
            >
              <Icon name="Pencil" solid />
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
