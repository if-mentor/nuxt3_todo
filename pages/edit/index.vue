<template>
  <header class="bg-gray-500 py-5">
    <h1 class="text-white text-2xl pl-4">TODOアプリ</h1>
  </header>
  <div class="container mx-auto mt-20">
    <form>
      <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
        <label class="basis-1/6">タスク名</label>
        <label class="w-1">:</label>
        <input type="text" required class="basis-auto ml-10 w-screen-sm" />
      </div>
      <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
        <label class="basis-1/6">内容</label>
        <label class="w-1">:</label>
        <textarea required class="basis-auto h-120px ml-10 w-screen-sm"></textarea>
      </div>
      <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
        <label class="basis-1/6">ステータス</label>
        <label class="w-1">:</label>
        <select class="w-20 ml-10">
          <option selected>------</option>
          <option value="着手予定">着手予定</option>
          <option value="着手">着手</option>
          <option value="完了">完了</option>
        </select>
      </div>
      <div class="whitespace-nowrap border-b-2 flex py-4 w-full">
        <label class="basis-1/6">優先度</label>
        <label class="w-1">:</label>
        <select class="w-20 ml-10">
          <option selected>------</option>
          <option value="高">高</option>
          <option value="中">中</option>
          <option value="低">低</option>
        </select>
      </div>
    </form>

    <div class="mt-20 flex justify-end">
      <button class="text-light-50 bg-blue-700 w-20 h-10 mx-4 rounded-md px-2">リセット</button>
      <button class="text-light-50 bg-gray-400 w-20 h-10 mx-4 rounded-md px-2">戻る</button>
      <button class="text-light-50 bg-sky-700 w-20 h-10 mx-4 rounded-md px-2">保存</button>
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
</style>