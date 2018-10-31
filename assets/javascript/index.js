



// onClick add the contact to array, clear html list, redraw list
$('#btnAdd').on('click', function(){
    addContact();
    $('.List').empty();

    for(let i = 0; i < employeeList.length; i++) {
        $('.List').append(`<li>${employeeList[i].name},${employeeList[i].officeNum},${employeeList[i].phoneNum}</li>`);
    };
});

//runtime
addContact();