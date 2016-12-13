
requirejs.config({
    paths: {
        knockout: '/bower_components/knockout/dist/knockout',
        app: 'app',
        router: '/bower_components/crossroads/dist/crossroads',
        text: '/bower_components/text/text',
        sammy: '/bower_components/sammy/lib/min/sammy-latest.min',
        jquery: '/bower_components/jquery/dist/jquery.min'
    }

});


requirejs(['knockout', 'app', '/components/blog-menu/blog-menu.js', 'text', 'pages/home.js'], function (ko, app, blogMenu, text, home) {

    // ko.applyBindings(app);
})