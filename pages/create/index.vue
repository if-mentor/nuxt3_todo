<template>
  <header>
    <h2 class="text-light-50 bg-gray-400 p-4 text-2xl">Todoアプリ</h2>
  </header>

  <form class="pl-8">
    <div class="mt-8 ml-4mx-auto">
      <div class="table w-auto h-auto">
        <div class="table-row">
          <div class="table-cell p-4 border-b whitespace-nowrap">
            <label>タスク名: </label>
          </div>
          <div class="table-cell p-4 border-b">
            <input type="text" class="w-screen-sm border" />
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell p-4 border-b">
            <label>内容:</label>
          </div>
          <div class="table-cell p-4 border-b">
            <textarea type="text" class="w-screen-sm border h-110px">
            </textarea>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell p-4 border-b">
            <label>優先度:</label>
          </div>
          <div class="table-cell p-4 border-b">
            <select class="border w-16"></select>
          </div>
        </div>
      </div>
    </div>
  </form>

  <div class="flex justify-end pt-24 pr-12">
    <button class="text-light-50 bg-sky-300 w-16 h-10 mx-4 rounded-md">
      戻る
    </button>
    <button class="text-light-50 bg-sky-800 w-16 h-10 rounded-md">保存</button>
    <!-- ボタンの色がwindiの標準色になかったため、近い色で代用 -->
  </div>
</template>
