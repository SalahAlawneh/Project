

alert ('hello blow belt');
var health=prompt('your physical situation healthy or injure?')
if (health== 'healthy')
  {  alert ("your welcome");}
 else
 {
        alert("visit you doctor");  
}


function question(){
    var age = prompt('please enter your age');
    var name = prompt('Please enter your name');
    
    var message;
    
    
    
    if (age >= 18 ) {
      message = 'Welcome to pharmacy website';
    
    } else {
      message = 'Please consult your parents';
    }
    
    document.write('<h2>' + message +' Mr ' + name +'</h2>');
  }
  
  question();
  
  function drugs() {
    var items = prompt('please enter how many items do you want');



    for (var i = 0; i < items; i++) {

        document.write('<img id="block" src="salah.jpg">');
    }
}
drugs();




