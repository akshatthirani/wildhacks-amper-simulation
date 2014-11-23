function buttonClicked(elem) {

	elemID = elem.id;
	  //  alert(elem.id);


	currentvalue = document.getElementById(elemID).innerHTML;
  
  	if(currentvalue == "Off"){
    document.getElementById(elemID).innerHTML="On";
  	}else{
    document.getElementById(elemID).innerHTML="Off";
  	}

}