var Wallet = {
    importTemplate: function(viewName, model) {
        return _.template($("#" + viewName).html())(model);
    }
};

var TransactionsView = Backbone.View.extend({
	template: _.template($('#txs-template').html()),
    render: function (model) {
        this.$el.html(this.template(model));
        return this;
    }
});

var NewPaymentView = Backbone.View.extend({
    template: _.template($("#new-payment-template").html()),
    render: function (model) {
        this.$el.html(this.template(model));
        return this;
    },
    events: {
        "click #submit-payment": "submitPayment",
        "click #cancel-payment": "cancelPayment"
    },
    submitPayment: function() {
        new Transaction().save({
            contact: $("#contact-name").val(),
            amount: $("#payment-amount").val(),
            message: $("#payment-message").val(),
            date: new Date().valueOf()
        }, {
            success: function() {
                homeController.navigate("txs", {trigger: true});
            }
        });
    },
    cancelPayment: function() {
        homeController.navigate("txs", {trigger: true});
    }
});
