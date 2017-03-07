
     function validateForm() {

       var errMessages = "";           
       
       errMessages = validateFname(errMessages);
       errMessages = validateSurname(errMessages);
       errMessages = validateDOB(errMessages);
       errMessages = validateEmail(errMessages); 
       errMessages = validatePhonenum(errMessages);
       errMessages = validateAdress(errMessages);
       errMessages = validateApt(errMessages); 
       errMessages = validateCity(errMessages);
       errMessages = validateProvince(errMessages);
       errMessages = validatePostal(errMessages);
       errMessages = validateHousing(errMessages);
       errMessages = validateMpayment(errMessages);
       errMessages = validateMincome(errMessages);
       errMessages = validateYear(errMessages);
       errMessages = validatePreCode(errMessages);
       errMessages = validateCredit(errMessages);
       errMessages = validateEmailCon(errMessages);
       
      
       
       

      

       if (errMessages !== "") {          
                                        
          showErrors(errMessages);    
          return false;                 
                                         
                                        
       }                               
       else {
          clearShowErrors();                          
          return true;                  
       }
 
     }  



     function showErrors(messages) {
      
       
        document.getElementById('err').innerHTML = messages;

     } 


 
     function  clearShowErrors() {

        document.getElementById('errors').innerHTML = " ";
        document.getElementById('client').focus();         
     } 


//VALDATE Date of birth 
    function validateDOB(errMessages)
    {
        var dob = document.application.dob.value;
        dob=dob.trim();
        dob=dob.toUpperCase();
        var yearcheck = dob.slice(3);
        var monthcheck = dob.slice(0,3);
        var months = ["JAN" , "FEB" ,"MAR" , "APR" , "MAY" , "JUN" , "JUL" , "AUG" , "SEP" , "OCT" , "NOV" , "DEC" ];
     
        var c=0;
        if(!(dob===""))
        {
          for(var i=0;i < months.length ; i++)
          {
          if( ( monthcheck === months[ i ]) )
          {
             c=1;
          }
        }

        if(c !== 1)
        {
          errMessages += "<p> <mark>Date of Birth </mark></p> ";
          errMessages += "<p>Month is not valid</p>";

        
        }else if ( ! ( yearcheck <= 1996 && yearcheck > 1900 ) )
        {
          errMessages += "<p> <mark>Date of Birth </mark></p> ";
          errMessages += "<p> Age is not valid </p>";
        
        }

        }
        else if(dob === "")
        {
          errMessages += "<p> <mark>Date of Birth </mark></p> ";
          errMessages += "<p> DOB not entered  </p>";
        }
      return errMessages;
    }

 

//VALDATE Email Adresss 
function validateEmail(errMessages)
{

var email=document.application.email.value;
email = email.trim();
email = email.toUpperCase();
var a = "";
var b = "";

var c = email.indexOf('@');
var d = email.indexOf('.');

var count=0;

if(c > 0)
{
  a = email.split("@");
}
if(d > 0)
{
  b = a[1].split(".");
}



if(!(email === ""))
{

  if((email.charAt(0) === "@" || email.charAt(0) == ".") || (email.charAt(email.length-1) == "@"  || email.charAt(email.length-1) == "."))
  {
                errMessages += "<p><mark> Email Adress </mark></p>";
                errMessages += "<p> starting or ending with @ or . </p>";
  }else
  {

      if(a.length > 0 && b.length > 0 )
      {
         
          for(var i = 0; i < a[0].length; i++)
          {
              
              if(! ( (a[0].charCodeAt(i) >= 65 && a[0].charCodeAt(i) <= 90)  || (a[0].charCodeAt(i) > 47 && a[0].charCodeAt(i) < 58) )  )
              { 

                  count++;
              }

      }
      if(count > 0)
        {
          errMessages += "<p><mark> Email Adress </mark></p>";
          errMessages += "<p>only num and alpha allowed before the @ symbol<p>";

        } 




      var count=0;

      for(var i = 0; i < b[0].length; i++)
      {

          if(! ( (b[0].charCodeAt(i) >= 65 && b[0].charCodeAt(i) <= 90)  || (b[0].charCodeAt(i) > 47 && b[0].charCodeAt(i) < 58) )  )
          {

              count++;
          }

      }
      if(count > 0)
      {
        errMessages += "<p><mark> Email Adress </mark></p>";
        errMessages += "<p> Non alpha characters entered for part2 in email </p>";

      } 

      
      if(!(a.length === 2 && b.length === 2))
            {
                  errMessages += "<p><mark> Email Adress </mark></p>";
                  errMessages += "<p> more than one @ and or .</p>";

            }else if( !(b[(b.length-1)] === "CA" || b[(b.length-1)] === "COM") )
            {
              errMessages += "<p><mark> Email Adress </mark></p>";
                errMessages += "<p>not ca or com</p>";
            } else if(b[0] === "")
            {
              errMessages += "<p><mark> Email Adress </mark></p>";
                errMessages += " <p> @ and . are together </p> ";

            }else if(a[0].length <3 || b[0].length < 3)
            {
              errMessages += "<p><mark> Email Address </mark></p>";
              errMessages += "<p>part 1 or part 2 not long enough</p>";
            }

        
      }else
      {
            errMessages += "<p><mark> Email Adress </mark></p>";
            errMessages += "<p> invalid length</p>";
      }

  } 

}else if(email === "")
{

  errMessages += "<p><mark> Email Adress </mark></p>";
  errMessages += "<p>NO email entered</p>";
}
      return errMessages;
}




//VALDATE Address 
function validateAdress(errMessages)
{
  var address = document.application.address.value;
  address = address.trim();


var toupper = address.toUpperCase();
count=0;
if( !(address === ""))
{

  for(var i = 0; i < toupper.length; i++)
  {

      if( ( (toupper.charCodeAt(i) >= 65 && toupper.charCodeAt(i) <= 90) || (toupper.charCodeAt(i) >= 48 && toupper.charCodeAt(i) <= 57))  )
      {
          count++;
      }

  }
  if(!(count >= 5))
  {
    errMessages += "<p> <mark>Adress</mark></p> ";
    errMessages += "<p> adresss needs atleast 5 alpha characters </p>";

  } 

}else if(address === "")
{
    errMessages += "<p> <mark>Adress</mark></p> ";
   errMessages += "<p> Adress not entered </p>";

}
return errMessages;
}


//VALDATE Apt 
function validateApt(errMessages)
{
  var apt = document.application.apt.value;
  var toupper = apt.toUpperCase();
  var count=0;

  if( !(toupper === ""))
  {

  for(var i = 0; i < toupper.length; i++)
  {

    if( ( (toupper.charCodeAt(i) >= 65 && toupper.charCodeAt(i) <= 90) || (toupper.charCodeAt(i) >= 48 && toupper.charCodeAt(i) <= 57))  )
    {

      count++;

    }

  } 
  if(!(count >= 1))
  {
    errMessages += "<p> <mark>Apt</mark></p> ";
    errMessages += "<p> Apt needs atleast 1 letter or 1 number </p>";

  }
}

return errMessages;
}





//VALDATE Montly payment 
function validateMpayment(errMessages)
{
  var payment = document.application.payment.value;
  payment=payment.trim();

  var count = 0;
  if(!(payment === ""))
  {
    
    for(var i = 0; i < payment; i++)
    {

    if( ! (payment.charCodeAt(i) >= 48 && payment.charCodeAt(i) <= 57) )
    {

      count++;
    }

    } 

  if(!(count > 0))
  {
    errMessages += "<p> <mark>Monthly Payment</mark></p> ";
    errMessages += "<p> Monthly payments only accept digits</p>";

  }else if(payment < 200 )
  {
    errMessages += "<p> <mark>Monthly Payment</mark></p> ";
   errMessages += "<p> Monthly payments must be greator than 200</p>";


  }
}
  else 
  {
    errMessages += "<p> <mark>Monthly Payment</mark></p> ";
    errMessages += "<p> Monthly payment cannot be empty</p>";
  }
  return errMessages;
}






//VALDATE Monthly Income 
function validateMincome(errMessages)
{
  var income = document.application.income.value;
  income = income.trim();
  var incomeCheck = 4 * document.application.payment.value;
  var count = 0;
  if(!(income === ""))
  {
    for(var i = 0; i < income.length; i++)
    {

    if( ! (income.charCodeAt(i) >= 48 && income.charCodeAt(i) <= 57) )
    {

      count++;
    }

    }

    if(count > 0)
    {
       errMessages += "<p> income must be in digits </p>";
    }else if(count === 0)
    {

      if( income <= incomeCheck )
      {
        errMessages += "<p> <mark>Monthly Income</mark></p> ";
        errMessages += "<p> income must be higher </p>";
      }
 } 
     }else if(income === "")
      {
         errMessages += "<p> <mark>Monthly Income</mark></p> ";
          errMessages += "<p> Income cannot be empty. </p>";
      }

  return errMessages;
}







//VALDATE Year 
function validateYear(errMessages)
{
  var year = document.application.currYears.value;
  
  
  year = year.trim();
  
  var count = 0;
  //alert(year);
  if(!(year === "")){
   

    for(var i = 0; i < year.length; i++)
    {

      if( ! (year.charCodeAt(i) >= 48 && year.charCodeAt(i) <= 57)  )
      {
       
        count++;
      }
     
   
    }

    
    if(count > 0)
    {
      errMessages += "<p> <mark>Years at current location</mark></p> ";
      errMessages += "<p> Years at currect location should only contain digits</p>";



    }
  }
  else if(year === ""){
    errMessages += "<p> <mark>Years at current location</mark></p> ";
    errMessages += "<p> Year not entered </p> ";
  }
  return errMessages;
  
}




//VALDATE Phone Number 
function validatePhonenum(errMessages)
{
var x=document.application.phone.value;
x = x.trim();
var y = x.charAt(3);
var z = x.charAt(7);

var ph = x.split("-");
if(!(x === "") ){


if( !(y === "-" &&  z === "-" ))
{
    errMessages += "<p><mark>Phone Number</mark></p>";
    errMessages += "<p> not right format. Phone numbers should be in nnn-nnn-nnnn format</p>";

}else if(!(ph[0] === "416" || ph[0] === "647"))
{
  errMessages += "<p><mark>Phone Number</mark></p>";
   errMessages += "<p>Invalid phone number. Check first three digits</p>";
}else if(!(ph[1] >=200 && ph[1] <= 600))
{
  errMessages += "<p><mark>Phone Number</mark></p>";
 errMessages += "<p>Invalid phone number. Check middle three digits</p>";
}else if(!(ph[2] >= 1001 && ph[2] <= 9999))
{
  errMessages += "<p><mark>Phone Number</mark></p>";
  errMessages += "<p>Invalid phone number. Check last four digits</p>";

}

}else {
  errMessages += "<p><mark>Phone Number</mark></p>";

  errMessages += "<p>Number not entered.</p>";
}


return errMessages;
}





//VALDATE Postal Code 
function validatePostal(errMessages)
{

  var postalCode = document.application.postal.value;
  postalCode = postalCode.trim();
  postalCode = postalCode.toUpperCase();
  var splitP = postalCode.split(" ");
  var concat = splitP[0] + splitP[1];

  var char1 = concat.charCodeAt(0); 
  var char2 = concat.charCodeAt(1); 
  var char3 = concat.charCodeAt(2); 
  var char4 = concat.charCodeAt(3); 
  var char5 = concat.charCodeAt(4); 
  var char6 = concat.charCodeAt(5);
  var count = 0 ;
if(!(postalCode === ""))
{
  for(var i = 0; i <= 5 ; i++)
  {

      if( !( (concat.charCodeAt(i) >= 65 && concat.charCodeAt(i) <= 90) )  )
      {
          count++;
          break;

      }
            

     i += 1;

  }
  if(count > 0 )
  {
    errMessages += "<p><mark>Postal code </mark></p>";
     errMessages += "<p>Invalid Postal code.Alpha character(s) spot has failed</p>";
  }

  count = 0;
  for(var i = 1; i <= 6 ; i++)
  {
   
       
      if( !( (concat.charCodeAt(i) >= 49 && concat.charCodeAt(i) <= 57) )  )
      {
          count++;
          break;

      }
            

     i += 1;

  }
    if(count > 0 )
    {
      errMessages += "<p><mark>Postal code </mark></p>";
      errMessages += "<p>Invalid Postal code.Number digit(s) spot has failed</p>";
    }
  }else
  {
    errMessages += "<p><mark>Postal code </mark></p>";
    errMessages += "<p>Postal code not entered</p>";
  }
    return errMessages;
  }

//VALDATE First Name 
function validateFname(errMessages)
{

     var x= document.application.fName.value;
     x = x.trim();
     var upper = x.toUpperCase();
    var stringl = x.length;
    var count=0;
    var part1 = upper.substr(0,3);


if( stringl === 0)
{
  errMessages += "<p><mark>First Name</mark></p>";
  errMessages += "<p>First name not entered </p>";
}else
{
  var n=0;
for(var i =0; i < upper.length ; i++ )
{
  if(upper.charCodeAt(i) === 45)
  {
    n++;
  }
}

if(n > 1)
{
  errMessages += "<p>more than one hyphen</p>";
}

var c = 0;

  for(var i=0;i<stringl;i++)
  {
    if(!(upper.charCodeAt(i) >= 65 && upper.charCodeAt(i) <= 90))
    {
      if(!(upper.charCodeAt(i) === 45 ))
      {
        c++;
      }

    }
  }
  if (c > 0)
  {
    errMessages += "<p><mark>First Name</mark></p>";
    errMessages += "<p>enter alphabets only</p>";
  }
}
if(stringl < 3 )
{
  errMessages += "<p> enter atleast three alphabets</p>";
}else if(upper.charCodeAt(stringl-1) === 45)
{
  errMessages += "<p><mark>First Name</mark></p>";
  errMessages += "<p> hyphen cannot be at the end </p>";
}else
{
  var m = 0;
   for(var i=0;i<3;i++)
   {
    if(!(part1.charCodeAt(i) >= 65 && part1.charCodeAt(i) <= 90)){
     m++;
    }
  }

  if(m > 0){
   errMessages += "<p> first three should be alphabets  </p>";
  }
}


return errMessages;
}






//VALDATE City 
function validateCity(errMessages)
{

     var x= document.application.city.value;
     x = x.trim();
     var upper = x.toUpperCase();
    var stringl = x.length;
    var count=0;
    var part1 = upper.substr(0,5);


if( stringl === 0)
{
  errMessages += "<p><mark>City </mark></p>";
  errMessages += "<p>City not entered </p>";
}else
{
  var n=0;
for(var i =0; i < upper.length ; i++ )
{
  if(upper.charCodeAt(i) === 45)
  {
    n++;
  }
}

if(n > 1)
{
    errMessages += "<p><mark>City </mark></p>";
  errMessages += "<p>more than one hyphen</p>";
}

var c = 0;

  for(var i=0;i<stringl;i++)
  {
    if(!(upper.charCodeAt(i) >= 65 && upper.charCodeAt(i) <= 90))
    {
      if(!(upper.charCodeAt(i) === 45 ))
      {
        c++;
      }

    }
  }
  if (c > 0)
  {
    errMessages += "<p><mark>City </mark></p>";
    errMessages += "<p>enter alphabets only</p>";
  }
}
if(stringl < 5 )
{
  errMessages += "<p> enter atleast five alphabets</p>";
}else if(upper.charCodeAt(stringl-1) === 45)
{
  errMessages += "<p><mark>City </mark></p>";
  errMessages += "<p> hyphen cannot be at the end </p>";
}else
{
  var m = 0;
   for(var i=0;i<5;i++)
   {
    if(!(part1.charCodeAt(i) >= 65 && part1.charCodeAt(i) <= 90)){
     m++;
    }
  }

  if(m > 0){
    errMessages += "<p><mark>City </mark></p>";
   errMessages += "<p> first five  before hyphen should be alphabets  </p>";
  }
}


return errMessages;
}




//VALDATE Email Confirmation 
function validateEmailCon(errMessages)
{
  
    if((document.application.emailConsent[0].checked === false) && (document.application.emailConsent[1].checked === false) )
    {
        errMessages += "<p><mark>Email Consent</mark></p>";
        errMessages += "<p> One of the two must be checked</p>";
    }
  return errMessages;
}



//VALDATE Surname 
function validateSurname(errMessages)
{
   var x=document.application.sName.value;
    var stringl = x.length;
    
    
    
     var a = x.split("'");
     var toupper1 = a[0].toUpperCase();
     var toupper2 = a[0].toUpperCase();
     var test = 0;

for(var i=0; stringl > i; i++)
{
  if(!((toupper1.charCodeAt(i) >= 65 && toupper1.charCodeAt(i) <= 90) && (toupper1.charCodeAt(i) >= 65 && toupper1.charCodeAt(i) <= 90)))
  {
      test++;
    }
}
if(test > 0)
{
   errMessages += "<p><mark>Surname</mark></p>";
  errMessages += "<p>invalid characters used for surname</p>";

} 

if(stringl === 0)
{
  errMessages += "<p><mark>Surname</mark></p>";
errMessages += "<p>Surname not entered</p>";
}
else if(stringl < 4)
{
    errMessages += "<p><mark>Surname</mark></p>";
errMessages += "<p>Surname is not long enough</p>";
}
else if(  (a.length > 2))
{
    errMessages += "<p><mark>Surname</mark></p>";
errMessages += "<p> You are using more than one apostrophe </p>";
}else if( (x.indexOf("-") === x.indexOf("'") -1) || (x.indexOf("-") === x.indexOf("'") + 1))
{
  errMessages += "<p><mark>Surname</mark></p>";
  errMessages += "<p>apostrophy and hyphen together</p>";
}else if(x.indexOf("-") === stringl-1)
{
    errMessages += "<p><mark>Surname</mark></p>";
errMessages += "<p> hyphen at the end</p>";

}else if(x.indexOf("'") === stringl-1)
{
    errMessages += "<p><mark>Surname</mark></p>";
errMessages += "<p>apostrophe at the end</p>";

}else if( x.indexOf("-") )
{

    var b = x.split("-");

if( (b.length > 2))
{
    errMessages += "<p><mark>Surname</mark></p>";
errMessages += "<p>You are using more than 1 hyphen </p>";
}


}
return errMessages;
}




//VALDATE Province 
function validateProvince(errMessages)
{
  var selected = document.application.province.selectedIndex;
  if(selected === -1)
  {
    errMessages += "<p><mark>Province </mark></p>"
    errMessages += "<p>province not select </p>"
  }
  return errMessages;
}

//VALDATE Pre-authorised Code 
function validatePreCode(errMessages)
{


  var preCode = document.application.preCode.value;
  preCode = preCode.trim();
  var count=0;
  var z=0;
  var preCodeSplit = preCode.split("-");
  var lengthOfCode = preCode.length;

  var left=preCodeSplit[0];
  var right=preCodeSplit[1];
  var sumleft=0;
  var sumRight=0;
  var correct=0;
  var count =0;

for(var i=0; i < lengthOfCode ; i++)
{
  if(!((preCode.charCodeAt(i) >= 48 && preCode.charCodeAt(i) <= 57) || (preCode.charCodeAt(i) === 45)))
  {
      count++;

  }
}

if(!(preCode=== ""))
{
  if( !(count > 0) )
  {


    if(lengthOfCode === 8)
    {

      if(! (preCodeSplit[0].length === 3) && (preCodeSplit[1].length === 4) )
      {
        errMessages += "<p><mark>pre-authorised code</mark></p>";
        errMessages += "<p>This is invalid</p>";

      }else 
        {
          

           sumleft = (+left.charAt(0)) + (+left.charAt(1)) + (+left.charAt(2)) ;
           sumRight = (+right.charAt(0)) + (+right.charAt(1)) + (+right.charAt(2)) + (+right.charAt(3)) ;
         

           correct = (sumleft*2);
           if(!(correct === sumRight))
           {
                 errMessages += "<p><mark>pre-authorised code</mark></p>";
                  errMessages += "<p>Invalid preCode-</p>";
           }

        }
      
    }else
    {
           errMessages += "<p><mark>pre-authorised code</mark></p>";
      errMessages += "<p>pre-authorised code must be 7 digits long containing a hypen</p>";
    }

  }else
  {
         errMessages += "<p><mark>pre-authorised code</mark></p>";
    errMessages +="<p>must only contain digits and a hypen</p>";
  }

}

return errMessages;
}


//VALDATE Housing  
function validateHousing(errMessages)
{
  var one = document.getElementById("s01");
   var two = document.getElementById("s02");
  

   if(!(one.checked) && !(two.checked))
   {
    errMessages += "<p><mark> Housing status </mark></p>";
    errMessages += "<p> Must select one option </p>";
   }
   else if(one.checked && two.checked)
   {
    alert("can only select one option");
     errMessages += "<p><mark> Housing status </mark></p>";
    errMessages += "<p>can only select one option</p>";
   }
    else if(one.checked)
    {

      two.checked = false;

    }else if(two.checked)
    {
      one.checked = false;
    }
   
   return errMessages;
}


//VALDATE credit 
function validateCredit(errMessages)
{
   var one = document.getElementById("c01");
   var two = document.getElementById("c02");
  

   if(!(one.checked) && !(two.checked))
   {
      errMessages += "<p><mark> Credit Check Consent </mark></p>";
      errMessages += "<p> Must select one option </p>";
   }
   else if(one.checked && two.checked)
   {
      errMessages += "<p><mark> Credit Check Consent </mark></p>";
      errMessages += "<p>can only select one option</p>";
      alert("can only select one option");
   }
   else if(one.checked)
   {
        two.checked = false;

   }else if(two.checked)
   {
      one.checked = false;
   }
   
   return errMessages;
}



