$(function($)
{
    var url = "http://pipes.yahoo.com/pipes/pipe.run?_id=9KUs2CRI3hGF2JCZ3rVd_w&_render=json";
    //var url = "data.json";
    //var url = "http://pipes.yahoo.com/pipes/pipe.run?_id=DqsF_ZG72xGLbes9l7okhQ&_render=json";

    App.setPipeUrl(url);
    App.setAmountOfItems(5);
    App.init();
});
