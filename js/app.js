var App =
{
    Response : {},
    amountOfItems : 10,
    pipeUrl : null,

    init : function()
    {
        App.createList();
        App.attachEventHandlers();
    },

    setPipeUrl : function(url)
    {
      this.pipeUrl = url;
    },

    setAmountOfItems : function(amount)
    {
      this.amountOfItems = amount;
    },

    createList : function()
    {
        var container = "#newsList";
        var template = "assets/newsListItem.html";

        $.get(App.pipeUrl, function(data)
        {
            App.Response = data;
            App.Response.value.items = data.value.items.slice(0, App.amountOfItems);

            App.rollOutMustache(template, App.Response, container);
        },"json");
    },

    showPopup : function (index)
    {
        var newsList = $("#newsList").find("li");
        var activeItem = newsList.eq(index);

        var template = "assets/detail.html";
        var container = $(".contentWrapper");
        var data = App.Response.value.items[index];

        newsList.removeClass("active");
        activeItem.addClass("active");

        $("#popup").fadeOut(function()
        {
            App.rollOutMustache(template, data, container);
            $("#popup").fadeIn();
        });
    },

    rollOutMustache : function(template, data, container)
    {
        $.get(template, function(response)
        {
            var output = Mustache.render(response, data);

            $(container).html(output);

        },"html");
    },

    attachEventHandlers : function()
    {
        $("#newsList")
            .on(
            {
                click : function()
                {
                    var index = $(this).parent().index();

                    App.showPopup(index);

                    return false;
                }
            },"a"
        );

        $("#popup")
            .on({
                click : function()
                {
                    $(this).parent().fadeOut();

                    return false;
                }
            },".closeButton");
    }
};
