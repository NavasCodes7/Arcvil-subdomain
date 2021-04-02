$(document).ready(function () {
	"use strict";
	 var day_1_events = {status:false, tot_count:1, current_count:0, reg_fee:200 },
		 day_2_events = {status:false, tot_count:4, current_count:0, reg_fee:200},
		 discount={status:false, discount:200, min_rate:1000};
	
	console.log("Document ready...\n");
	$(window).on('scroll', function () {
        if ($(document).scrollTop() > 20) {
            $('#tr-nav-wrapper').addClass('fixed');
        }
        else {
            $('#tr-nav-wrapper').removeClass('fixed');
        }
    });
	
	$("input[name='day-1-event']").click(function(){
		console.log($(this).val());
		var new_price,
			old_price = parseInt($("#price").val());
		
		if($(this).prop("checked") === true){
			day_1_events.current_count++;
			if(day_1_events.status === false){
				new_price = day_1_events.reg_fee + old_price + parseInt($(this).val());
				day_1_events.status = true;
			}
			else{
				new_price = old_price + parseInt($(this).val());
			}
			//applying discount
			if(day_1_events.current_count+day_2_events.current_count >= 4 && discount.status===false && new_price > discount.min_rate){
				discount.status=true;
				new_price -= discount.discount;
			}
			$("#price").val(new_price);
		}
		
		else if($(this).prop("checked") === false){
			day_1_events.current_count--;
			if(day_1_events.current_count === 0){
				new_price = old_price - parseInt($(this).val()) - day_1_events.reg_fee;
				day_1_events.status = false;
			}
			else{
				new_price = old_price - parseInt($(this).val());
			}
			
			//removing discount
			if(day_1_events.current_count + day_2_events.current_count <= 4 && discount.status=== true && new_price < discount.min_rate){
				discount.status=false;
				new_price += discount.discount;
			}
			$("#price").val(new_price);
		}
	});
	
	$("input[name='day-2-event']").click(function(){
		console.log($(this).val());
		var new_price,
			old_price = parseInt($("#price").val());
		
		if($(this).prop("checked") === true){
			day_2_events.current_count++;
			if(day_2_events.status === false){
				new_price = day_2_events.reg_fee + old_price + parseInt($(this).val());
				day_2_events.status = true;
			}
			else{
				new_price = old_price + parseInt($(this).val());
			}
			//applying discount
			if(day_1_events.current_count+day_2_events.current_count >= 4 && discount.status===false && discount.status===false && new_price > discount.min_rate){
				discount.status=true;
				new_price -= discount.discount;
			}
			
			$("#price").val(new_price);
		}
		
		else if($(this).prop("checked") === false){
			day_2_events.current_count--;
			if(day_2_events.current_count === 0){
				new_price = old_price - parseInt($(this).val()) - day_2_events.reg_fee;
				day_2_events.status = false;
			}
			else{
				new_price = old_price - parseInt($(this).val());
			}
			
			//removing discount
			if(day_1_events.current_count + day_2_events.current_count <= 4 && discount.status=== true && new_price < discount.min_rate){
				discount.status=false;
				new_price += discount.discount;
			}
			$("#price").val(new_price);
		}
	});

});




//
//function attachCheckboxHandlers() {
//    // get reference to element containing toppings checkboxes
//    var el = document.getElementById('toppings');
//
//    // get reference to input elements in toppings container element
//    var tops = el.getElementsByTagName('input');
//    document.getElementById("demo1").innerHTML = tops;
//    // assign updateTotal function to onclick property of each checkbox
//    for (var i=0, len=tops.length; i<len; i++) {
//        if ( tops[i].type === 'checkbox' ) {
//            tops[i].onclick = updateTotal;
//        }
//    }
//}
//    
//// called onclick of toppings checkboxes
//function updateTotal(e) {
//    // 'this' is reference to checkbox clicked on
//    var form = this.form;
//    
//    // get current value in total text box, using parseFloat since it is a string
//    var val = parseFloat( form.elements['total'].value );
//    
//    // if check box is checked, add its value to val, otherwise subtract it
//    if ( this.checked ) {
//        val += parseFloat(this.id);
//    } else {
//        val -= parseFloat(this.id);
//    }
//    
//    // format val with correct number of decimal places
//    // and use it to update value of total text box
//    form.elements['total'].value = val;
//}
//    
//// format val to n number of decimal places
//// modified version of Danny Goodman's (JS Bible)
//function formatDecimal(val, n) {
//    n = n || 2;
//    var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
//    while (str.length <= n) {
//        str = "0" + str;
//    }
//    var pt = str.length - n;
//    return str.slice(0,pt) + "." + str.slice(pt);
//}
//
//// in script segment below form
//attachCheckboxHandlers();





function Validate() {
	
	var valid=true;

  document.getElementById("email_error").innerHTML = "<br>";
  document.getElementById("contact_error").innerHTML = "<br>";
  document.getElementById("institute_error").innerHTML = "<br>";
  document.getElementById("name_error").innerHTML="<br>";
  document.getElementById("gender_error").innerHTML="<br>";
  document.getElementById("department_error").innerHTML = "<br>";
  document.getElementById("acc_error").innerHTML = "<br>";
  document.getElementById("food_error").innerHTML = "<br>";

  var name=document.getElementById("register_name").value;
  if(name.length<3)
  {
    document.getElementById("name_error").innerHTML="Please enter a valid name";
    valid=false;
  }
 
  var genderM=document.getElementById("gender-male");
  var genderF=document.getElementById("gender-female");


  if(genderM.checked==false && genderF.checked==false )
       {
            document.getElementById("gender_error").innerHTML="You must select male/female";

            valid=false;
       }  

  var email = document.getElementById("form_email").value;
 

  if(email.length == 0){

    document.getElementById("email_error").innerHTML = "Please enter an email id";
    valid=false;
  }

  else if(!ValidateEmail(email)){
    document.getElementById("email_error").innerHTML = "Invalid email id";
    valid=false;
  }

  var inst = document.getElementById("institute-name").value;
 

  if(inst.length == 0){

    document.getElementById("institute_error").innerHTML = "This is a required field";
    valid=false;
  }

  var numb = document.getElementById("phone-number").value;
 

  if(numb.length == 0){

    document.getElementById("contact_error").innerHTML = "This is a required field";
    valid=false;
  }

  else if(!phonenumber(numb)){
    document.getElementById("contact_error").innerHTML = "Enter valid mobile number";
    valid=false;
  }

  else if(numb.length != 10){
    document.getElementById("contact_error").innerHTML = "Enter 10 digit mobile number";
    valid=false;
  }

  var branch = document.getElementById("department-name").value;
 

  if(branch.length == 0){

    document.getElementById("department_error").innerHTML = "This is a required field";
    valid=false;
  }

  var acct=document.getElementById("accomodation-true");
  var accf=document.getElementById("accomodation-false");


  if(acct.checked==false && accf.checked==false )
       {
            document.getElementById("acc_error").innerHTML="This is a required field";

            valid=false;
       }  

  var fv=document.getElementById("food-veg");
  var fvg=document.getElementById("food-non-veg");


  if(fv.checked==false && fvg.checked==false )
       {
            document.getElementById("food_error").innerHTML="This is a required field";

            valid=false;
       }  

  
  
    return valid;
 
}


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    
    return (false)
}


function phonenumber(word)
{
  if(word.match(/^[0-9]+$/)){
    return true;
  }

  return false;
  
}