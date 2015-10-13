var app = angular.module('app', []);
	app.controller('itemctrl', function($scope,$http) {
			$http.get("/users/").success(function(data){
			console.log(data);
			itemctrl=[];
			$scope.products=data;
		});

//appe data on current page
		$scope.appenddata=function(list)
		{
			
			$http.post("/users",list).success(function(data){
				console.log(data.additem);
				
				$scope.products.push(
				{

						additem:data.additem,
						description:data.description,
						price:data.price,
						id:data.id,
				});
						/*data.additem='';
						data.description='';
						data.price='';*/

			});
		
	}
		//delete item
	$scope.deleteitem=function(id)
			{	
				var Id= id;
				
			for(i in $scope.products)
			{
				
				if($scope.products[i].id==id)
				{
					$scope.products.splice(i,1);
					$http.delete("/users"+"/"+id).success(function(id){
					console.log(Id + " is deleted");
					});
				}
			}	
		}
	//}
});	

	