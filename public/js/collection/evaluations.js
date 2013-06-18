define(['backbone', 'model/evaluation'], function (Backbone, Evaluation) {

    var Evaluations = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Evaluation,
        url:'api/evaluations'

    });
    return Evaluations;
});
