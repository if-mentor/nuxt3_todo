import { defineStore } from "pinia";

// defineStore 関数を用いてストアを作成する
//第一引数はユニークキー
export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      //配列でtodosを持つ
      //呼び出し時にIdが一致するものをとっていく
      statusText: [
        {
          value: 0,
          text: "すべて",
        },
        {
          value: 1,
          text: "着手前",
        },
        {
          value: 2,
          text: "進行中",
        },
        {
          value: 3,
          text: "完了",
        },
      ],
      priorityText: [
        {
          value: 0,
          text: "すべて",
        },
        {
          value: 1,
          text: "高",
        },
        {
          value: 2,
          text: "中",
        },
        {
          value: 3,
          text: "低",
        },
      ],
      todos: [
        {
          id: 1,
          taskName: "Github上に静的サイトをホスティングする",
          status: 2,
          priority: 3,
          memo: "",
          createDate: "2021-11-8 18:55:07",
          updateDate: "2021-11-8 18:55:07",
          memo: "",
          isDeleted: false,
        },
        {
          id: 2,
          taskName: "ReactでTodoサイトを作成する",
          status: 1,
          priority: 2,
          createDate: "2021-11-8 18:55:07",
          updateDate: "2021-11-8 18:55:07",
          memo: "",
          isDeleted: false,
        },
        {
          id: 3,
          taskName: "Todoサイトで画面遷移できるようにする",
          status: 1,
          priority: 1,
          createDate: "2021-11-8 18:55:07",
          updateDate: "2021-11-8 18:55:07",
          memo: "",
          isDeleted: false,
        },
      ],
      editTodo: null,
      filterQuery: {
        keywords: "",
        status: 0,
        priority: 0,
      },
    };
  },
  getters: {
    filteredTodos: (state) => {
      let todos = state.todos;
      let status = state.filterQuery.status;
      let priority = state.filterQuery.priority;
      let keywords = state.filterQuery.keywords;

      if (!(status == 0)) {
        todos = todos.filter((todo) => {
          return todo.status == status;
        });
      }
      if (!(priority == 0)) {
        todos = todos.filter((todo) => {
          return todo.priority == priority;
        });
      }
      if (!(keywords == "")) {
        const lowWords = keywords.toLowerCase();
        todos = todos.filter((todo) => {
          return todo.taskName.toLowerCase().includes(lowWords);
        });
      }

      return todos;
    },
  },
  actions: {
    changeFilterQuery(query) {
      this.filterQuery.status = query.status;
      this.filterQuery.priority = query.priority;
      this.filterQuery.keywords = query.keywords;
    },
    updateTodos({ id, status, taskName, priority, memo }) {
      const updateIndex = this.todos.findIndex((todo) => todo.id == id);
      const updateTodo = {
        id: id,
        taskName: taskName,
        status: status,
        memo: memo,
        priority: priority,
        createDate: "2021-11-8 18:55:07",
        updateDate: "2021-11-8 18:55:07",
        isDeleted: false,
      };
      this.todos[updateIndex] = updateTodo;
    },
    changeStatus({ id, status, taskName, priority, memo }) {
      // console.log(id,status,taskName, priority, memo)
      // console.log(typeof(Number(status)))
      const changeStatusTodo = this.todos.find((e) => e.id === id);
      changeStatusTodo.status = Number(status);
    },

    changePriority({ id }) {
      const changePriorityTodo = this.todos.find((e) => e.id === id);
      if (changePriorityTodo.priority === 3) {
        changePriorityTodo.priority = 2;
      } else if (changePriorityTodo.priority === 2) {
        changePriorityTodo.priority = 1;
      } else {
        changePriorityTodo.priority = 3;
      }
    },
    changeTodoState(id) {
      const changeStateIndex = this.todos.findIndex((todo) => todo.id === id);
      this.todos[changeStateIndex].isDeleted = !this.todos[changeStateIndex]
        .isDeleted;
      console.log(changeStateIndex);
    },
    deleteTodo({ id }) {
      const deleteIndex = this.todos.findIndex((e) => e.id === id);
      this.todos.splice(deleteIndex, 1);
    },
    allDeleteTodo() {
      const doneTodo = this.todos.filter((todo) => todo.isDeleted === true);
      //todos配列からisDletedがtrueの要素を絞りこんでdoneTodoに格納
      doneTodo.forEach((doneitem) => {
        //doneTodo一つずつの要素のidとtodosの配列のidが一致するものをtodos配列から削除
        this.todos.forEach((todo, index) => {
          if (todo.id === doneitem.id) {
            this.todos.splice(index, 1);
          }
        });
      });
    },
    addTodo(todoItem) {
      console.log(todoItem);
      this.todos.push(todoItem);
    },
  },
});
