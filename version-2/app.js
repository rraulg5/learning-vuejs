Vue.component('app-icon', {
    template: '<span :class="cssClasses" aria-hidden="true"></span>',
    props: ['img'],
    computed: {
        cssClasses: function () {
            return 'glyphicon glyphicon-' + this.img;
        }
    }
});

Vue.component('app-task', {
    template: '#task_template',
    props: ['tasks', 'task', 'index'],
    methods: {
        toogleStatus: function () {
            this.task.pending = !this.task.pending;
        },
        edit: function () {
            this.tasks.forEach(function (task_item) {
                task_item.editing = false;
            });

            this.draf = this.task.description;

            this.task.editing = true;
        },
        update: function () {
            this.task.description = this.draf;

            this.task.editing = false;
        },
        cancel: function () {
            this.task.editing = false;
        },
        remove: function () {
            this.tasks.splice(this.index, 1);
        },
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
        deleteCompleted: function () {
            this.tasks = this.tasks.filter(function (task_item) {
                return task_item.pending;
            });
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