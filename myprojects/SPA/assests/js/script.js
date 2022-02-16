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
    // $("#btn_custoomer_save").prop('disabled', true);
    setButton()
    if (event.key == "Shift") {
        $("#exampleInputCustomerName_1").focus();
    }
});

$("#exampleInputCustomerName_1").keydown(function (event) {
    setButton()
    if (event.key == "Shift") {
        $("#exampleInputCustomerAddress_1").focus();
    }
});

$("#exampleInputCustomerAddress_1").keydown(function (event) {
    setButton()
    if (event.key == "Shift") {

        //Disable previously tr binded function
        $("#customer_Table>tr").off("click");

        $("#exampleInputCustomerId_1").focus();

        getCustomerData();

        loadAllCustomersIntoTable();

        clearCustomerInputFeild();

        clickCustomerTableRowAndGetdata();

    }
});

$("#btn_custoomer_save").click(function () {
    //Disable previously tr binded function
    $("#customer_Table>tr").off("click");

    $("#exampleInputCustomerId_1").focus();

    getCustomerData();

    loadAllCustomersIntoTable();

    clearCustomerInputFeild();

    clickCustomerTableRowAndGetdata();

});

$('#exampleInputCustomerId_1,#exampleInputCustomerName_1,#exampleInputCustomerAddress_1').on('keyup', function () {
    allCustomersValidation();
});

function getCustomerData() {

    let custId = $("#exampleInputCustomerId_1").val(); //get first input field value
    let custName = $("#exampleInputCustomerName_1").val(); //get second input field value
    let custAdress = $("#exampleInputCustomerAddress_1").val(); //get third input field value

    var customerObject = {
        id: custId,
        name: custName,
        address: custAdress
    };

    customerDB.push(customerObject);
}

function loadAllCustomersIntoTable() {
    $("#customer_Table").empty();
    for (var i of customerDB) {
        /*create a html row*/
        let row = "<tr><td>" + i.id + "</td><td>" + i.name + "</td><td>" + i.address + "</td></tr>";
        //set the row
        $("#customer_Table").append(row);
    }
}

$("#btnSearchCustomer").click(function () {
    var searchID = $("#txtSearchCustomer").val();

    var response = searchCustomer(searchID);
    if (response) {
        $("#exampleInputCustomerId_1").val(response.id);
        $("#exampleInputCustomerName_1").val(response.name);
        $("#exampleInputCustomerAddress_1").val(response.address);
    } else {
        clearCustomerInputFeild();
        alert("No Such a Customer");
    }
});

function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            return customerDB[i];
        }
    }
}

$("#btn_customer_update").click(function () {
    let custId = $("#exampleInputCustomerId_1").val(); //get first input field value
    let custName = $("#exampleInputCustomerName_1").val(); //get second input field value
    let custAdress = $("#exampleInputCustomerAddress_1").val(); //get third input field value

    var customerObject = {
        id: custId,
        name: custName,
        address: custAdress
    };

    for (let i = 0; i < customerDB.length; i++) {

        if (customerDB[i].id == customerObject.id) {
            customerDB[i].id = customerObject.id;
            customerDB[i].name = customerObject.name;
            customerDB[i].address = customerObject.address;

            clearCustomerInputFeild();
            loadAllCustomersIntoTable();
            $("#txtSearchCustomer").val(null);
            alert("updated customer");
        }
    }

});

$("#btn_delete").click(function () {
    let custId = $("#exampleInputCustomerId_1").val();

    for (let i = 0; i < customerDB.length; i++) {

        if (customerDB[i].id == custId) {
            customerDB[i].id = null;
            customerDB[i].name = null;
            customerDB[i].address = null;
            // customerDB[i].remove();
            $("#txtSearchCustomer").val(null);
            loadAllCustomersIntoTable();
        }
    }
});

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

function allCustomersValidation() {
    var regExCusID = /^(C-)[0-9]{3}$/;
    var regExCusName = /^[A-z ]{3,20}$/;
    var regExCusAddress = /^[A-z0-9/ ]{6,30}$/;

    var cusID = $("#exampleInputCustomerId_1").val();
    if (regExCusID.test(cusID)) {
        $("#exampleInputCustomerId_1").css('border', '2px solid green');
        $("#error_1").text("");
        var cusName = $("#exampleInputCustomerName_1").val();
        if (regExCusName.test(cusName)) {
            $("#exampleInputCustomerName_1").css('border', '2px solid green');
            $("#error_2").text("");
            var cusAddress = $("#exampleInputCustomerAddress_1").val();
            if (regExCusAddress.test(cusAddress)) {
                $("#exampleInputCustomerAddress_1").css('border', '2px solid green');
                $("#error_3").text("");
                // $("#btn_custoomer_save").attr('disabled', false);
                return true;
            } else {
                $("#exampleInputCustomerAddress_1").css('border', '2px solid red');
                $("#error_3").text("Wrong format : 2331/1B Colombo");
                return false;
            }
        } else {
            $("#exampleInputCustomerName_1").css('border', '2px solid red');
            $("#error_2").text("Wrong format : Kamal Perera");
            return false;
        }
    } else {
        $("#exampleInputCustomerId_1").css('border', '2px solid red');
        $("#error_1").text("Wrong format : C-001");
        return false;
    }
}

function setButton() {
    let b = allCustomersValidation();
    if (b) {
        $("#btn_custoomer_save").attr('disabled', false);
    } else {
        $("#btn_custoomer_save").attr('disabled', true);
    }
}


//item
$("#exampleInputItemId_1").keydown(function (event) {
    setItemButton()
    if (event.key == "Shift") {
        $("#exampleInputItemName_1").focus();
    }
});

$("#exampleInputItemName_1").keydown(function (event) {
    setItemButton()
    if (event.key == "Shift") {
        $("#exampleInputItemPrice_1").focus();
    }
});

$("#exampleInputItemPrice_1").keydown(function (event) {
    setItemButton()
    if (event.key == "Shift") {
        $("#exampleInputItemQuantity_1").focus();
    }
});

$("#exampleInputItemQuantity_1").keydown(function (event) {
    setItemButton()
    if (event.key == "Shift") {

        $("#item_Table>tr").off("click");
        //focus first input field
        $("#exampleInputItemId_1").focus();

        getItemData();

        loadAllItemsIntoTable();

        clearItemInputFeild();

        clickItemTableRowAndGetdata();
    }
});

$("#btn_item_save").click(function () {
    $("#item_Table>tr").off("click");
    //focus first input field
    $("#exampleInputItemId_1").focus();

    getItemData();

    loadAllItemsIntoTable();

    clearItemInputFeild();

    clickItemTableRowAndGetdata();

});

$('#exampleInputItemId_1,#exampleInputItemName_1,#exampleInputItemPrice_1,#exampleInputItemQuantity_1').on('keyup', function () {
    allItemsValidation();
});

function allItemsValidation() {
    var regExItemID = /^(I-)[0-9]{3}$/;
    var regExItemName = /^[A-z ]{3,20}$/;
    var regExItemPrice = /^[0-9 ]{1,5}$/;
    var regExItemQty = /^[0-9]{1,5}$/;

    var itemID = $("#exampleInputItemId_1").val();
    if (regExItemID.test(itemID)) {
        $("#exampleInputItemId_1").css('border', '2px solid green');
        $("#error_4").text("");
        var itemName = $("#exampleInputItemName_1").val();
        if (regExItemName.test(itemName)) {
            $("#exampleInputItemName_1").css('border', '2px solid green');
            $("#error_5").text("");
            var itemPrice = $("#exampleInputItemPrice_1").val();
            if (regExItemPrice.test(itemPrice)) {
                $("#exampleInputItemPrice_1").css('border', '2px solid green');
                $("#error_6").text("");
                var itemQty = $("#exampleInputItemQuantity_1").val();
                if (regExItemQty.test(itemQty)) {
                    $("#exampleInputItemQuantity_1").css('border', '2px solid green');
                    $("#error_7").text("");
                    // $("#btn_item_save").attr('disabled', false);
                    return true;
                } else {
                    $("#exampleInputItemQuantity_1").css('border', '2px solid red');
                    $("#error_7").text("Wrong format : xxxx");
                    return false;
                }
            } else {
                $("#exampleInputItemPrice_1").css('border', '2px solid red');
                $("#error_6").text("Wrong format : xxxx");
                return false;
            }
        } else {
            $("#exampleInputItemName_1").css('border', '2px solid red');
            $("#error_5").text("Wrong format : xxxxx");
            return false;
        }
    } else {
        $("#exampleInputItemId_1").css('border', '2px solid red');
        $("#error_4").text("Wrong format : I-001");
        return false;
    }
}

function getItemData() {
    let itemID = $("#exampleInputItemId_1").val(); //get first input field value
    let itemName = $("#exampleInputItemName_1").val(); //get second input field value
    let itemPrice = $("#exampleInputItemPrice_1").val(); //get third input field value
    let itemQuantity = $("#exampleInputItemQuantity_1").val(); //get fouth input field value


    var itemObject = {
        id: itemID,
        name: itemName,
        price: itemPrice,
        qty: itemQuantity
    };

    itemDB.push(itemObject);

}

function loadAllItemsIntoTable() {
    $("#item_Table").empty();
    for (var i of itemDB) {
        /*create a html row*/
        let row = "<tr><td>" + i.id + "</td><td>" + i.name + "</td><td>" + i.price + "</td><td>" + i.qty + "</td></tr>";
        //set the row
        $("#item_Table").append(row);
    }
}

function clearItemInputFeild() {
    $("#exampleInputItemId_1").val(null);
    $("#exampleInputItemName_1").val(null);
    $("#exampleInputItemPrice_1").val(null);
    $("#exampleInputItemQuantity_1").val(null);
}

function clickItemTableRowAndGetdata() {
    $("#item_Table>tr").off();

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

$("#btnSearchItem").click(function () {
    var searchItemID = $("#txtSearchItem").val();

    var response = searchItem(searchItemID);
    if (response) {
        $("#exampleInputItemId_1").val(response.id);
        $("#exampleInputItemName_1").val(response.name);
        $("#exampleInputItemPrice_1").val(response.price);
        $("#exampleInputItemQuantity_1").val(response.qty);
    } else {
        clearItemInputFeild();
        alert("No Such a Item");
    }
});

function searchItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].id == id) {
            return itemDB[i];
        }
    }
}

$("#btn_item_update").click(function () {
    let itemId = $("#exampleInputItemId_1").val(); //get first input field value
    let itemName = $("#exampleInputItemName_1").val(); //get second input field value
    let itemPrice = $("#exampleInputItemPrice_1").val(); //get third input field value
    let itemQty = $("#exampleInputItemQuantity_1").val(); //get third input field value

    var itemObject = {
        id: itemId,
        name: itemName,
        price: itemPrice,
        qty: itemQty
    };

    for (let i = 0; i < itemDB.length; i++) {

        if (itemDB[i].id == itemObject.id) {
            itemDB[i].id = itemObject.id;
            itemDB[i].name = itemObject.name;
            itemDB[i].price = itemObject.price;
            itemDB[i].qty = itemObject.qty;

            clearItemInputFeild();
            loadAllItemsIntoTable();
            $("#txtSearchItem").val(null);
            alert("updated item");
        }
    }

});

$("#btn_item_delete").click(function () {
    let itemId = $("#exampleInputItemId_1").val();

    for (let i = 0; i < itemDB.length; i++) {

        if (itemDB[i].id == itemId) {
            itemDB[i].id = null;
            itemDB[i].name = null;
            itemDB[i].price = null;
            itemDB[i].qty = null;
            $("#txtSearchItem").val(null);
            loadAllItemsIntoTable();
        }
    }
});

function setItemButton() {
    let b = allItemsValidation();
    if (b) {
        $("#btn_item_save").attr('disabled', false);
    } else {
        $("#btn_item_save").attr('disabled', true);
    }
}