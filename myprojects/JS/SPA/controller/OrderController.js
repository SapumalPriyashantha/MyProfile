$( "#dropdown_customer" ).click(function() {
    console.log("aaa");
    $("#dropdown_customer select").empty();
    for(var i in customerDB) {
        $("#dropdown_customer select").append('<option value='+i+'>'+customerDB[i].name+'</option>');
    }
});