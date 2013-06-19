define(['underscore', 'backbone', 'resthub', 'hbs!template/newMail'],
function(_, Backbone, Resthub, newMailTmpl){
  var NewMailView = Resthub.View.extend({
    template: newMailTmpl,
   
    events: {
    	
    },
    
    initialize: function() {
    	var _self = this;
        _self.render();
    },
    
    render : function() {
    	var _self = this;
		_self.$el.html(_self.template());
		return _self;
	}
}