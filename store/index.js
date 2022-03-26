import { defineStore } from "pinia";

// defineStore 関数を用いてストアを作成する
//第一引数はユニークキー
export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      //配列でtodosを持つ
      //呼び出し時にIdが一致するものをとっていく
      todos: [
        {
          id: 1,
          taskName: "Github上に静的サイトをホスティングする",
          status: "進行中",
          priority: "低",
          createDate: "2021-11-8 18:55:07",
          updateDate: "2021-11-8 18:55:07",
        },
        {
          id: 2,
          taskName: "ReactでTodoサイトを作成する",
          status: "着手前",
          priority: "中",
          createDate: "2021-11-8 18:55:07",
          updateDate: "2021-11-8 18:55:07",
        },
        {
          id: 3,
          taskName: "Todoサイトで画面遷移できるようにする",
          status: "着手前",
          priority: "高",
          createDate: "2021-11-8 18:55:07",
          updateDate: "2021-11-8 18:55:07",
        },
      ],
      editTodo: null,
    };
  },
  getters: {
    todosGetters: (state) => state.todos,
  },
  actions: {
    updateTodos(payload) {
      this.todos = payload;
    },
  },
});