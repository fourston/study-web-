var Vue = require('vue/dist/vue.js');

Vue.component('todo-item', {
  props: ['todo'],
  methods: {
    onClick: function() {
      this.$emit('click', this.newTodo);

    }
  },
  template:`

  <li v-if="deleted"> {{todo.text}} <button v-on:click='onClick'>Delete</button> </li>
  `
});

Vue.component('todo-input', {
  data:function() {
    return {newTodo: '', counter: 0, deleted: false,};
  },
  methods: {
    onClick: function() {

      if (this.newTodo != '' &&  this.counter<10)
      {
        this.$emit('click', this.newTodo);
        this.counter += 1;
        this.newTodo = '';
        this.deleted = true;
      }

    }
  },
  template: `
  <div>
    <input v-model='newTodo'/>
    <button v-on:click='onClick'>Add</button>
    <p>{{counter}}</p>
  </div>
  `
});




var app = new Vue({
  el: '#app',
  data: {
      todos: [],
      counter: 0,
      overline: false,
    },
  methods: {
    addTodo: function (text) {
      this.todos.push({
        text: text
      });
      },
    removeTodo: function(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      this.overline = true;
      this.counter -= 1;
    },
  },
});
