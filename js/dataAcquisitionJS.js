var boolBegin = 0;
var f = 0;

function buttonClicked(elem) {

	elemID = elem.id;
	  //  alert(elem.id);
	currentvalue = document.getElementById(elemID).innerHTML;
  
  	if(currentvalue == "Off"){
    	document.getElementById(elemID).innerHTML="On";
    	f = f+1;	 
  	}else{
    	document.getElementById(elemID).innerHTML="Off";
    	f = f-1;	
  	}

  	buttonClicked2();
  	boolBegin = 1;
};

function buttonClicked2() {
	var myFirebaseRef = new Firebase("https://amper.firebaseio.com/");


	if(boolBegin == 0)
		myFirebaseRef.set({
		  "currentUsage": f,
		});
	else
	{
		myFirebaseRef.push({
			"currentUsage": f
		})
	}

};