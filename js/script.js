const { createApp } = Vue;
createApp({
    data() {
        return {
            newTodo: {
                text: "",
                done: false,
              },
            todoList: [
                {
                    text: 'Quarterly Newsletter',
                    done: true,
                },
                {
                    text: 'Recruiting blog post',
                    done: true,
                },
                {
                    text: 'Mobile app luaunch',
                    done: true,
                },
                {
                    text: 'Interview John H.',
                    done: false,
                },
                {
                    text: 'Summit update to mobile storefronts',
                    done: true,
                },
                {
                    text: 'Schedule meeting with Alex',
                    done: false,
                },
                {
                    text: 'Homepage refresh',
                    done: true,
                },
                {
                    text: 'Onboard new Sales team members',
                    done: true,
                },
                {
                    text: 'Review editorial calendar',
                    done: true,
                },
            ]

        };
    },
    created() {
       
    },
    methods: {
        addTodo: function () {
            const copyTodo = { ...this.newTodo };
            this.todoList.push(copyTodo);
            this.newTodo.text = "";
        }
},

    
}).mount("#app");
