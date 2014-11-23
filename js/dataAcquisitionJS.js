var boolBegin = 0;
var f = 0;
var i=0;

function buttonClicked(elem) {

	elemID = elem.id;
	  //  alert(elem.id);
	currentvalue = document.getElementById(elemID).innerHTML;
  
  	i=1;	// 1 if device a light

  	if(elemID == "l4")
	  	{
	  		i=2;
	  	}
  	else if (elemID == "l5") 
  		{
  			i=3;
  		}
  	else if (elemID == "l6") 
  		{
  			i=4;
  		};

  	if(currentvalue == "Off"){
    	document.getElementById(elemID).innerHTML="On";
    	f = f+i;	 
  	}else{
    	document.getElementById(elemID).innerHTML="Off";
    	f = f-i;	
  	}

  	buttonClicked2();
  	boolBegin = 1;
};



function buttonClicked2() {
	var myFirebaseRef = new Firebase("https://amper.firebaseio.com/");
	
	if(boolBegin == 1)
	{
		myFirebaseRef.set({
			"currentUsage": f
		})
	}else
	{
		myFirebaseRef.push({
			"currentUsage": f
		})
	}
};