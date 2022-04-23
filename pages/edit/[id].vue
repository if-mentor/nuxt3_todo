<template>
  <div>
    <header class="bg-gray-500 py-5">
      <h1 class="text-white text-2xl pl-4">TODOアプリ</h1>
    </header>
    <div class="container mx-auto mt-20">
      <form>
        <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
          <label class="basis-1/6">タスク名</label>
          <label class="w-1">:</label>
          <input
            type="text"
            required
            class="basis-auto ml-10 w-screen-sm input input-primary input-sm focus:outline-none"
            v-model="todoObj.taskName"
          />
        </div>
        <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
          <label class="basis-1/6">内容</label>
          <label class="w-1">:</label>
          <textarea
            required
            class="basis-auto h-120px ml-10 w-screen-sm textarea textarea-primary focus:outline-none"
            v-model="todoObj.memo"
          ></textarea>
        </div>
        <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
          <label class="basis-1/6">ステータス</label>
          <label class="w-1">:</label>
          <select
            class="select select-primary w-full max-w-xs w-30 ml-10 select-sm w-full max-w-xs focus:outline-none"
            v-model="todoObj.status"
          >
            <option disabled>------</option>
            <option value="1">着手前</option>
            <option value="2">進行中</option>
            <option value="3">完了</option>
          </select>
        </div>
        <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
          <label class="basis-1/6">優先度</label>
          <label class="w-1">:</label>
          <select
            class="select select-primary w-full max-w-xs w-30 ml-10 select-sm w-full max-w-xs focus:outline-none"
            v-model="todoObj.priority"
          >
            <option value="1">高</option>
            <option value="2">中</option>
            <option value="3">低</option>
          </select>
        </div>
      </form>

      <!-- モーダル -->
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box z-2">
          <h3 class="font-bold text-lg text-black">修正内容</h3>
          <div class="py-4 text-black">
            <p>タスク名: {{ todoObj.taskName }}</p>
            <p>内容: {{ todoObj.memo }}</p>
            <p>ステータス: {{ todoObj.status }}</p>
            <p>優先度: {{ todoObj.priority }}</p>
          </div>
          <div class="modal-action">
            <label for="my-modal" class="btn btn-primary" @click="saveData">この内容で保存する</label>
            <label for="my-modal" class="btn btn-secondary">キャンセル</label>
          </div>
        </div>
      </div>

      <div class="mt-20 flex justify-end">
        <button class="btn bg-blue-700 w-20 h-10 mx-4 rounded-md px-2">リセット</button>
        <button
          class="btn w-20 h-10 mx-4 rounded-md px-2"
          @click="goToHome"
        >戻る</button>
        <label
          for="my-modal"
          class="btn btn-primary w-20 h-8 mx-4 rounded-md px-2 modal-button"
        >保存</label>
      </div>

      <Toast>保存されました</Toast>

      <!-- ポップアップ -->
    </div>
  </div>
</template>

<style>
input,
textarea,
select,
label {
  display: block;
}
input,
textarea,
select {
  border: 1px solid #e7e7e7;
}
.btn {
  color: white;
}

.close-container {
  position: relative;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.modal-box {
  background: #fff;
}



</style>

<script>
import { useTodoStore } from "@/store/index";
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Toast from '@/components/toast.vue'

export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useTodoStore();
        const id = route.params.id;
        const todos = computed(() => store.filteredTodos.find(todo => todo.id == id));
        const { taskName, status, priority, memo } = todos.value;
        const dominance = ref(priority)
        const progress = ref(status)
        const content = ref(memo);
        const title = ref(taskName);
        //更新する内容
        const todoObj = reactive({
            id,
            status: progress.value,
            priority: dominance.value,
            content: content.value,
            taskName: title.value,
            memo: content.value,
        });
        const saveData = () => {
            store.updateTodos(todoObj);
            store.popUp();
        };
        const goToHome = () => { router.push("/"); };
        return {
            progress,
            dominance,
            content,
            title,
            todos,
            todoObj,
            saveData,
            goToHome,
        };
    },
    components: { Toast }
}

</script>
