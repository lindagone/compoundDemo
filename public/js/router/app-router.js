define([ 'backbone','backbone-queryparams'], function(
		Backbone) {
	var options = {
		oriRoutes : {
			'newMail': 'writeNewMail',
			'topics.html' : 'topiclist',
			'topicDetail.html' : 'topicDetail',
			"participants":"listParticipants",
			":entity?*args": "query",
      		"*anything": "anything"
		},
		
		routes : {},
		
		writeNewMail: function(){
			console.log("write a new mail");
			new NewMailView({root : $('#bodyContainer')});
		},
		
		query: function(entity, args) {
	      this.entity = entity;
	      this.queryArgs = args;
	      console.info("entity is " + entity +"; queryArgs is " + queryArgs);
	    },
	
	    anything: function(whatever) {
	      this.anything = whatever;
	      console.info("anything is " + whatever);
	    },
		listParticipants:function (params) {
            // params contains the list of all query params of is empty if no param
			console.info("params is " + params);
        },
		search:function(query,page){
			
		},

		topicDetail : function(params){
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
			}
			//console.info("params is " + JSON.stringify(params));
			var topicDetailView = new TopicDetailView({root: $('#bodyContainer'),"topicid" :params.topicid});

		},
		topiclist : function(status) {
			if(status==null){
				new TopicsView({
					root : $('#bodyContainer')
				});
			}else{
				new TopicsView({root : $('#bodyContainer'),topicsByStatus:status});
			}
		}
	};
	
	_.each(options.oriRoutes, function(v, k) {
		options.routes[window.contextBase + k] = v
	});

	var AppRouter = Backbone.Router.extend(options);
	return AppRouter;
});