$( "#dropdown_customer" ).click(function() {
    let name=$('#dropdown_customer option:selected').text();
    for (var i in customerDB){
        if(customerDB[i].name==name){
            $("#exampleInputCustomerID").val(customerDB[i].id);
        }
    }

});

function addCustomerdataIntodropDown() {
    $("#dropdown_customer").empty();
    for(var i in customerDB) {
        $("#dropdown_customer").append('<option>'+customerDB[i].name+'</option>');
    }

}

function addItemDataIntodropDown() {
    $("#dropdown_item").empty();
    for(var i in itemDB) {
        $("#dropdown_item").append('<option>'+itemDB[i].name+'</option>');
    }

}

$( "#dropdown_item" ).click(function() {
    let item_name=$('#dropdown_item option:selected').text();
    for (var i in itemDB){
        if(itemDB[i].name==item_name){
            $("#exampleInputItem_Id_1").val(itemDB[i].id);
            $("#exampleInputItem_Price").val(itemDB[i].price);
            $("#exampleInputItem_QTyOnHand").val(itemDB[i].qty);
        }
    }

});

function getOrderData() {
    let item_id = $("#exampleInputItem_Id_1").val();
    let item_name = $("#dropdown_item").val();
    let item_price = $("#exampleInputItem_Price").val();
    let item_qty = $("#exampleInputOrder_QTy").val();
    let item_total = item_price*item_qty;

    var order = new OrderDTO(item_id, item_name, item_price,item_qty,item_total);

    orderDB.push(order);
}
function loadAllOrderIntoTable() {
    $("#order_table").empty();
    for (var i of orderDB) {
        /*create a html row*/
        let row = "<tr><td>" + i.id + "</td><td>" + i.name + "</td><td>" + i.price + "</td><td>" + i.qty + "</td><td>" + i.total + "</td></tr>";
        //set the row
        $("#order_table").append(row);
    }
}

$("#save_order").click(function () {
    getOrderData();
    loadAllOrderIntoTable();
});
