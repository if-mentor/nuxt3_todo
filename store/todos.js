import { defineStore } from "pinia";
export const useStoreTodos = defineStore("todo", {
  state: () => ({
    todos: [
      {
        taskName: "Github上に静的サイトをホスティングする",
        status: "進行中",
        priority: "低",
        createDate: "2021-11-8 18:55:07",
        updateDate: "2021-11-8 18:55:07",
      },
      {
        taskName: "ReactでTodoサイトを作成する",
        status: "着手前",
        priority: "中",
        createDate: "2021-11-8 18:55:07",
        updateDate: "2021-11-8 18:55:07",
      },
      {
        taskName: "Todoサイトで画面遷移できるようにする",
        status: "着手前",
        priority: "高",
        createDate: "2021-11-8 18:55:07",
        updateDate: "2021-11-8 18:55:07",
      },
    ],
  }),
  actions: {
  async deleteTodo(index) {
      console.log(index);
        this.todos.splice(index, 1);
    },
  },
});
