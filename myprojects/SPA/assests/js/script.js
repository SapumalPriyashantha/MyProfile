$("#customer").click(function () {
    $("#second_row").css("display", "none");
    $("#third_row").css("display", "none");
    $("#first_row").css("display", "block");
})
$("#item").click(function () {
    $("#first_row").css("display", "none");
    $("#third_row").css("display", "none");
    $("#second_row").css("display", "block");
})
$("#order").click(function () {
    $("#first_row").css("display", "none");
    $("#second_row").css("display", "none");
    $("#third_row").css("display", "block");
})




//customer
$("#exampleInputCustomerId_1").keydown(function (event) {
    $("#btn_custoomer_save").prop('disabled', true);
    if (event.key == "Shift") {
        $("#exampleInputCustomerName_1").focus();
    }
});

$("#exampleInputCustomerName_1").keydown(function (event) {
    if (event.key == "Shift") {
        $("#exampleInputCustomerAddress_1").focus();
    }
});

$("#exampleInputCustomerAddress_1").keydown(function (event) {
    if (event.key == "Shift") {

        //Disable previously tr binded function
        $("#customer_Table>tr").off("click");

        $("#exampleInputCustomerId_1").focus();

        getCustomerDataAndSetRow();

        clearCustomerInputFeild();

        clickCustomerTableRowAndGetdata();

        // $("#btn_customer_update").click(function () {
        //     $("#customer_Table>tr").off();
        //     $("#customer_Table>tr").click(function () {
        //         $(this).remove();
        //         getCustomerDataAndSetRow();
        //     });
        // });

    }
});

$("#btn_custoomer_save").click(function () {
    //Disable previously tr binded function
    $("#customer_Table>tr").off("click");

    $("#exampleInputCustomerId_1").focus();

    getCustomerDataAndSetRow();

    clearCustomerInputFeild();

    clickCustomerTableRowAndGetdata();

    // $("#btn_customer_update").click(function () {
    //     $("#customer_Table>tr").off();
    //     $("#customer_Table>tr").click(function () {
    //         $(this).remove();
    //         getCustomerDataAndSetRow();
    //     });
    // });

});

allCustomersValidation();

function getCustomerDataAndSetRow() {

    let custId = $("#exampleInputCustomerId_1").val(); //get first input field value
    let custName = $("#exampleInputCustomerName_1").val(); //get second input field value
    let custAdress = $("#exampleInputCustomerAddress_1").val(); //get third input field value

    let row = "<tr><td>" + custId + "</td><td>" + custName + "</td><td>" + custAdress + "</td></tr>";

    //set the row
    $("#customer_Table").append(row);

}

function clearCustomerInputFeild() {
    //clear the previous text in input filed
    $("#exampleInputCustomerId_1").val(null);
    $("#exampleInputCustomerName_1").val(null);
    $("#exampleInputCustomerAddress_1").val(null);
}

function clickCustomerTableRowAndGetdata() {

    $("#customer_Table>tr").off();

    $("#customer_Table>tr").click(function () {

        let custId_1 = $(this).children(":eq(0)").text(); // select first td and get text
        let custName_1 = $(this).children(":eq(1)").text(); // select second td and get text
        let custAdress_1 = $(this).children(":eq(2)").text(); // select third td and get text

        // set values for the input fields
        $("#exampleInputCustomerId_1").val(custId_1);
        $("#exampleInputCustomerName_1").val(custName_1);
        $("#exampleInputCustomerAddress_1").val(custAdress_1);
    });
}

function allCustomersValidation(){
    $("#btn_custoomer_save").prop('disabled', true);

    var regExCusID = /^(C-)[0-9]{3}$/;
    var regExCusName = /^[A-z ]{3,20}$/;
    var regExCusAddress = /^[A-z0-9/ ]{6,30}$/;

    $("#exampleInputCustomerId_1").keyup(function () {
        let input = $("#exampleInputCustomerId_1").val();
        if (regExCusID.test(input)) {
            $("#exampleInputCustomerId_1").css('border', '2px solid green');
            $("#error_1").text("");
        } else {
            $("#exampleInputCustomerId_1").css('border', '2px solid red');
            $("#error_1").text("Wrong format : C-001");
        }
    });
    $("#exampleInputCustomerName_1").keyup(function () {
        let input = $("#exampleInputCustomerName_1").val();
        if (regExCusName.test(input)) {
            $("#exampleInputCustomerName_1").css('border', '2px solid green');
            $("#error_2").text("");
        } else {
            $("#exampleInputCustomerName_1").css('border', '2px solid red');
            $("#error_2").text("Wrong format : Kamal Perera");
        }
    });
    $("#exampleInputCustomerAddress_1").keyup(function () {
        let input = $("#exampleInputCustomerAddress_1").val();
        if (regExCusAddress.test(input)) {
            $("#exampleInputCustomerAddress_1").css('border', '2px solid green');
            $("#error_3").text("");
            $("#btn_custoomer_save").prop('disabled', false);
        } else {
            $("#exampleInputCustomerAddress_1").css('border', '2px solid red');
            $("#error_3").text("Wrong format : 2331/1B Colombo");
        }
    });
}












//item
$("#exampleInputItemId_1").keydown(function (event) {
    if (event.key == "Shift") {
        $("#exampleInputItemName_1").focus();
    }
});

$("#exampleInputItemName_1").keydown(function (event) {
    if (event.key == "Shift") {
        $("#exampleInputItemPrice_1").focus();
    }
});

$("#exampleInputItemPrice_1").keydown(function (event) {
    if (event.key == "Shift") {
        $("#exampleInputItemQuantity_1").focus();
    }
});

$("#exampleInputItemQuantity_1").keydown(function (event) {
    if (event.key == "Shift") {

        $("#item_Table>tr").off("click");
        //focus first input field
        $("#exampleInputItemId_1").focus();

        getItemDataAndSetRow();

        clearItemInputFeild();

        clickItemTableRowAndGetdata();
    }
});

$("#btn_item_save").click(function () {
    //Disable previously tr binded function
    $("#item_Table>tr").off("click");
    //focus first input field
    $("#exampleInputItemId_1").focus();

    getItemDataAndSetRow();

    clearItemInputFeild();

    clickItemTableRowAndGetdata();

});

function getItemDataAndSetRow() {
    let itemID_2 = $("#exampleInputItemId_1").val(); //get first input field value
    let itemName_2 = $("#exampleInputItemName_1").val(); //get second input field value
    let itemPrice_2 = $("#exampleInputItemPrice_1").val(); //get third input field value
    let itemQuantity_2 = $("#exampleInputItemQuantity_1").val(); //get fouth input field value

    let row_2 = "<tr><td>" + itemID_2 + "</td><td>" + itemName_2 + "</td><td>" + itemPrice_2 + "</td><td>" + itemQuantity_2 + "</td></tr>";

    //set the row
    $("#item_Table").append(row_2);
}

function clearItemInputFeild() {
    //clear the previous text in input filed
    $("#exampleInputItemId_1").val(" ");
    $("#exampleInputItemName_1").val(" ");
    $("#exampleInputItemPrice_1").val(" ");
    $("#exampleInputItemQuantity_1").val(" ");
}

function clickItemTableRowAndGetdata() {
    $("#item_Table>tr").click(function () {

        let itemID_1 = $(this).children(":eq(0)").text(); // select first td and get text
        let itemName_1 = $(this).children(":eq(1)").text(); // select second td and get text
        let itemPrice_1 = $(this).children(":eq(2)").text(); // select third td and get text
        let itemQuantity_1 = $(this).children(":eq(3)").text(); // select fourth td and get text

        // set values for the input fields
        $("#exampleInputItemId_1").val(itemID_1);
        $("#exampleInputItemName_1").val(itemName_1);
        $("#exampleInputItemPrice_1").val(itemPrice_1);
        $("#exampleInputItemQuantity_1").val(itemQuantity_1);
    });
}
