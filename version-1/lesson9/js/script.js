
function findById(items, id) {
	for (var i in items) {
		if (items[i].id == id) {
			return items[i];
		}
	}
	return null;
}

Vue.filter('category', function (id) {
	var category = findById(this.categories, id);
	return category !== null ? category.name: 'No Category';
});

Vue.component('select-category', {
	template: '#tmpl-select-category',
	props: ['categories', 'id']
});

Vue.component('note-row', {
	template: '#tmpl-note-row',
	props: ['note', 'categories'],
	data: function () {
		return {
			editing: false
		};
	},
	methods: {
		remove: function () {
			this.$parent.notes.$remove(this.note);
		},
		edit: function () {
			this.editing = true;
		},
		update: function () {
			this.editing = false;
		}
	}
});

var vm = new Vue({
	el: 'body',
	data: {
		new_note: {
			text: '',
			category_id: ''
		},
		notes: [
			{
				text: 'A business that makes nothing but money is a poor business. - Henry Ford',
				category_id: 1
			},
			{
				text: 'The purpose of art is washing the dust of daily life off our souls. - Pablo Picasso',
				category_id: 2
			},
			{
				text: 'Science is a way of thinking much more than it is a body of knowledge. - Albert Einstein',
				category_id: 3
			},
						{
				text: 'The most exciting phrase to hear in science, the one that heralds new discoveries, is not \'Eureka!\' but \'That\'s funny...\' - Isaac Asimov',
				category_id: 3
			},
			{
				text: 'Geologists have a saying - rocks remember. - Neil Armstrong',
				category_id: 3
			},
		],
		categories: [
			{
				id: 1,
				name: 'Business'
			},
			{
				id: 2,
				name: 'Art'
			},
			{
				id: 3,
				name: 'Science'
			},
		]
	},
	methods: {
		create: function () {
			this.notes.push(this.new_note);
			this.new_note = {
				text: '',
				category_id: ''
			};
		}
	},
});