import { defineStore } from "pinia";

interface TodoState {
  taskName: String;
  status: String;
  priority: String;
}

export const useTodos = defineStore("todos", {
  state: (): TodoState => ({
    taskName: "",
    status: "",
    priority: "",
  }),

  getters: {
    todoGetters() {
      return {
        taskName: this.taskName,
        status: this.status,
        priority: this.priority,
      };
    },
  },

  actions: {
    applySelectedTodo(todo: TodoState) {
      this.taskName = todo.taskName;
      this.status = todo.status;
      this.priority = todo.priority;
    },
  },
});
