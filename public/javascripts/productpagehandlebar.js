$(document).ready(function(e){
  var txt = $("input");
  var additem= $("#additem");
  var description=$("#des");
  var price=$("#price");
  var add =$("#add");        
   var i = {};          
    $.ajax({
    url : "/users/",
    type : "get",
    data : i,
    success :function(name){
      //console.log(name);
      $.each( name, function(Id,additem ,description,price){
      //console.log($(this).attr('additem'));
      var source = $("#template").html();
      //console.log(source)
        var temp = Handlebars.compile(source);
       // console.log(temp);
        var data=temp({additem:$(this).attr('additem'), description:$(this).attr('description'), price:$(this).attr('price'), id:$(this).attr('id')});
        
        $("#ad").append(data);    
   })  
      }
  })
    $("#add").on("click",function(e){
              e.preventDefault()
                $("input").each(function(j){
                    i[$(txt[j]).attr("name")]= $(txt[j]).val();
                      $(txt[j]).val("");
                      
                 });
            $.ajax({
             url : "/users",
              type : "post",      
              data : i,
              success :function(data){
                console.log(data.additem);
              var source = $("#template").html();
              var temp= Handlebars.compile(source);
               //console.log(data.id);
             $("#ad").append(temp(data));
              $("#innerdiv2" ).trigger( "reset" );

              }
            })
       })
   $('div').on('click','h4',function(){
    console.log($(this).attr('id'));
    var spa = $(this).closest('div.well-lg');
    $.ajax({
    url : '/users/'+ $(this).attr('id'),
    type : "DELETE",
    data : {"id":$(this).attr('id')},
    success : function(){
    console.log($(this));
    spa.remove();
    }
   })
  })
 })