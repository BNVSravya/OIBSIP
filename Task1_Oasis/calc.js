var x = document.getElementById("it");
function calculate(num){
    x.value = x.value+num;
}
function result(){
    try {
        x.value = eval(x.value);
    } catch (error) {
        window.alert("Enter valid input");
    }
}
function c(){
    x.value=" ";
}
function del(){
    x.value = x.value.slice(0,-1);
}