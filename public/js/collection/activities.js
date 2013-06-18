define(['backbone', 'model/activity'], function (Backbone, Activity) {

    var Activities = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Activity,
        url:'api/topic/activities'

    });
    return Activities;
});
