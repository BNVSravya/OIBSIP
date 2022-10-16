let r = document.getElementById("w")
let f = document.getElementById("v")
function func(){
    const msg = document.getElementById('c');
    const m = document.getElementById('t');
    var x = msg.value;
    var y = m.value;
    f.value = f.value+y+"\n";
    r.value =r.value+ x+"\n";
    //document.write("<div class='r'> <input type = 'text' value = "+x+"</div>");
}

function del(){
    r.value = r.value.slice(0,-1);}
function del2(){
    f.value = f.value.slice(0,-1);
}