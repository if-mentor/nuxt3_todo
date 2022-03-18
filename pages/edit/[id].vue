<template>
    <header class="bg-gray-500 py-5"><h1 class="text-white text-2xl pl-4">TODOアプリ</h1></header>
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
                    <option value="進行中">進行中</option>
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


        <!-- モーダル -->
        <input type="checkbox" id="my-modal" class="modal-toggle">
        <div class="modal">
            <div class="modal-box z-2">
                <h3 class="font-bold text-lg text-black">修正内容</h3>
                <div class="py-4 text-black">
                    <p>タスク名: {{ title }}</p>
                    <p>内容: {{ content }}</p>
                    <p>ステータス: {{ progress }}</p>
                    <p>優先度: {{ dominance }}</p>
                </div>
                <div class="modal-action">
                    <label for="my-modal" class="btn btn-save" @click="saveData">この内容で保存する</label>
                    <label for="my-modal" class="btn btn-cancel">キャンセル</label>
                </div>
            </div>
        </div>

        <div class="mt-20 flex justify-end">
            <button class="text-light-50 bg-blue-700 w-20 h-10 mx-4 rounded-md px-2">リセット</button>
            <button class="text-light-50 bg-gray-400 w-20 h-10 mx-4 rounded-md px-2" @click="goToHome">戻る</button>
            <label for="my-modal" class="btn text-light-50 bg-sky-700 w-20 h-8 mx-4 rounded-md px-2 modal-button">保存</label>
        </div>

            <!-- ポップアップ -->
            <div v-show="isPopUp" :class="{popMessage: isPopUp}">
                <div class="close-container">
                    <span class="close" @click="closePopUp">✖︎</span>
                </div>
                <p class="text-black">保存されました</p>
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
    .btn {
        color: white;
    }

    .btn-save {
        background-color: blue;
    }

    .btn-cancel {
        background-color: red;
    }

    .close-container {
        position: relative
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

    .popMessage {
        width: 400px;
        padding: 8px 16px;
        border-radius: 4px;
        background-color: pink;
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
        20%,80% {
            transform: none;
            opacity: 1;
        }
        100% {
            transform: translateY(20px);
            opacity: 1;
        }

    }
</style>

<script>
    import { useTodoStore } from "@/store/index";
    import { computed } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    export default {
        setup(){
            const router = useRouter();
            const route = useRoute();
            const store = useTodoStore();
            const id = route.params.id;
            const todos = computed(() => store.todos.find(todo => todo.id == id));
            const { taskName, status, priority } = todos.value
            const dominance = ref(priority);
            const progress = ref(status);
            const content = ref('');
            const title = ref(taskName);
            const isPopUp = ref(false);

            //更新する内容
            const updateItem = {
                progress,
                dominance,
                content,
                title,
            };

            const saveData = () => {
                    store.updateTodos(updateItem)
                    isPopUp.value = true;
                };
            const goToHome = () => { router.push('/') };
            const closePopUp = () => { isPopUp.value = false};


            return {
                progress,
                dominance,
                content,
                title,
                todos,
                saveData,
                goToHome,
                isPopUp,
                closePopUp
            };

        },
    }

</script>