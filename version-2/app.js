Vue.component('app-icon', {
    template: '<span :class="cssClasses" aria-hidden="true"></span>',
    props: ['img'],
    computed: {
        cssClasses: function () {
            return 'glyphicon glyphicon-' + this.img;
        }
    }
});

var vm = new Vue({
    el: '#app',
    methods: {
    	createTask: function () {
    		this.tasks.push({
    			description: this.newTask,
    			pending: true,
    			editing: false
    		});

    		this.newTask = '';
    	},
        editTask: function (task) {
            this.tasks.forEach(function (task_item) {
                task_item.editing = false;
            });

            this.draf = task.description;

            task.editing = true;
        },
        updateTask: function (task) {
            task.description = this.draf;

            task.editing = false;
        },
        cancelTask: function (task) {
            task.editing = false;
        },
        deleteTask: function (index) {
            this.tasks.splice(index, 1);
        },
        deleteCompleted: function () {
            this.tasks = this.tasks.filter(function (task_item) {
                return task_item.pending;
            });
        },
        toogleStatus: function (task) {
            task.pending = !task.pending;
        },
    },
    data: {
        draf: '',
    	newTask: '',
    	tasks: [
    		{
    			description: 'Aprender Vue.js',
    			pending: true,
    			editing: false
    		},
    		{
    			description: 'Crear una API',
    			pending: true,
    			editing: false
    		},
    		{
    			description: 'Crear tarea',
    			pending: false,
    			editing: false
    		},
    	]
    }
});