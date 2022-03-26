import { defineStore } from "pinia";

// defineStore 関数を用いてストアを作成する
//第一引数はユニークキー
export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      //配列でtodosを持つ
      //呼び出し時にIdが一致するものをとっていく
      todos: [
        
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
    async deleteTodo(index) {
      console.log(index);
      this.todos.splice(index, 1);
    },
    addTodo(newItem) {
      this.todos.push(newItem);
    },
  },
});
