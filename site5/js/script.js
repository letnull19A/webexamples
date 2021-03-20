// Application

var app = new Vue({
    el: "#app",
    data: {
        message: "Message"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "Time is: " + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            {text: "list item"},
            {text: "list item"},
            {text: "list item"},
            {text: "list item"}
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Simple text"
    },

    methods: {
        clickMethod: function() 
        {
            this.message = "Hello world";
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "Hello world!"
    }
});

// Add new component in vue.js

Vue.component("todo-item", {
    props: ['todo'],
    template: '<li> {{ todo.text }} </li>'
});

var app7 = new Vue({
    el: "#app-7",
    data: {
        list: [
            {id: 0, text: "Du!"},
            {id: 1, text: "Du hast"},
            {id: 2, text: "Du hast mich"},
            {id: 3, text: "Du!"}
        ]
    }
});

