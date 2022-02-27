<template>
    <header class="bg-gray-500 py-5"><h1 class="text-white">TODOアプリ</h1></header>
    <div class="container mx-auto mt-20">
        <form>
            <div class="whitespace-nowrap border-b-2">
                <label>タスク名:</label>
                <input type="text" required>
            </div>
            <div class="whitespace-nowrap">
                <label>内容:</label>
                <textarea required></textarea>
            </div>
            <div class="whitespace-nowrap">
                <label>ステータス:</label>
                <select>
                    <option selected>------</option>
                    <option value="着手予定">着手予定</option>
                    <option value="着手">着手</option>
                    <option value="完了">完了</option>
                </select>
            </div>
            <div class="whitespace-nowrap">
                <label>優先度:</label>
                <select>
                    <option selected>------</option>
                    <option value="高">高</option>
                    <option value="中">中</option>
                    <option value="低">低</option>
                </select>
            </div>
        </form>
    </div>
</template>
