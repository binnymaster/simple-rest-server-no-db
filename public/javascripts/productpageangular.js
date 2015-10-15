var store = angular.module('itemctrl', []);
	store.controller('itemctrl', function($scope,$http) {
		var store=this;
		$http.get("/users/").success(function(data){
			console.log(data);
			store.itm=[];
			store.itm=data;
		});

//append data on current page
		store.appenddata=function(list)
		{
			$http.post("/users",list).success(function(data){
				console.log(data.additem);
				
				store.itm.push(
				{

						additem:$scope.store.list.additem,
						description:$scope.store.list.description,
						price:$scope.store.list.price,
						id:data.id,
				});
						$scope.store.list.additem='';
						$scope.store.list.description='';
						$scope.store.list.price='';

			});
		
	}
		//delete item
	store.deleteitem=function(id,index)
		{	var Id= id;
			//console.log(data.id)ss;
			for(i in store.itm)
			{
				if(store.itm[i].id==id)
				{
					console.log(store.itm[i].id);
					$http.delete("/users"+"/"+id).success(function(id){
					console.log(Id + " is deleted");
					store.itm.splice(index,1);
					//$scope.splice((id, 1)[0]);
					});
				}
			}	
		}
	//}
	
});	

	