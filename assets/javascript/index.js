//onClick add to grocery list or filter
$('#milk').on('click', function(){

$('#bread').on('click', function(){

$('#orangeJuice').on('click', function(){

$('#iceCream').on('click', function(){

$('#banana').on('click', function(){

$('#chips').on('click', function(){

$('#grapes').on('click', function(){

$('#eggs').on('click', function(){

$('#dairy').on('click', function(){

$('#junkFood').on('click', function(){

$('#healthySnack').on('click', function(){

//Build the list for the view
const buildList = function (arrayName){
    let newList = ''
    for (let i = 0, i < arrayName.length, i++){
        newList += '<i> ${arrayName[i].name'
    }
    $(".List").append(newList);
}

// onClick add the contact to array, clear html list, redraw list
$('#btnAdd').on('click', function(){
    addContact();
    $('.card-text').empty();

    for(let i = 0; i < employeeList.length; i++) {
        $('.card-text').append(`<li>${employeeList[i].name},${employeeList[i].officeNum},${employeeList[i].phoneNum}</li>`);
    };
});

//runtime
addContact()