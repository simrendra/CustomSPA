define(['knockout'], function (ko) {

    function getViewModelUrl(str) {
        var index;
        str = str.split('.');
        index = str.length - 1;
        if(str[index] === 'html') {
            str.splice(index, 1);    
        }

        return str.join('.');
    }

    ko.components.register('view-holder', {
        viewModel: {require: function(params) {
            return getViewModelUrl(params)
        }},
        template: {require: 'text!' + }
    }

    
})