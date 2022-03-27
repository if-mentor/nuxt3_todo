import { defineStore } from "pinia";

// defineStore 関数を用いてストアを作成する
//第一引数はユニークキー
export const useTodoStore = defineStore('todos',{
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
            memo: '',
            createDate: "2021-11-8 18:55:07",
            updateDate: "2021-11-8 18:55:07",
            memo:'',
            isDeleted: false,
          },
          {
            id:2,
            taskName: "ReactでTodoサイトを作成する",
            status: "着手前",
            priority: "中",
            createDate: "2021-11-8 18:55:07",
            updateDate: "2021-11-8 18:55:07",
            memo: '',
            isDeleted: false,
          },
          {
            id: 3,
            taskName: "Todoサイトで画面遷移できるようにする",
            status: "着手前",
            priority: "高",
            createDate: "2021-11-8 18:55:07",
            updateDate: "2021-11-8 18:55:07",
            memo:'',
            isDeleted: false,
          },
      ],
    };
  },
  getters: {
    filteredTodos: state => state.todos
  },
  actions: {
    updateTodos({id, status, taskName, priority, memo}) {
      const updateIndex = this.todos.findIndex(todo => todo.id == id);
      const updateTodo = {
        id: id,
        taskName: taskName,
        status: status,
        memo: memo,
        priority: priority,
        createDate: "2021-11-8 18:55:07",
        updateDate: "2021-11-8 18:55:07",
        isDeleted: false,
      }
      this.todos[updateIndex] = updateTodo;

    },
    changeTodoState( id ){
      const changeStateIndex = this.todos.findIndex(todo => todo.id === id);
      this.todos[changeStateIndex].isDeleted = !this.todos[changeStateIndex].isDeleted;
      console.log(changeStateIndex)
    },
    allDeleteTodo(){
        const doneTodo = this.todos.filter(todo => todo.isDeleted === true);
        //todos配列からisDletedがtrueの要素を絞りこんでdoneTodoに格納

        doneTodo.forEach(doneitem =>{
          //doneTodo一つずつの要素のidとtodosの配列のidが一致するものをtodos配列から削除
          this.todos.forEach((todo,index) => {
            if(todo.id === doneitem.id){
              this.todos.splice(index, 1)
            }
          })
        })

    },
},
});