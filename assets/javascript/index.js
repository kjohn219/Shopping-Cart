//onClick add to grocery list
$('#milk').on('click', function(){

$('#bread').on('click', function(){

$('#orangeJuice').on('click', function(){

$('#iceCream').on('click', function(){

$('#banana').on('click', function(){

$('#chips').on('click', function(){

$('#grapes').on('click', function(){

$('#eggs').on('click', function(){

// onClick add the contact to array, clear html list, redraw list
$('#btnAdd').on('click', function(){
    addContact();
    $('.card-text').empty();

    for(let i = 0; i < employeeList.length; i++) {
        $('.card-text').append(`<li>${employeeList[i].name},${employeeList[i].officeNum},${employeeList[i].phoneNum}</li>`);
    };
});

//runtime
addContact();