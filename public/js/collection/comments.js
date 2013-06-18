define(['backbone', 'model/comment'], function (Backbone, Comment) {

    var Comments = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Comment,
        url:'api/topic/activity/comments'

    });
    return Comments;
});
