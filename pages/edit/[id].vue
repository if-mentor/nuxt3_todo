<template>
    <header class="bg-gray-500 py-5"><h1 class="text-white text-2xl pl-4">TODOアプリ{{ $route.params.id }}</h1></header>
    <div class="container mx-auto mt-20">
        <form>
            <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
                <label class="basis-1/6">タスク名</label>
                <label class="w-1">:</label>
                <input type="text" required class="basis-auto ml-10 w-screen-sm" v-model="title">
            </div>
            <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
                <label class="basis-1/6">内容</label>
                <label class="w-1">:</label>
                <textarea required class="basis-auto h-120px ml-10 w-screen-sm" v-model="content"></textarea>
            </div>
            <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
                <label class="basis-1/6">ステータス</label>
                <label class="w-1">:</label>
                <select class="w-20 ml-10" v-model="progress">
                    <option disabled>------</option>
                    <option value="着手前">着手前</option>
                    <option value="着手">着手</option>
                    <option value="完了">完了</option>
                </select>
            </div>
            <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
                <label class="basis-1/6">優先度</label>
                <label class="w-1">:</label>
                <select class="w-20 ml-10" v-model="dominance">
                    <option disabled>------</option>
                    <option  value="高">高</option>
                    <option value="中">中</option>
                    <option value="低">低</option>
                </select>
            </div>
        </form>

        <div class="mt-20 flex justify-end">
            <button class="text-light-50 bg-blue-700 w-20 h-10 mx-4 rounded-md px-2">リセット</button>
            <button class="text-light-50 bg-gray-400 w-20 h-10 mx-4 rounded-md px-2">戻る</button>
            <button class="text-light-50 bg-sky-700 w-20 h-10 mx-4 rounded-md px-2" @click.prevent="saveData">保存</button>
        </div>
    </div>
</template>

<style>
    input,textarea,select,label {
        display: block;
    }
    input,textarea,select {
        border: 1px solid #e7e7e7
    }
</style>

<script>
import { useTodoStore } from "@/store/index";
import { computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup(){
    const router = useRouter();
    const store = useTodoStore();
    //storeToRefsでリアクティブデータになる
    const todos = computed(() => {
        return store.todos
    })
    console.log(todos.value)
    const {priority, status, taskName} = todos.value
    console.log(priority)
    console.log(status)
    console.log(taskName)

    const dominance = ref(priority)
    const progress = ref(status);
    const content = ref('');
    const title = ref(taskName);

    const upDateItem = {
        progress,
        dominance,
        content,
        title,
    }

    const saveData = () => {
        store.upDateTodos(upDateItem)
    }

    return {
        progress,
        dominance,
        content,
        title,
        todos,
        saveData,
    }

    },
}

</script>