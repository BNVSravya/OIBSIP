$(document).ready(function(){
    $("#errname").hide();
    $("#errno").hide();
    $("para").hide();
    $("#btn").click(function(){
        var letters = /^[A-Za-z]+$/;
        uid = $("#uname").val();
        p = $("#phn").val();
        if(uid == "" || !(uid.match(letters))){
            $("#errname").show();
        }
        else if(p == "" || p.match(letters)){
            $("#errno").show();
        }
        else{
            $("#para").show();
        }
    });
});