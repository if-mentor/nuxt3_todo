import { defineStore } from "pinia";

interface TodoState {
  taskName: String;
  status: String;
  priority: String;
  createDate: String;
  updateDate: String;
}

export const useTodos = defineStore("todos", {
  state: (): TodoState => ({
    taskName: 'boo',
    status: '',
    priority: '',
    createDate: '',
    updateDate: '',
  }),

  actions:{
    chnageTaskName(){
      this.taskName = 'foo'
    }
  }
});
