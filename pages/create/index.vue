<template>
  <div class=" bg-gray-200 border-4">
<div class="mx-auto">
    <p class="text-gray-500 text-xs">addTask画面</p>
    <h1 class="text-light-50 bg-gray-400 p-4  text-2xl">Todoアプリ</h1>
    <div class="pl-12 bg-light-50">

  <form class="flex ml-4 p-8">
    <div class="my-8">
      <label class=" " 
        >タスク名: <input type="" class="w-screen-sm  border"
      /></label>
    <div class="my-8">
      <label class="">内容: <textarea type="text" class="w-screen-sm h-120px border" > </textarea></label>
    </div>
    <div class="my-8">
      <label class
        >優先度:
        <select class=" border w-16"></select
      ></label>
    </div>
    </div>
  </form>
    <div class="flex justify-end p-24 ">
    <button class="text-light-50 bg-sky-300 w-16 h-10 mx-4 rounded-md">戻る</button>
    <button class="text-light-50 bg-sky-800 w-16 h-10 rounded-md">保存</button>
    </div>
    </div>
  </div>
</div>
</template>
