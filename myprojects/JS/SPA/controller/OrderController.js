$("#dropdown_customer").click(function () {
    let name = $('#dropdown_customer option:selected').text();
    for (var i in customerDB) {
        if (customerDB[i].name == name) {
            $("#exampleInputCustomerID").val(customerDB[i].id);
        }
    }

});

function addCustomerdataIntodropDown() {
    $("#dropdown_customer").empty();
    for (var i in customerDB) {
        $("#dropdown_customer").append('<option>' + customerDB[i].name + '</option>');
    }

}

function addItemDataIntodropDown() {
    $("#dropdown_item").empty();
    for (var i in itemDB) {
        $("#dropdown_item").append('<option>' + itemDB[i].name + '</option>');
    }

}

$("#dropdown_item").click(function () {
    let item_name = $('#dropdown_item option:selected').text();
    for (var i in itemDB) {
        if (itemDB[i].name == item_name) {
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
    let item_QTYOnHand = $("#exampleInputItem_QTyOnHand").val();
    let item_total = item_price * item_qty;

    if ((+item_qty) < (+item_QTYOnHand)) {
        let response = searchItem(item_id);
        if (response) {
            let current_qty = response.qty;
            let currentTotal = response.total;
            console.log(cartDB);
            if ((+item_QTYOnHand) > (+current_qty) + (+item_qty)) {
                console.log(current_qty + item_qty);
                for (let i = 0; i < cartDB.length; i++) {
                    if (cartDB[i].id == response.id) {
                        cartDB.splice(i, 1);

                        var cart = new CartDTO(item_id, item_name, item_price, (+current_qty) + (+item_qty), (+currentTotal) + (+item_total));
                        cartDB.push(cart);
                    }
                }
            } else {
                alert("Quantity size is insufficient for order 2");
            }
        } else {
            var cart = new CartDTO(item_id, item_name, item_price, item_qty, item_total);
            cartDB.push(cart);
        }
    } else {
        alert("Quantity size is insufficient for order 1");
    }
}

function searchItem(id) {
    for (let i = 0; i < cartDB.length; i++) {
        if (cartDB[i].id == id) {
            return cartDB[i];
        }
    }
}

function loadAllOrderIntoTable() {
    $("#order_table").empty();
    for (var i of cartDB) {
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
