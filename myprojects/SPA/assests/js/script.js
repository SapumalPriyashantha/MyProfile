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

$("#exampleInputCustomerId_1").keydown(function (event) {
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

        $("#exampleInputCustomerId_1").focus();

        let custId_2 = $("#exampleInputCustomerId_1").val(); //get first input field value
        let custName_2 = $("#exampleInputCustomerName_1").val(); //get second input field value
        let custAdress_2 = $("#exampleInputCustomerAddress_1").val(); //get third input field value

        let row_1 = "<tr><td>" + custId_2 + "</td><td>" + custName_2 + "</td><td>" + custAdress_2 + "</td></tr>";

        //set the row
        $("#customer_Table").append(row_1);

        //clear the previous text in input filed
        $("#exampleInputCustomerId_1").val(" ");
        $("#exampleInputCustomerName_1").val(" ");
        $("#exampleInputCustomerAddress_1").val(" ");

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
});

$("#btn_custoomer_save").click(function () {
    //Disable previously tr binded function
    $("#customer_Table>tr").off("click");

    let custId = $("#exampleInputCustomerId_1").val(); //get first input field value
    let custName = $("#exampleInputCustomerName_1").val(); //get second input field value
    let custAdress = $("#exampleInputCustomerAddress_1").val(); //get third input field value

    let row = "<tr><td>" + custId + "</td><td>" + custName + "</td><td>" + custAdress + "</td></tr>";

    //set the row
    $("#customer_Table").append(row);

    //focus first input field
    $("#exampleInputCustomerId_1").focus();

    //clear the previous text in input filed
    $("#exampleInputCustomerId_1").val(" ");
    $("#exampleInputCustomerName_1").val(" ");
    $("#exampleInputCustomerAddress_1").val(" ");


    $("#customer_Table>tr").click(function () {

        let custId_1 = $(this).children(":eq(0)").text(); // select first td and get text
        let custName_1 = $(this).children(":eq(1)").text(); // select second td and get text
        let custAdress_1 = $(this).children(":eq(2)").text(); // select third td and get text

        // set values for the input fields
        $("#exampleInputCustomerId_1").val(custId_1);
        $("#exampleInputCustomerName_1").val(custName_1);
        $("#exampleInputCustomerAddress_1").val(custAdress_1);
    });
});

