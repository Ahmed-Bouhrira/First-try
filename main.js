   		$( "#target" ).submit(function() {
		var name = $('#fname').val()
  alert( name+" YOU JUST RESERVED , WE WAIT FOR YOU " );
  event.preventDefault();
});



    function chooseAgain(){
		var total=0;
		for (var i=0;i<array.length;i++){
			total=total+prices[array[i]];
		}
		return total;
	}	
	
	
	

     $("#spaghetti").on('click',function(){
		return eatlunch("spaghetti");
	   });
	$("#Ojja").on('click',function(){
		return eatlunch("Ojja");
	           });
	$("#Sandwich").on('click',function(){
		return eatlunch("Sandwich");
	    });
	$("#Salads").on('click',function(){
		return eatlunch("Salads");
	     });

	$("#pizza").on("click",function(){
    		return eatlunch("pizza");
    	});
	$("#reset").on("click",function(){
		return reset();
	})
	function reset(){
		array = [];

		$ ('#revenue').html(chooseAgain());
	}

	
		
	
	var prices={
    		"spaghetti":4,
    		"Ojja":5,
    		"Sandwich":3,
    		"Salads":2.5,
    		"pizza":7
    	};

var array=[];
	function eatlunch(lunch){
	array.push(lunch);
	if(lunch==="spaghetti"){
	  	$("#img").attr('src','https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://d1uz88p17r663j.cloudfront.net/resized/b01d809ae03b3751bc39c90498eb9f33_Pinoy-Spaghetti_Main_944_531.jpg");
	},1000);
	setTimeout(function(){
$("#img").attr("src","https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png");
},1500);
	 $('#revenue').html(chooseAgain());
	}
	else if (lunch==="Ojja"){
		  	$("#img").attr('src','https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://carthagemagazine.com/wp-content/uploads/2019/08/Ojja.jpg");
	},1000);
	setTimeout(function(){
$("#img").attr("src","https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png");
},1500);
	 $('#revenue').html(chooseAgain());
	}
	else if(lunch==="Sandwich"){
	$("#img").attr('src','https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://prods3.imgix.net/images/articles/2017_04/Feature-restaurant-butcher-bakery-shops2.jpg?auto=format%2Ccompress&ixjsv=2.2.3");
	},1000);
	setTimeout(function(){
$("#img").attr("src","https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png");
},1500);
	 $('#revenue').html(chooseAgain());

		}
		else if(lunch==="Salads"){
	$("#img").attr('src','https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png');
	
	setTimeout(function(){
$("#img").attr("src","https://www.galbani.fr/wp-content/uploads/2020/05/AdobeStock_220126244-800x600.jpeg");
	},1000);
	setTimeout(function(){
$("#img").attr("src","https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png");
},1500);
	 $('#revenue').html(chooseAgain());

		}
			else if(lunch==="pizza"){
	$("#img").attr('src','https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png').css("height","300px");
	
	setTimeout(function(){
$("#img").attr("src","https://image.freepik.com/photos-gratuite/pizza-pizza-remplie-tomates-salami-olives_140725-1200.jpg");
	},1000);
	setTimeout(function(){
$("#img").attr("src","https://cdn.weasyl.com/static/media/69/3d/37/693d3712a67eded2be19f9c3f9032fd08c7e33eca5d3953452c573fbe9b1789c.png");
},1500);
	 $('#revenue').html(chooseAgain());

		}


	}







