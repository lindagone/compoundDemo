define(['backbone', 'model/topic'], function (Backbone, Topic) {

    var Topics = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Topic
//        url:'api/topic'

    });
    return Topics;
});
