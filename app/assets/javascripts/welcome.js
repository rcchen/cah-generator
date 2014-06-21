var Editor = Backbone.View.extend({

	el: '#editor',

	events: {
		"change #card-type": 		"changeType", 
		"change #card-text": 		"changeText", 
	},

	initialize: function() {

	},

	render: function() {

	},

	clickedCard: function() {
		console.log('card');
	},

	changeType: function() {

		console.log('type');

	},

	changeText: function() {

		console.log('text');

	}


});

var editor = new Editor();