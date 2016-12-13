define(['knockout'], function (ko) {
    ko.components.register('blog-menu', {
        viewModel: function() {

        },
        template: { require: 'text!components/blog-menu/blog-menu.html' }
    });
})
