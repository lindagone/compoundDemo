define(['backbone', 'model/attachment'], function (Backbone, Attachment) {

    var Attachments = Backbone.Collection.extend({

        model: Attachment,
        url:'api/attachments'

    });
    return Attachments;
});
