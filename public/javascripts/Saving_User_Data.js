$(document).ready(function(){
    var a = $("input");
    var b = $("#myDiv");
    var c = $("#myData");
    var x = {};
    console.log(a);
    $("#mySave").on("click",function(){
        console.log(a);
        $("input").each(function(i){
            x[$(a[i]).attr("name")]= $(a[i]).val();
            $(a[i]).val("");
        });
        $.ajax({
            url : "/users",
            type : "post",
            data : x,
            success : function(result){
            //    c.append("<table border="1"></table>")
            console.log(result);
                c.append("<li> Firstname :" +result.Firstname+"</li>");
                c.append("<li> Lastname :" +result.Lastname+"</li>");
                c.append("<li> Address :" +result.Address+"</li>");
                c.append("<li> Cellno :" +result.Cellno+"</li>");
                c.append("<br>");
               
                }
        });
    });
})