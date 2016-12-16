
requirejs.config({
    paths: {
        knockout: '/bower_components/knockout/dist/knockout',
        app: 'app',
        router: '/bower_components/crossroads/dist/crossroads',
        text: '/bower_components/text/text',
        sammy: '/bower_components/sammy/lib/min/sammy-latest.min',
        jquery: '/bower_components/jquery/dist/jquery.min',
        bootstrap: '/bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }

});


requirejs(['knockout', 'jquery', 'bootstrap', 'app', '/components/blog-menu/blog-menu.js', 'text', 'pages/home.js'], function (ko, jquery, bootstrap, app, blogMenu, text, home) {
    
    loadCss('bower_components/bootstrap/dist/css/bootstrap.min.css');
    loadCss('bower_components/bootstrap/dist/css/bootstrap-theme.min.css');

});



function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}