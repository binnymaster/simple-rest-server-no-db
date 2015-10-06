
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
                    console.log("hi");
                    console.log(name);
                    $.each( name, function(Id,additem ,description,price)
                    {
                    console.log(name);
                    var c1=$('<div />', { class:'well  well-lg',value: $(this).attr('id'),name:'div2',height:'55px'});
                    $('#ad').append(c1);
                    var c6 =$('<div />', { class:'col-md-8',name:'innerdiv1'});
                    var c7 =$('<div />', { class:'row form-inline col-md-4',name:'innerdiv1'})
                    $(c1).append(c6,c7);
                    var c2 =$('<h3/>',{text:$(this).attr("additem")});
                    var c8=$('<br>');
                    var c4 =$('<button />', {type:'button',class:'btn btn-primary col-xs-2',text: $(this).attr('price')});
                    var c5=$('<h4/>',{class:'glyphicon glyphicon-remove-sign pull-right',id:$(this).attr('id')});
                    var c3 =$('<p/>',{text:$(this).attr("description")});
                     $(c6).append(c2,c3);
                     $(c7).append(c8,c4,c5);
                    $(c5).on('click',spa);   
                })
               }
            })

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
              success :function(data){
              console.log(data.id);    
                    var c1=$('<div />', { class:'well  well-lg',value: data.id,name:'div2',height:'50px'});
                    $('#ad').append(c1);
                    var c6 =$('<div />', { class:'col-md-8',name:'innerdiv1'});
                    var c7 =$('<div />', { class:'col-md-4',name:'innerdiv1'})
                    $(c1).append(c6,c7);
                    var c2 =$('<h4/>',{class:'col-xs-7',text:data.additem});
                    var c8=$('<br>');
                    var c4 =$('<button />', { type:'button',class:'btn btn-primary col-xs-2',text:data.price });
                    var c5=$('<h4/>',{class:'glyphicon glyphicon-remove-sign pull-right',id:data.id});
                    //var c5 =$('<button/>',{class:' btn btn-link-nounderline glyphicon glyphicon-remove-sign col-xs-1 pull-right',id:data.id,width:'auto',name:'delete' });
                    var c3 =$('<p/>',{class:'col-xs-12 ',text:data.description});
                    $(c6).append(c2,c3);
                     $(c7).append(c8,c4 ,c5);
                     $(c5).on('click',spa);
                }
            }) })
                      var spa=  function(){
                        console.log('bye');
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
                             }
             
        });
 