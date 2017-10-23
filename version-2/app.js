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
    data: function () {
        return {
            editing: false,
            draf: '',
        };
    },
    template: '#task_template',
    props: ['tasks', 'task', 'index'],
    methods: {
        toogleStatus: function () {
            this.task.pending = !this.task.pending;
        },
        edit: function () {
            /*
            FIX ME: reimplement this!
            this.tasks.forEach(function (task_item) {
                task_item.editing = false;
            });
            */

            this.draf = this.task.description;

            this.editing = true;
        },
        update: function () {
            this.task.description = this.draf;

            this.editing = false;
        },
        cancel: function () {
            this.editing = false;
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
    	newTask: '',
    	tasks: [
    		{
    			description: 'Aprender Vue.js',
    			pending: true,
    		},
    		{
    			description: 'Crear una API',
    			pending: true,
    		},
    		{
    			description: 'Crear tarea',
    			pending: false,
    		},
    	]
    }
});