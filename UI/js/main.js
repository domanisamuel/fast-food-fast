//used to display history and orders tables in the admin
function viewHistory(){
    document.getElementById('foods').style.display = 'none';
    document.getElementById('history').style.display = 'block';
    document.getElementById('view1').style.display = 'none';
    document.getElementById('view2').style.display = 'block';
}
function viewOrders(){
    document.getElementById('foods').style.display = 'block';
    document.getElementById('history').style.display = 'none';
    document.getElementById('view1').style.display = 'block';
    document.getElementById('view2').style.display = 'none';
}