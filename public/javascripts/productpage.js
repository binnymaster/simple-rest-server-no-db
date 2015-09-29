
   $(document).ready(function(){
            var txt = $("input");
            var additem= $("#additem");
            var description=$("#des");
            var price=$("#price");
            var add =$("#add");        
            var i = {};
            $("#add").on("click",function(e){
              e.preventDefault()
                $("input").each(function(j){
                    i[$(txt[j]).attr("name")]= $(txt[j]).val();
                      $(txt[j]).val();
                     console.log($(txt[j]).val());  
                 });

                
               $.ajax({
                    url : "/users",
                    type : "post",
                    
                    data : i,
                    success :function(name){
                    console.log("hi");
                    console.log(name);
                   
                    } 
            })
            $.ajax({
             url : "/users/",

              type : "get",
              //type : "delete",      
              data : i,
              success :function(data){
              
              console.log(data);   
               
               $.each( data, function(Id,additem ,description,price,event) {
               
                     
                    var c1=$('<div />', { class:'well  well-lg',value: $(this).attr('id'),name:'div2',height:'50px'});
                    $('#ad').append(c1);
                    var c2 =$('<h4/>',{class:'col-xs-7',text:$(this).attr("additem")});
                    
                    var c4 =$('<button />', { type:'button',class:'btn btn-primary col-xs-2',text: $(this).attr('price')});
                    var c5 =$('<span/>',{class:'glyphicon glyphicon-remove-sign col-xs-3 ', id: $(this).attr('id') });
                    var c3 =$('<p/>',{class:'col-xs-12 ',text:$(this).attr("description")});
                     $(c1).append(c2,c4,c5,c3);

                      


                    
                    $(c5).click(function(){
                        console.log(c5.attr('id'));
                      for(var j=0; j<c1.length; j++)
                            {
                                console.log($(c1[j]).text());
                                if($(this).attr('id')=== $(this).attr('id')) 
                                {
                                    console.log("hi");
                                     $(c1[j]).remove();
                                     $.ajax({
                                     url : '/users/'+ $(c5).attr('id'),
                                        type : "DELETE",
                                        data : {"id":$(c5).attr('id')},
                                            success : function(){
                                                console.log($(this));
                                                             
                                             }
                                         })
                                     
                                }
                            }
                     });


                     });
   
            }
            })
             })
        });
 