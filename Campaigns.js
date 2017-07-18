summary = $('.main-nav').find("[data-menu-item-id='campaign-summary']");
topContent = $('.main-nav').find("[data-menu-item-id='top-campaign-content']");
management = $('.main-nav').find("[data-menu-item-id='campaign-management']");
pixel = $('.main-nav').find("[data-menu-item-id='pixel-management']");
billing = $('.main-nav').find("[data-menu-item-id='payment-methods']");
$('.main-nav').addClass('.extensionEnabled')

$(summary).mouseover(function() {
    if (!$('#sideBar').length) {
      $('.main-nav').append("<div id='sideBar'>Campaign reporting is located on the Campaign Summary page. This page shows data at the campaign level. By default, when you land on the Campaign Summary page, you’ll see the last 7 days’ data for all your campaigns combined.</div>");
    }
});

$(summary).mouseleave(function() {
    $('#sideBar').remove();
});

$(topContent).mouseover(function() {
    if (!$('#sideBar').length) {
      $('.main-nav').append("<div id='sideBar'>In addition to seeing data by campaigns, you can also view your data by campaign items. This allows you to view how traffic is performing for you at an item level, giving you more granular insight into your campaign overall.</div>");
    }
});

$(topContent).mouseleave(function() {
    $('#sideBar').remove();
});

$(management).mouseover(function() {
    if (!$('#sideBar').length) {
      $('.main-nav').append("<div id='sideBar' class='minHeight'>Your campaigns and campaign items all have their own status that lets you know if they are running or not and where they are in the review process.</div>");
    }
});

$(management).mouseleave(function() {
    $('#sideBar').remove();
});

$(pixel).mouseover(function() {
    if (!$('#sideBar').length) {
      $('.main-nav').append("<div id='sideBar' class='pixelHeight'>A conversion tracking code is a tool that allows you to track what happens on your website after a user has clicked on your campaign item. It can let you know, for example, if users are purchasing your product or viewing multiple pages of your website after they click.</div>");
    }
});

$(pixel).mouseleave(function() {
    $('#sideBar').remove();
});

$(billing).mouseover(function() {
    if (!$('#sideBar').length) {
      $('.main-nav').append("<div id='sideBar' class='maxHeight'>This tab is only relevant if you are using Automatic Billing as your payment schedule. Currently, the only accepted payment method for Automatic Billing is credit cards (MasterCard, Visa, American Express, and Discover). All credit card payments are subject to a processing fee of $0.30 + 2.9%.</div>");
    }
});

$(billing).mouseleave(function() {
    $('#sideBar').remove();
});
