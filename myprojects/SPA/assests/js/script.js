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