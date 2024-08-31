                                        //CHAPTER 10
                                     /* Question 01 */
 var city_name = prompt("Enter the name of your city: ")
    if(city_name){
            alert("Welcome to the city of lights")
     }else{
        alert(" DOn't Welcome to the city of lights");
     } 
     
                                    /* Question 02 */
 var female = prompt("Enter your gender (male/female) ");
  if (gender === "female"){
     alert("Good Morning Ma'am");
 }else if (gender === "male") {
     alert("Good Morning Sir ");
  }else{
     alert("Don't Good Morning");
  }
                                  
                                   /* Question 03 */
var signal_color = prompt("Enter the color of the traffic signal (Red/Yellow/Green) ")
    if (signal_color){
                alert("Stop");
    }else{  
        alert("Invalid color. Please enter 'Red', 'Yellow', or 'Green'.")
    }     
   
var signal_color = prompt("Enter the color of the traffic signal (Red/Yellow/Green) ")
    if (signal_color){
                alert("ready");
    }else{  
        alert("Invalid color. Please enter 'Red', 'Yellow', or 'Green'.")
    }     
     
var signal_color = prompt("Enter the color of the traffic signal (Red/Yellow/Green) ")
    if (signal_color){
                alert("go");
    }else{  
        alert("Invalid color. Please enter 'Red', 'Yellow', or 'Green'.")
    }         
    
                                  /* Question 04 */
var remaining_fuel = prompt ("Enter the remaining fuel in your car (in litres)")
    if (remaining_fuel < 0.25){
         alert("Please refill the fuel in your car.");
     }else{
         alert("Fuel level is sufficient."); 
     }
                                      
                                 /* Question 05 */
var a = 4;
    if (++a === 5){
        alert("given condition for variable a is true");
    }                                 

var b = 82;
    if (b++ === 83){
        alert("given condition for variable b is true");
    }    

var c = 12;
    if (c++ === 13){
        alert("condition 1 is true");
    }
    if (c === 13){
        alert("condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
    }
    if(c === 14){
        alert("condition 4 is true");
    }   
    
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
       alert("The cost equals");
    }    

    if (true){
        alert("True");
        }
        if (false){
        alert("False");
        } 
        
    if("car" < "cat"){
            alert("car is smaller than cat");
        }        

                                /* Question 06 */
var marks_subject1 = prompt("Enter marks obtained in subject 1: ");
var marks_subject2 = prompt("Enter marks obtained in subject 2: ");
var marks_subject3 = prompt("Enter marks obtained in subject 3: ");
                                
var total_marks = float(input("Enter total marks: ").strip())
var total_obtained_marks = marks_subject1 + marks_subject2 + marks_subject3;
var percentage = (total_obtained_marks / total_marks) * 100;
    alert("Your percentage is: percentage:.2f%");
                                
    if (percentage >= 90){
        alert(grade = "A");
    } 
    if (percentage >= 80){
        alert(grade = "B");
    }    
    if (percentage >= 70){
        alert(grade = "C");
    }  
    if (percentage >= 60){
        alert(grade = "D");
    }else{
        alert("Your grade is f");  
    }                          
 
 var message = (" <h1> Question 06 </h1> \n <h2> Mark Sheet </h2> <br>");
  document.write(message)

 var message = ("Total marks: 300 <br> Mark Obtained: 219 <br> Percentage: 73% <br> Grade: B <br> Remarks: You need to improve ");
  document.write(message) 
                                                         
                                /* Question 07 */
 var secretNumber = Math.floor(Math.random() * 10) + 1;
 var userGuess = prompt("Guess the secret number (between 1 and 10):");

     if(userGuess === secretNumber){
        alert("Bingo! Correct answer");
     }else if(userGuess + 1 === secretNumber || userGuess - 1 === secretNumber){
        alert("Close enough to the correct answer" );
     }else{
        alert("Try again! The correct number was" + secretNumber);
     }

                               /* Question 08 */
 var num = prompt("Enter a number:");
     if(num % 3 === 0){
        alert("The number" + num + "is divisible by 3.");
     }else{
        alert("The number" + num + "is not divisible by 3."); 
     }

                              /* Question 09 */
 var number = prompt("Enter a number:"); 
 
   if(number % 2 === 0){
      alert("The number" + number + "is even.");
   }else{
      alert("The number" + number + "is odd.");
   }
      
                              /* Question 10 */
var temperature = prompt("Enter a temperature:");

    if(temperature>40){
        alert("It is too hot outside.");
    }else if(temperature>30){
        alert("The weather Today is normal.");
    }else if(temperature>20){
        alert("Today's weather is cool");
    }else if(temperature>10){
        alert("OMG! Today's weather is so cool");
    }else{
        alert("It is very cool outside");
    }

                                /* Question 11 */
var firstnumber = prompt("Enter the first number:");
var secondnumber = prompt("Enter the second number:");
var operation = prompt("Enter the operations (+ , - , * , / , %):");

    if(operation === "+"){
        result = firstnumber + secondnumber;
    }else if(operation === "-"){
        result = firstnumber - secondnumber;
    }else if(operation === "*"){
        result = firstnumber * secondnumber;
    }else if(operation === "/")
          if(operation !==0){
        result = firstnumber / secondnumber;
    }