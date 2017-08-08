
function findById(items, id) {
	for (var i in items) {
		if (items[i].id == id) {
			return items[i];
		}
	}
	return null;
}

var vm = new Vue({
	el: 'body',
	data: {
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
		deleteNote: function (note) {
			this.notes.$remove(note);
		},
		editNote: function (note) {
			Vue.set(note, 'editing', true);
		},
		updateNote: function (note) {
			note.editing = false;
		}
	},
	filters: {
		category: function (id) {
			var category = findById(this.categories, id);
			return category !== null ? category.name: 'No Category';
		}
	}
});