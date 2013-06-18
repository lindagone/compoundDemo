define(['backbone', 'model/member'], function (Backbone, Member) {

    var Members = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Member,
        url:'api/users/students?properties=id&&size=10'

    });
    return Members;
});
