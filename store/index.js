import { defineStore } from "pinia";

// defineStore 関数を用いてストアを作成する
//第一引数はユニークキー
export const useTodoStore = defineStore('todos',{
  state: () => {
    return {
      todos: null
    };
  },
  getters: {
    },
  actions: {
    setEditTodo(payload){
      this.todos = payload
    },
    upDateTodos(payload) {
      this.todos = payload
    },
  },
});