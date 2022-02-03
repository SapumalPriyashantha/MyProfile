// document.getElementsByTagName("h3")[0].style.color='red';
document.getElementById("customer").addEventListener("click", function () {
    document.getElementById("second_row").style.display = "none";
    document.getElementById("third_row").style.display = "none";
    document.getElementById("first_row").style.display = "block";
})

document.getElementById("item").addEventListener("click", function () {
    document.getElementById("first_row").style.display = "none";
    document.getElementById("third_row").style.display = "none";
    document.getElementById("second_row").style.display = "block";
})

document.getElementById("order").addEventListener("click", function () {
    document.getElementById("first_row").style.display = "none";
    document.getElementById("second_row").style.display = "none";
    document.getElementById("third_row").style.display = "block";
})

$("#btn_custoomer_save").click(function () {

    let custId = $("#exampleInputCustomerId_1").val();
    let custName = $("#exampleInputCustomerName_1").val();
    let custAdress = $("#exampleInputCustomerAddress_1").val();

    let row = `<tr><td>${custId}</td><td>${custName}</td><td>${custAdress}</td></tr>`;
    $("#customer_Table").append(row);

    $("#customer_Table>tr").click(function(){
        console.log(this);
    });
});