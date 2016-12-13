define(['knockout'], function (ko) {
    return function Home() {
        return {
            welcome: ko.observable("Welcome to home page!!!!!")
        }    
    }    
})