define(['knockout', 'sammy'], function(ko, sammy) {

    var html = ko.observable(''),
        vm = ko.observable(new function() {});

    sammy('#view', function() {

        this.get('#/', function() {
            this.$element().html('Please select menu option...');
        });

        this.get('#/home', function(context) {
            var sThis = this;
            
            require(['pages/home.js', 'text!pages/home.html'], function(home, homeHtml) {
                context.$element().load('pages/home.html', function() {
                    ko.applyBindings(new home(), $('#home')[0]);
                });
            });

        });

        this.get('#/about', function() {
            this.$element().html('<section>THis is about page...</section>');
        })
    }).run();

    


    return {
        author: ko.observable("Somu"),
        html: html,
        vm: vm
    }
})
    
