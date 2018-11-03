
//Build the list for the view
const buildList = function () {
    $(".List").append('milk');
}
//Build the list for the view
const buildListBread = function () {
    $(".List").append('bread');
}
//Build the list for the view
const buildListOj = function () {
    $(".List").append('Orange Juice');
}
//Build the list for the view
const buildListIc = function () {
    $(".List").append('Ice Cream');
}
//Build the list for the view
const buildListBanana = function () {
    $(".List").append('Banana');
}
//Build the list for the view
const buildListChips = function () {
    $(".List").append('Chips');
}
//Build the list for the view
const buildListGrapes = function () {
    $(".List").append('Grapes');
}
//Build the list for the view
const buildListEggs = function () {
    $(".List").append('Eggs');
}

//Build view for Dairy and hide other buttons
const buildDairy = function () {
    $('#grapes').hide();
    $('#banana').hide();
    $('#bread').hide();
    $('#chips').hide();
    $('#orangeJuice').hide();
    $('#iceCream').hide();

}

//Build view for Junk Food and hide other buttons
const buildJunk = function () {
    $('#grapes').hide();
    $('#milk').hide();
    $('#orangeJuice').hide();
    $('#banana').hide();
    $('#eggs').hide();
    $('#bread').hide();
}
    
//Build view for Snack and hide other buttons
const buildHealthySnack = function () {
    $('#chips').hide();
    $('#iceCream').hide();
}
    
//onClick add to grocery list or filter
$('#milk').on('click', buildList);

$('#bread').on('click', buildListBread);

$('#orangeJuice').on('click', buildListOj);

$('#iceCream').on('click', buildListIc);

$('#banana').on('click', buildListBanana);

$('#chips').on('click', buildListChips);

$('#grapes').on('click', buildListGrapes);

$('#eggs').on('click', buildListEggs);

$('#dairy').on('click', buildDairy);

$('#junkFood').on('click', buildJunk);

$('#healthySnack').on('click', buildHealthySnack);
