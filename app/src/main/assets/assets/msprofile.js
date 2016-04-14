$(document).ready(function() {
    $('[name="radio"]').on('change', function () {
        if ($(this).val() == "toefl") {
            $("[name='ep']").attr("max", "110");
        } else {
            $("[name='ep']").attr("max", "9");
        }


    });
});


function validate(){
    
 var quants = $("[name='quants']").val();
    
    
if (quants==""||quants>170||quants<130)
{
    $("[name='quants']").focus();
    $('#quants').showBootstrapAlertWarning('Enter valid score range from 130-170', Bootstrap.ContentType.Text, false, 5000);
    //alert("QUANTS: Enter valid score range from 130-170");
return false;
}
    
var verbal = $("[name='verbal']").val();
    
if (verbal==""||verbal>170||verbal<130)
{
$("[name='verbal']").focus();
$('#verbal').showBootstrapAlertWarning('Enter valid score range from 130-170', Bootstrap.ContentType.Text, false, 5000);
//alert("VERBAL: Enter valid score range from 130-170");
return false;
}
    
var awa = $("[name='awa']").val();
    
if (awa==""||awa<0||awa>6)
{
    $("[name='awa']").focus();
    $('#awa').showBootstrapAlertWarning('Enter valid score range from 0-6', Bootstrap.ContentType.Text, false, 5000);
//alert("AWA: Enter valid score range from 0-6");
return false;
}


var radio = $('[name="radio"]:checked').val();
var ep =  $("[name='ep']").val();
    
if (radio == "toefl")
{
 if(ep==""||ep>110)
 {
     $("[name='ep']").focus();
     $('#toefl').showBootstrapAlertWarning('Enter valid score range from 0-110', Bootstrap.ContentType.Text, false, 5000);
//alert("TOEFL: Enter valid score range from 0-110");
return false;
 }
}
else
{
if(ep==""||ep>9)
{
     $("[name='ep']").focus();
    $('#ielts').showBootstrapAlertWarning('Enter valid score range from 0-9', Bootstrap.ContentType.Text, false, 5000);
    //alert("IELTS: Enter valid score range from 0-9");
    return false;
}
}
    
    
var ug = $("[name='ug']").val();
    
if (ug=="")
{
     $("[name='ug']").focus();
    $('#ug').showBootstrapAlertWarning('Please fill in this field', Bootstrap.ContentType.Text, false, 5000);
//alert("Under Graduation: Please fill in this field");
return false;
}
    
var bl = $("[name='bl']").val();
    
if (bl=="")
{
     $("[name='bl']").focus();
    $('#nob').showBootstrapAlertWarning('Please fill in this field', Bootstrap.ContentType.Text, false, 5000);
//alert("Back logs: Please fill in this field");
return false;
}
    
var job = $("[name='job']").val();
    
if (job=="")
{
     $("[name='job']").focus();
    $('#job').showBootstrapAlertWarning('Please fill in this field', Bootstrap.ContentType.Text, false, 5000);
//alert("JOB: Please fill in this field");
return false;
}
    
var intern = $("[name='intern']").val();
    
if (intern=="")
{
     $("[name='intern']").focus();
    $('#intern').showBootstrapAlertWarning('Please fill in this field', Bootstrap.ContentType.Text, false, 5000);
//alert("INTERNSHIPS: Please fill in this field");
return false;
}
    
var pub = $("[name='pub']").val();
    
if (pub=="")
{
     $("[name='pub']").focus();
    $('#pub').showBootstrapAlertWarning('Please fill in this field', Bootstrap.ContentType.Text, false, 5000);
//alert("PUBLICATIIONS: Please fill in this field");
return false;
}

var pro = $("[name='pro']").val();
    
if (pro=="")
{
     $("[name='pro']").focus();
    $('#pro').showBootstrapAlertWarning('Please fill in this field', Bootstrap.ContentType.Text, false, 5000);
//alert("PROJECTS: Please fill in this field");
return false;
}
    
    
return true;    
}


function mscheck() {
    if(!(Modernizr.input.required&& Modernizr.formvalidation)){
    var a=validate();  
        if(!a){
         return;   
        }
    }
    
    
      var points =0;
        
      var quants = $("[name='quants']").val();
if (quants == 170) {
        points= points + 50;
      } 
    else if(quants == 169) {
        points= points + 49;
      }
    else if(quants == 168) {
        points= points + 48.5;
      }    
    else if(quants == 167) {
        points= points + 48;
      }    
    else if(quants == 166) {
        points= points + 47;
      }    
    else if(quants == 165) {
        points= points + 46;
      }    
    else if(quants == 164) {
        points= points + 45.5;
      }    
    else if(quants == 163) {
        points= points + 44;
      }    
    else if(quants == 162) {
        points= points + 43.5;
      }    
    else if(quants == 161) {
        points= points + 43;
      }    
    else if(quants == 160) {
        points= points + 42;
      }    
    else if(quants == 159) {
        points= points + 41;
      }    
    else if(quants == 158) {
        points= points + 39.5;
      }    
    else if(quants == 157) {
        points= points + 38.5;
      }    
    else if(quants == 156) {
        points= points + 37;
      }    
    else if(quants == 155) {
        points= points + 34.5;
      }  
    else if(quants == 154) {
        points= points + 33.5;
      }    
    else if(quants == 153) {
        points= points + 32.5;
      }    
    else if(quants == 152) {
        points= points + 30.5;
      }    
    else if(quants == 151) {
        points= points + 28;
      }    
    else if(quants == 150) {
        points= points + 26.5;
      }    
    else if(quants == 149) {
        points= points + 24.5;
      }    
    else if(quants == 148) {
        points= points + 22;
      }    
    else if(quants == 147) {
        points= points + 20;
      }    
    else if(quants == 146) {
        points= points + 18;
      }    
    else if(quants == 145) {
        points= points + 16;
      } 
     else if(quants == 144) {
        points= points + 13;
      }    
     else if(quants == 143) {
        points= points + 11;
      }    
      else if(quants == 142) {
        points= points + 9.5;
      }        
     else if(quants == 141) {
        points= points + 8;
      } 
     else if(quants == 140) {
        points= points + 6;
      } 
     else if(quants == 139) {
        points= points + 5;
      } 
     else if(quants == 138) {
        points= points + 3.5;
      } 
     else if(quants == 137) {
        points= points + 3;
      } 
      else if(quants == 136) {
        points= points + 2;
      } 
      else if(quants == 135) {
        points= points + 1.5;
      }    
      else if(quants == 134) {
        points= points + 1;
      }    
      else if(quants == 133) {
        points= points + 0.5;
      }    
      else if(quants == 132) {
        points= points + 0.5;
      }    
      else if(quants == 131) {
        points= points + 0.5;
      }    
else {
        points= points + 0.5;
      }    
        
// #######################################################################
        
    var verbal = $("[name='verbal']").val();
        
if (verbal = 170) {
        points= points + 49.5;
      }        
    else if(verbal == 169) {
        points= points + 49.5;
      }
    else if(verbal == 168) {
        points= points + 49;
      }
    else if(verbal == 167) {
        points= points + 49;
      }
    else if(verbal == 166) {
        points= points + 48.5;
      }
    else if(verbal == 165) {
        points= points + 48;
      }
    else if(verbal == 164) {
        points= points + 47;
      }
    else if(verbal == 163) {
        points= points + 46.5;
      }
    else if(verbal == 162) {
        points= points + 45;
      }
    else if(verbal == 161) {
        points= points + 44.5;
      }
    else if(verbal == 160) {
        points= points + 43;
      }
    else if(verbal == 159) {
        points= points + 42;
      }
    else if(verbal == 158) {
        points= points + 39.5;
      }
    else if(verbal == 157) {
        points= points + 38.5;
      }
    else if(verbal == 156) {
        points= points + 36;
      }
    else if(verbal == 155) {
        points= points + 34.5;
      }
    else if(verbal == 154) {
        points= points + 32;
      }
    else if(verbal == 153) {
        points= points + 31;
      }
    else if(verbal == 152) {
        points= points + 28;
      }
    else if(verbal == 151) {
        points= points + 25.5;
      }
    else if(verbal == 150) {
        points= points + 24;
      }
    else if(verbal == 149) {
        points= points + 21;
      }
    else if(verbal == 148) {
        points= points + 20;
      }
    else if(verbal == 147) {
        points= points + 18;
      }
    else if(verbal == 146) {
        points= points + 15.5;
      }
    else if(verbal == 145) {
        points= points + 14;
      }
    else if(verbal == 144) {
        points= points + 12;
      }
    else if(verbal == 143) {
        points= points + 10.5;
      }
    else if(verbal == 142) {
        points= points + 9;
      }
    else if(verbal == 141) {
        points= points + 8;
      }
    else if(verbal == 140) {
        points= points + 6.5;
      }
    else if(verbal == 139) {
        points= points + 5;
      }
    else if(verbal == 138) {
        points= points + 4;
      }
    else if(verbal == 137) {
        points= points + 3;
      }
    else if(verbal == 136) {
        points= points + 2.5;
      }
    else if(verbal == 135) {
        points= points + 2;
      }
    else if(verbal == 134) {
        points= points + 1.5;
      }
    else if(verbal == 133) {
        points= points + 1;
      }
    else if(verbal == 132) {
        points= points + 0.5;
      }
    else if(verbal == 131) {
        points= points + 0.5;
      }
else {
        points= points + 0.5;
      }
        
// ###########################################################################
        
     var awa = $("[name='awa']").val();
    
if (awa == 6) {
        points= points + 60;
      } 
    else if(awa == 5.5) {
        points= points + 55;
      } 
    else if(awa == 5) {
        points= points + 50;
      }  
    else if(awa == 4.5) {
        points= points + 45;
      }  
    else if(awa == 4) {
        points= points + 40;
      }  
    else if(awa == 3.5) {
        points= points + 35;
      }  
    else if(awa == 3) {
        points= points + 30;
      }  
    else if(awa == 2.5) {
        points= points + 25;
      }  
    else if(awa == 1.5) {
        points= points + 20;
      } 
    else if(awa == 1) {
        points= points + 15;
      }  
else {
        points= points + 0;
      }  
    
// ###########################################################################
      
  
        
        var radio = $('[name="radio"]:checked').val();
        var ep =  $("[name='ep']").val();
       
        if (radio == "toefl") {



            if (ep >= 110) {
                points= points + 20;
              } 
            else if(ep >= 100 && ep <110 ) {
                points= points + 18;
              }
            else if(ep >= 90 && ep <100 ) {
                points= points + 16;
              }
            else if(ep >= 80 && ep <90 ) {
                points= points + 14;
              }
            else if(ep >= 70 && ep <80 ) {
                points= points + 12;
              }
            else if(ep >= 60 && ep <70 ) {
                points= points + 11;
              }
            else {
                    points= points + 10; 
            }

        } else {

             if (ep >= 8) {
                points= points + 20;
             } 
            else if(ep >= 7 && ep <8 ) {
                points= points + 18;
              }
            else if(ep >= 6 && ep <7 ) {
                points= points + 16;
              }
            else if(ep >= 5 && ep <6 ) {
                points= points + 14;
              }
            else {
                points= points + 10; 
            }
        
        }
        
        
        
        
// ###########################################################################        
     var ug = $("[name='ug']").val();
   
if (ug >= 85) {
        points= points + 70;
      } 
    else if(ug >= 80 && ug <85 ) {
        points= points + 65;
      }
    else if(ug >= 75 && ug <80 ) {
        points= points + 60;
      }
    else if(ug >= 70 && ug <75 ) {
        points= points + 55;
      }
    else if(ug >= 60 && ug <70 ) {
        points= points + 50;
      }
    else if(ug >= 50 && ug <60 ) {
        points= points + 40;
      }
else {
        points= points + 30; 
    }
        
// ###########################################################################
        
var bl = $("[name='bl']").val();
       
 if (bl>0) {
        var a= 5 + (bl*5);
        points -= a;
 }
        
// ###########################################################################
        
   var job = $("[name='job']").val();
        
if (job >= 5) {
        points= points + 5;
      } 
    else if(job >= 3 && job < 5 ) {
        points= points + 4;
      }
    else if(job >= 1 && job <3 ) {
        points= points + 3;
      }
   
else {
        points= points + 2; 
    }

// ###########################################################################
       
       var inter = $("[name='intern']").val();
        
if (inter >= 5) {
        points= points + 5;
      } 
    else if(inter >= 3 && inter < 5 ) {
        points= points + 4;
      }
    else if(inter >= 1 && inter <3 ) {
        points= points + 3;
      }
   
else {
        points= points + 0; 
    }

// ###########################################################################
       
       var pub = $("[name='pub']").val();
if (pub >= 5) {
        points= points + 5;
      } 
    else if(pub >= 3 && pub < 5 ) {
        points= points + 4;
      }
    else if(pub >= 1 && pub <3 ) {
        points= points + 3;
      }
   
else {
        points= points + 0; 
    }

// ###########################################################################
       
       var pro = $("[name='pro']").val();
        
if (pro >= 5) {
        points= points + 5;
      } 
    else if(pro >= 3 && pro < 5 ) {
        points= points + 4;
      }
    else if(pro >= 1 && pro <3 ) {
        points= points + 3;
      }
   
else {
        points= points + 0; 
    }

// ###########################################################################
           
     
if (points > 250) {
        
        window.location.href = "grade/1.html"; // A+ grade
        } 
        
    else if (points >=234 && points <250)  {
        window.location.href = "grade/2.html"; // A grade
        }
             
     else if (points >=215 && points <234)  {
        window.location.href = "grade/3.html";  // A- grade
        }
             
     else if (points >=203 && points <215)  {
        window.location.href = "grade/4.html";  // B+ grade
        }
             
     else if (points >=194 && points <203)  {
        window.location.href = "grade/5.html";  // B grade
        }
             
     else if (points >=181 && points <194)  {
        window.location.href = "grade/6.html";  // B- grade
        }
             
     else if (points >=154 && points <181)  {
        window.location.href = "grade/7.html";  // C grade
        }
        
else {
          window.location.href = "grade/8.html";  // D grade   
             
             }
    }

