function myFunction() {
      document.getElementById('six').innerHTML = "Paragraph Changed";
    }

var x23,y23,z23,a23;
x23= 5;
y23= 6;
z23= x23+y23;
document.getElementById("one1").innerHTML = "The value of z is " + z23 + " . ";

document.getElementById("two1").innerHTML="Hello Dolly";
function threemyFunction(){
  document.getElementById("three1").innerHTML="Hello Dolly !";
  document.getElementById("four1").innerHTML="How are you ?";
}
  document.getElementById("five1").innerHTML=10.50;
  document.getElementById('six1').innerHTML='John Doe';


a23=25;
  document.getElementById("seven1").innerHTML = a23 ;
  document.getElementById("eight1").innerHTML=(5+6)*10;
  document.getElementById("nine1").innerHTML="John"+" "+"Doe";
var pi = 3.14;
var person="john doe";
var answer="Yes I am!";
  document.getElementById("ten1").innerHTML= pi+"<br>"+ person + "<br>"+ answer;

var  b = 10;
// Here x is 10
{    var b = 2;
  // Here x is 2
}
// Here x is 2
document.getElementById("eleven").innerHTML = b;

var  c = 10;
// Here x is 10
{    let c = 2;
  // Here x is 2
}
// Here x is 10
document.getElementById("twelve").innerHTML = c;

var d = 5;
for (var d = 0; d < 10; d++) { //hi 
}//here d is 10
document.getElementById("thirteen").innerHTML = d;

let e = 5;
for (let e = 0; e < 10; e++) { //hi
 }//here e is 5
 document.getElementById("fourteen").innerHTML = e;

var carName = "Volvo";
// code here can use window.carName
document.getElementById("fifteen").innerHTML = "I can display " + window.carName;


let carname = "Volvo";
// code here can not use window.carname
document.getElementById("sixteen").innerHTML = "I can not display " + window.carname;

var x = 2;
// Now x is 2
var x = 3;
// Now x is 3
document.getElementById("seventeen").innerHTML = x;

caarName = "Volvo";
document.getElementById("eighteen").innerHTML = caarName;
var caarName;

x = "2" + 3 + 5;
document.getElementById("nineteen").innerHTML = x;

var x = 2 + 3 + "5";
document.getElementById("twenty").innerHTML = x;


// Create an object:
const car = {type:"Flat", model:"500", color:"white"};
// Change a property:
car.color = "red";
// Add a property:
car.owner = "Johnson";
// Display the property:
document.getElementById("aone").innerHTML = "Car owner is " + car.owner; 

var a=7;
document.getElementById("atwo").innerHTML=a**4;
document.getElementById('afive').innerHTML=Math.pow(a,4);

txt1 = "What a very ";
txt1 += "nice day";
document.getElementById("athree").innerHTML = txt1;

var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
document.getElementById("afour").innerHTML =
x + "<br>" + y + "<br>" + z;

var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';
document.getElementById("asix").innerHTML =
answer1 + "&nbsp;&emsp;&emsp;&emsp;  single quote inside " + " <br> " + 
answer2 + "&ensp; single quotes " + " <br> " + 
answer3 + "&emsp; double quotes " ;

var x1 = 34.00;
var x2 = 34;
var x3 = 3.14;
var y = 123e5;
var z = 123e-5;

document.getElementById("aseven").innerHTML =
x1 + "<br>" + x2 + "<br>" + x3 + "<br>" +
y + "<br>" + z;

var x = 5;
var y = 5;
var z = 6;
document.getElementById("aeight").innerHTML =
(x == y) + "<br>" + (x == z);

var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
document.getElementById("anine").innerHTML =
person.firstName + " is " + person.age + " years old.";

document.getElementById("aten").innerHTML = 
"The type of is:&emsp; " + typeof "" + "<br>" +
"The type of johndoe is:&emsp; " + typeof "John" + "<br>" + 
"The type of JohnDeo is:&emsp; " + typeof "John Doe" + "<br>" +
"The type of 0 is:&emsp; " + typeof 0 + "<br>" + 
"The type of 314 is:&emsp; " + typeof 314 + "<br>" +
"The type of 3.14 is:&emsp; " + typeof 3.14 + "<br>" +
"The type of (3) is:&emsp; " + typeof (3) + "<br>" +
"The type of(3+4) is:&emsp; " + typeof (3 + 4);

var cars1 = "Volvo";
cars1 = undefined;
document.getElementById("aeleven").innerHTML =
cars1 + "<br>" + typeof cars1;

document.getElementById("atwelve").innerHTML =
"The type of undefined is:&emsp; " + typeof undefined + "<br>" +
"The type of null is:&emsp; " +typeof null + "<br><br>" +
"The null === undefined is:&emsp; " + (null === undefined) + "<br>" +
"The type of null == undefined is:&emsp; " + (null == undefined);

document.getElementById("athirteen").innerHTML = 
"The type of {name:'john', age:34} is:&emsp; " + typeof {name:'john', age:34} + "<br>" +
"The type of [1,2,3,4] is:&emsp; " + typeof [1,2,3,4] + "<br>" +
"The type of  null is:&emsp; " + typeof null + "<br>" +
"The type of function myFunc(){} is:&emsp; " + typeof function myFunc(){};

var x = amyFunction(4, 3);
document.getElementById("bone").innerHTML = x;
function amyFunction(a, b) {
  return a * b;
}

function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("btwo").innerHTML = toCelsius(77);
document.getElementById("bthree").innerHTML = toCelsius;
document.getElementById("bfour").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius" ;

bmyFunction();
function bmyFunction() {
  var carName = "Volvo";
  document.getElementById("bfive").innerHTML =
  typeof carName + " " + carName;
}
document.getElementById("bsix").innerHTML =
typeof carName;

// Create an object:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// Display some data from the object:
document.getElementById("bseven").innerHTML =
person.firstName + " is " + person.age + " years old.";

var person = {
  firstName: "John",
  lastName : "Doe",
  id     :  5566 };
// Display some data from the object:
document.getElementById("beight").innerHTML =
person["firstName"]+" "+person["lastName"];

var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}; // Display data from the object:
document.getElementById("bnine").innerHTML = person.fullName();

var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// Display data from the object:
document.getElementById("bten").innerHTML = person.fullName;






function displayDate(){
  document.getElementById("demo123").innerHTML=Date();
}

var txt545 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt545.length;
document.getElementById("ctwo").innerHTML= sln + " text length " ;

var x = "we are the so-called \"Vikings\" from the \'Earth\'.";
document.getElementById('cthree').innerHTML= x + " single quote and Double quote";

var x = "the character \\ is called backslash.";
document.getElementById("cone").innerHTML = x + " BackSlash";

var x = "John";
var y = new String("John");
document.getElementById("cfour").innerHTML= " Type of variable x " + typeof x + "<br>" + " Type of variable y " + typeof y;

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.getElementById("cfive").innerHTML= sln; 

var str = "please locate where 'locate' occurs";
document.getElementById("csix").innerHTML= str.indexOf("locate") + " &emsp; str.indexOf() " ;
document.getElementById("cseven").innerHTML= str.lastIndexOf("locate") + "&emsp; str.lastIndexOf() ";
document.getElementById("ceight").innerHTML= str.indexOf("hi");
document.getElementById("cnine").innerHTML= str.lastIndexOf("locate",15);
document.getElementById("cten").innerHTML= str.search("locate") + "&emsp; str.search ";

var str = "Apple, Banana, Kiwi";
document.getElementById("celeven").innerHTML= str.slice(7,13) + "&emsp; str.slice(+ve,+ve) ";
document.getElementById("ctwelve").innerHTML= str.slice(-12,-6) + "&emsp; str.slice(-ve,-ve)";
document.getElementById("cthirteen").innerHTML=str.slice(7) + " &emsp; str.slice(+ve) ";
document.getElementById("cfourteen").innerHTML= str.slice(-12) + " &emsp; str.slice(-ve) " ;
document.getElementById("cfifteen").innerHTML= str.substring(7,13) + " &emsp; str.substring(+ve,+ve) (no -ve values)" ;
document.getElementById("csixteen").innerHTML= str.substr(7,6) + " &emsp; str.substr(+ve,+ve) (second parameter specifies length of extracted part) ";
document.getElementById("cseventeen").innerHTML= str.substr(7) + " &emsp; single parameter means slice rest of it ";
document.getElementById("ceighteen").innerHTML= str.substr(-4) + " &emsp; -ve value means slice out from end part ";

var str = "Please visit Microsoft! MICROSOFT! microsoft! Microsoft!";
var txt = str.replace("Microsoft","W3Schools");
document.getElementById("cninteen").innerHTML = str + "<br> " + txt;

var txt = str.replace(/MICROSOFT/i,"W3Schools");
document.getElementById('ctwenty').innerHTML = txt + " &emsp; to replace case sensitive use /.../i " ;

var txt = str.replace(/Microsoft/g,"W3Schools");
document.getElementById("ctwentyone").innerHTML= txt + " &emsp; to replace all matches " ;

var text1 = "Hello World";
document.getElementById('ctwentytwo').innerHTML= text1.toUpperCase();
document.getElementById("ctwentythree").innerHTML= text1.toLowerCase();

var text2 = "Javascript";
document.getElementById("ctwentyfour").innerHTML= text1.concat("  ",text2);
document.getElementById("ctwentyfive").innerHTML= " Hello " + " " + " World!";
document.getElementById("ctwentysix").innerHTML= " Hello ".concat(" "," World!");

var str = "            Hello     World                   !    ";
document.getElementById("ctwentyseven").innerHTML= str.trim();

var str = "5";
document.getElementById("ctwentyeight").innerHTML= str.padStart(4,0);
document.getElementById("ctwentynine").innerHTML= str.padEnd(4,0);

var str = "Hello World";
document.getElementById("cthirty").innerHTML= str.charAt(0);
document.getElementById("cthirtyone").innerHTML= str.charCodeAt(0);
document.getElementById("cthirtytwo").innerHTML= str[0];
str[0] = "A";
document.getElementById("cthirtythree").innerHTML= str[0] + "&emsp; not working str[0]=A ";

var str = "a,b,c,d,e";
var arr = str.split(",");
document.getElementById("cthirtyfour").innerHTML= arr[0] ;

var txt = "Hello";
var arr = txt.split("");
document.getElementById("cthirtyfive").innerHTML= arr[0] + "<br>" + arr[1] + "<br>" + arr[2] + "<br>" + arr[3]  + "<br>" + arr[4];









var x = 123e5;
var y = 123e-5;
document.getElementById("done").innerHTML = x + "<br>" + y;

var x = 999999999999999;
var y = 9999999999999999;
document.getElementById("dtwo").innerHTML = x + "<br>" + y + " &emsp; Integers are accurate up to 15 digits.";

var x = 0.2+0.1;
document.getElementById("dthree").innerHTML= x + " &emsp; floating point arithmetic is not always 100% accurate";

var x = (0.2*10+0.1*10)/10;
document.getElementById("dfour").innerHTML= x + " &emsp; To solve the problem above, it helps to multiply and divide.";

var x = 10;
var y = 20;
document.getElementById("dfive").innerHTML=  x+y + " &emsp; With + operator Numbers are added " ;

var x = "10";
var y = "20";
document.getElementById("dsix").innerHTML= x+y+ " &emsp; With + operator Strings are concatenated. " ;

var x = 10;
var y = 20;
document.getElementById("dseven").innerHTML= "the result is " + x + y ;

var z = "30";
var result = x+y+z;
document.getElementById("deight").innerHTML= result;

var x = "100";
var y = "10";
document.getElementById("dnine").innerHTML= x/y + "&emsp; Diving Strings";
document.getElementById("dten").innerHTML= x*y + "&emsp; multiplying Strings";
document.getElementById("deleven").innerHTML= x-y + "&emsp; Subtracting Strings";

var x = 100/"Apple";
var y = 100/"10";
document.getElementById("dtwelve").innerHTML= x  ;
document.getElementById("dthirteen").innerHTML= y ;
document.getElementById("dfourteen").innerHTML= isNaN(x);
document.getElementById("dfifteen").innerHTML= typeof x;

var x = 2;
var txt = "";
while(x != Infinity){
  x=x*x;
  txt = txt + x + "<br>"; 
}
document.getElementById("dsixteen").innerHTML= txt ;

var x = 2/0;
var y = -2/0;
document.getElementById("dseventeen").innerHTML= x + "<br>" + y ;
document.getElementById("deighteen").innerHTML= typeof Infinity;

var x = 0xFF;
document.getElementById("dninteen").innerHTML= " 0xFF = " + x ;

var x =32;
document.getElementById("dtwenty").innerHTML= "32 = "+"<br>"+" decimal " + x.toString(10) +"<br>"+ " HexaDecimal "+x.toString(16) +"<br>"+ " Octal "+ x.toString(8) +"<br>"+ "Binary" + x.toString(2);

var x = new Number(123);
document.getElementById("dtwentyone").innerHTML= typeof x;

var x = 123;
var y = new Number(123);
document.getElementById("dtwentytwo").innerHTML = (x==y) ;
document.getElementById("dtwentythree").innerHTML= (x===y);

var x = 123;
document.getElementById("dtwentyfour").innerHTML = x.toString() + "<br>" + (123).toString() +"<br>"+ (100+23).toString() ;

var x = 9.65874;
document.getElementById("dtwentyfive").innerHTML= x.toExponential(2)+ "<br>" +x.toExponential(4)+ "<br>" +x.toExponential(6)+ "<br>" + x.toExponential(8);
document.getElementById("dtwentysix").innerHTML= x.toFixed(0)+ "<br>" +x.toFixed(2)+ "<br>" +x.toFixed(4)+ "<br>" +x.toFixed(8);
document.getElementById("dtwentyseven").innerHTML= x.toPrecision()+ "<br>" + x.toPrecision(2) + "<br>" + x.toPrecision(4) + "<br>" + x.toPrecision(6);

var x=123;
document.getElementById("dtwentyeight").innerHTML= x.valueOf() + "<br>" +(123).valueOf() + "<br>" + (100+23).valueOf();
var y=(100+23).valueOf();
var z=(123).valueOf();
var w=x.valueOf();
document.getElementById("dtwentynine").innerHTML= typeof y + "<br>" + typeof z  + "<br>" + typeof w ;

document.getElementById("dthirty").innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");

var x = new Date("2021-06-11");
document.getElementById("dthirtyone").innerHTML= Number(x);

document.getElementById("dthirtytwo").innerHTML = 
  parseInt("-10") + "<br>" +
  parseInt("-10.33") + "<br>" +
  parseInt("10") + "<br>" +
  parseInt("10.33") + "<br>" +
  parseInt("10 6") + "<br>" +  
  parseInt("10 years") + "<br>" +  
  parseInt("years 10");

document.getElementById("dthirtythree").innerHTML = 
  parseFloat("10") + "<br>" +
  parseFloat("10.33") + "<br>" +
  parseFloat("10 6") + "<br>" +  
  parseFloat("10 years") + "<br>" +
  parseFloat("years 10");    

document.getElementById("dthirtyfour").innerHTML= 
  Number.MAX_VALUE + "<br>" +
  Number.MIN_VALUE + "<br>" +
  Number.POSITIVE_INFINITY + "<br>" +
  1/0 + "<br>" +
  Number.NEGATIVE_INFINITY + "<br>" +
  -1/0 + "<br>" +
  Number.NaN;

var x = 6;
document.getElementById("dthirtyfive").innerHTML= x.MAX_VALUE;




var cars2 = [
  "Volvo",
  "RollsRoyce",
  "Ferrari",
  "Benz"];
document.getElementById("1").innerHTML= cars2[0]+"<br>"+cars2[1]+"<br>"+cars2[2]+"<br>"+cars2[3];

var carss1 = new Array("Volvo","RollsRoyce","Ferrari");
document.getElementById("2").innerHTML= carss1;

cars2[0]="Tesla";
document.getElementById("3").innerHTML= cars2;

var person = {
  firstName:"John",
  lastName:"Doe",
  age:46
};
document.getElementById("4").innerHTML= person["lastName"];

var fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById("5").innerHTML= fruits.length + "<br>"+ fruits[0] +"<br>"+ fruits[fruits.length-1]  ;

var text,fLen,i;
fLen = fruits.length;
text = "<ul>";
for(i=0;i<fLen;i++){
  text+="<li>"+fruits[i]+"</li>";
}text += "</ul>"

document.getElementById("6").innerHTML= text;

text = "<ul>";
fruits.forEach(sixmyFunction);
text +="</ul>";

function sixmyFunction(value){
  text += "<li>"+value+"</li>";
}
document.getElementById("7").innerHTML= text;
fruits.push("Lemon");
document.getElementById("8").innerHTML=fruits;
fruits[fruits.length] = "PineApple";
document.getElementById("9").innerHTML= fruits;

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
document.getElementById("11").innerHTML = 
person[0] + " " + person.length ;

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46; 
document.getElementById("10").innerHTML =
person[0] + " " + person.length;

document.getElementById("12").innerHTML= "fruits ="+ fruits + "<br>" +
  typeof fruits +
  "<br>"+
  "<p>How to Recognize an Array :</p>" +"<p> Array.isArray() is a Method </p>" + Array.isArray(fruits) ;

document.getElementById("13").innerHTML=  fruits.constructor.toString().indexOf("Array")>-1 ;
document.getElementById("14").innerHTML=  fruits instanceof Array ;
const carsss = ["Saab", "Volvo", "BMW"];
carsss[0] = "Toyota";
carsss.push("Audi");
document.getElementById("15").innerHTML= carsss;

{
  var fruits = ["Banana", "Orange", "Apple", "Mango"] ;
document.getElementById("16").innerHTML= fruits.toString();
document.getElementById("17").innerHTML= fruits.join(" ");
}
{
  const fruits = ["Banana","Orange","Apple","Mango"];
  let x = fruits.pop();
  document.getElementById("18").innerHTML= fruits + "<br>" + x ;
}
{
  const fruits = ["Banana","Orange","Apple","Mango"];
  let x = fruits.push("Kiwi");
  document.getElementById("19").innerHTML= fruits + "<br>" + x ;

}
{
  const fruits = ["Banana","Orange","Apple","Kiwi"];
  let x = fruits.shift();
  document.getElementById("20").innerHTML= fruits +"<br>"+ x;
  let y = fruits.unshift("Lemon");
  document.getElementById("21").innerHTML= fruits + "<br>" + y ;
}

 fruits[0] = "Kiwi";
 fruits[fruits.length] = "Kiwi";
document.getElementById("22").innerHTML= fruits;
delete fruits[0];
document.getElementById("23").innerHTML= fruits[0]+"<br>"+fruits[1]+"<br>"+fruits;
var fruits = ["Banana","Orange","Apple","Kiwi"];
document.getElementById("24").innerHTML= fruits;
let z1 = fruits.splice(2,1,"Lemon","Kiwi");
document.getElementById("25").innerHTML= fruits +"<br> Removed Items : "+ z1 ;
fruits.splice(3,1);
document.getElementById("26").innerHTML= fruits;

const concatarray = cars2.concat(fruits,person,"all");
document.getElementById("27").innerHTML= concatarray;

const sliced = fruits.slice(2);
document.getElementById("28").innerHTML= sliced;

fruits[fruits.length]= "PineApple";
const sliced1 = fruits.slice(1,2);
document.getElementById("29").innerHTML= sliced1+"<br>"+ fruits;









var fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById("e1").innerHTML=" Ascending : "+ fruits.sort()+"<br>"+ " Decending : " +fruits.reverse();

var points = [33,10,5,66,89,100,213,400,73];
document.getElementById("e2").innerHTML= " Ascending Alphabetically : "+  points.sort() +"<br>"+ " Decending Alphabetically : " + points.reverse() ;

var points = [33,10,5,66,89,100,213,400,73];
document.getElementById("e3").innerHTML= 
points.sort(function(a,b){return a-b})+"<br>" +
"Lowest Number = " + points[0]+ "<br>"+
"Highest Number = "+points[points.length-1] ;

var points = [33,10,5,66,89,100,213,400,73];
document.getElementById("e4").innerHTML= 
points.sort(function(a,b){return b-a})+"<br>" +
"Highest Number = " + points[0]+ "<br>"+
"Lowest Number = "+points[points.length-1];

var points = [33,10,5,66,89,100,213,400,73];
document.getElementById("e5").innerHTML= points ;  
function e5myFunction()
{ points.sort(
  function(a,b){
    return 0.5 - Math.random()})
document.getElementById("e5").innerHTML= points ;
}

var points = [33,10,5,66,89,100,213,400,73];
document.getElementById("e6").innerHTML= points;
function e6myFunction1(){
  for(let i=points.length-1;i>0;i--){
    let j = Math.floor(Math.random()*1)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
  }
  document.getElementById("e6").innerHTML= points;
}; 

var points = [33,10,5,66,89,100,213,400,73];
document.getElementById("e77").innerHTML= "Highest Number : "+ Math.max.apply(null,points)+
"<br>" +"Lowest Number : "+Math.min.apply(null,points) ;

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab",year:2001},
  {type:"BMW",year:2010}
];

displayCars();

function e7myFunction2(){
  cars.sort(function(a,b)
    {return a.year - b.year});
  displayCars();
}
function displayCars(){
  document.getElementById("e7").innerHTML =
    cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year;
}

const carss = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
displayCarss1();
function e8myFunction3(){
  carss.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x<y) {return -1;}
    if (x>y) {return 1;}
    return 0; 
  });
  displayCarss1();
}
function displayCarss1(){
  document.getElementById("e8").innerHTML=
  carss[0].type+" "+carss[0].year+"<br>"+
  carss[1].type+" "+carss[1].year+"<br>"+
  carss[2].type+" "+carss[2].year;
}

var numbers =[45,26,49,2,4,98,76];
var txt = "";
numbers.forEach(e9myFunction4);
document.getElementById('e9').innerHTML= txt;

function e9myFunction4(value,index,array){
  txt += value + "<br>";
}

var numbers =[45,26,49,2,4,98,76];
var txt = "";
numbers.forEach(e10myFunction5);
document.getElementById('e10').innerHTML= txt;

function e10myFunction5(value){
  txt += value + "<br>";
}

var numbers1 = [45,87,74,32,35,53,2];
var numbers2 = numbers1.map(e11myFunction6);
document.getElementById("e11").innerHTML= numbers2;
function e11myFunction6(value,index,array){
  return value*2;
}

var numbers1 = [45,87,74,32,35,53,2];
var numbers2 = numbers1.map(e12myFunction7);
document.getElementById("e12").innerHTML= numbers2;
function e12myFunction7(value){
  return value*2;
}

var numbers = [14,16,68,56,89,48,72];
var over18 = numbers.filter(e13myFunction8);
document.getElementById("e13").innerHTML= over18;
function e13myFunction8(value,index,array){
  return value > 18;
}

var numbers = [14,16,68,56,89,48,72];
var sum = numbers.reduce(e14myFunction9,37 /*intial value of total*/);
document.getElementById("e14").innerHTML= sum;
function e14myFunction9(total,value,index,array){
  return total+value;
}

var numbers = [14,16,68,56,89,48,72];
var sum = numbers.reduceRight(e15myFunction10,38 /*intial value of total*/);
document.getElementById("e15").innerHTML= sum;
function e15myFunction10(total,value,index,array){
  return total+value;
}

var numbers = [14,16,68,56,89,48,72];
var over18 = numbers.every(e16myFunction11);
document.getElementById("e16").innerHTML= "All over 18 is " + over18;
function e16myFunction11(value,index,array){
  return value > 18;
}

var numbers = [14,16,68,56,89,48,72];
var over18 = numbers.some(e17myFunction12);
document.getElementById("e17").innerHTML= "Some Value over 18 is " + over18;
function e17myFunction12(value,index,array){
  return value > 18;
}

var fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById("e18").innerHTML= fruits +"<br>"+
"Apple Position in Array : "+(fruits.indexOf("Apple")+ 1 )+"<br>"+
"Banana Position In Array : " + (fruits.lastIndexOf("Banana")+1) +"<br>"+
"Kiwi Postion In Array : " +(fruits.lastIndexOf("Kiwi"))  ;

var numbers = [14,16,68,56,89,48,72];
var first = numbers.find(e19myFunction13);
var second = numbers.findIndex(e19myFunction13);
document.getElementById("e19").innerHTML= " First number over 50 is " + first +
"<br>"+" index Of "+ first +" : "+ second;
function e19myFunction13(value,index,array){
  return value > 50;
}














document.getElementById("f1").innerHTML = new Date();

const a1 = new Date(2018,11,24,10,33,30,0);
document.getElementById("f2").innerHTML= a1;

const b1 = new Date(2018,11,24,10,33,30);
document.getElementById("f3").innerHTML= b1;

const c1 = new Date(2018,11,24,10,33);
document.getElementById("f4").innerHTML= c1;

const d1 = new Date(2018,11,24,10);
document.getElementById("f5").innerHTML= d1;

const e1 = new Date(2018,11,24);
document.getElementById("f6").innerHTML= e1;

const f1 = new Date(2018,11);
document.getElementById("f7").innerHTML= f1;

const g = new Date(2018);
document.getElementById("f8").innerHTML= g;

const h = new Date(99,11,24);
document.getElementById("f9").innerHTML = h;

const i1 = new Date(9,11,24);
document.getElementById("f10").innerHTML = i1;

const j = new Date("October 13, 2014 11:13:00");
document.getElementById("f11").innerHTML = j;

const k = new Date(1623753373210);
document.getElementById("f12").innerHTML = k;

const l = new Date(7999999999999999);
document.getElementById("f13").innerHTML= l;

const m = new Date(-7999999999);
document.getElementById("f14").innerHTML= m;

const n = new Date();
document.getElementById("f15").innerHTML = n.toUTCString() ;
document.getElementById("f16").innerHTML= n.toDateString();
document.getElementById("f17").innerHTML= n.toISOString();

const o = new Date("2015-03-25");
document.getElementById("f18").innerHTML=o;
document.getElementById("f19").innerHTML =
new Date("2015-03-25T12:00:00-06:00");

const p = new Date("03/25/2015");
document.getElementById("f20").innerHTML = p;

const q = new Date("25 MAR 2015");
document.getElementById("f21").innerHTML =q;

const msec = Date.parse(Date());
const r = new Date(msec);
document.getElementById("f22").innerHTML = msec+"<br>" + r;

const s = new Date();
const t = ["January", "February", "March", "April",
 "May", "June", "July", "August",
  "September", "October", "November", "December"];
const u = ["Sunday", "Monday", "Tuesday", "Wednesday",
 "Thursday", "Friday", "Saturday"];
document.getElementById("f23").innerHTML="Milli Seconds from 1st Jan 1970 to now :"+
s.getTime() +"<br>"+"Present Year : "+ s.getFullYear()+"<br>"+"Present Month : "+
t[s.getMonth()]+"<br>"+"Present Date : "+s.getDate()+"<br>"+"Present Hour : "+
s.getHours()+"<br>"+"Present Minute : "+s.getMinutes()+"<br>"+"Present Second : "+
s.getSeconds()+"<br>"+"Present Milli second : " + s.getMilliseconds() +"<br>"+"Today : "+
u[s.getDay()] ;

const v = new Date();
v.setFullYear(2020);
v.setMonth(11);
v.setDate(15);
v.setDate(v.getDate() + 50);
v.setHours(22);
v.setMinutes(30);
v.setSeconds(30);
document.getElementById("f24").innerHTML= v;

let text11;
const today = new Date();
const someday = new Date();
someday.setFullYear(2021, 9, 30);
if (someday > today) {
  text11 = "Today is before September 30, 2021.";
} else {
  text11 = "Today is after September 30, 2021.";
}
document.getElementById("f25").innerHTML = text11;

















document.getElementById("g1").innerHTML= 
 "PI = "+Math.PI +"<br>"+
 "Euler's Number E = "+Math.E+"<br>"+
 "Square Root of  2 = "+Math.SQRT2+"<br>"+
 "Square Root of 1/2 = "+Math.SQRT1_2+"<br>"+
 "Natural Logarithm of 2 = "+Math.LN2+"<br>"+
 "Natural Logarithm of 10 = "+Math.LN10+"<br>"+
 "Base 2 Logarithm of E = "+Math.LOG2E+"<br>"+
 "Base 10 Logarithm of E = "+Math.LOG10E+"<br>";

document.getElementById("g2").innerHTML= 
"Round (4.9) ="+Math.round(4.9)+"<br>"+
"Round (4.7) ="+Math.round(4.7)+"<br>"+
"Round (4.5) ="+Math.round(4.5)+"<br>"+
"Round (4.4) ="+Math.round(4.2)+"<br>"+
"Round (-4.2)="+Math.round(-4.2)+"<br>";

document.getElementById("g3").innerHTML=
 "Math.ceil(4.9) ="+Math.ceil(4.9)+"<br>"+
 "Math.ceil(4.7) ="+Math.ceil(4.7)+"<br>"+
 "Math.ceil(4.4) ="+Math.ceil(4.4)+"<br>"+
 "Math.ceil(4.2) ="+Math.ceil(4.2)+"<br>"+
 "Math.ceil(-4.2) ="+Math.ceil(-4.2)+"<br>";

document.getElementById("g4").innerHTML=
 "Math.floor(4.9) = "+Math.floor(4.9)+"<br>"+
 "Math.floor(4.7) = "+Math.floor(4.7)+"<br>"+
 "Math.floor(4.5) = "+Math.floor(4.5)+"<br>"+
 "Math.floor(4.2) = "+Math.floor(4.2)+"<br>"+
 "Math.floor(-4.9) = "+Math.floor(-4.9)+"<br>";

document.getElementById("g5").innerHTML=
"Math.trunc(4.9) = "+Math.trunc(4.9)+"<br>"+
"Math.trunc(4.7) = "+Math.trunc(4.7)+"<br>"+
"Math.trunc(4.5) = "+Math.trunc(4.5)+"<br>"+
"Math.trunc(4.2) = "+Math.trunc(4.2)+"<br>"+
"Math.trunc(-4.2) = "+Math.trunc(-4.2)+"<br>";

document.getElementById("g6").innerHTML=
"Math.sign(-4) = "+Math.sign(-4)+"<br>"+
"Math.sign(0) = "+Math.sign(0)+"<br>"+
"Math.sign(4) = "+Math.sign(4)+"<br>";

document.getElementById("g7").innerHTML=
"Math.pow(8,2) = "+Math.pow(8,2)+"<br>"+
"Math.sqrt(64) = "+Math.sqrt(64)+"<br>"+
"Absolute(positive) Math.abs(-4.7) = "+Math.abs(-4.7)+"<br>"+
"Math.sin(90 * Math.PI / 180) = "+Math.sin(90 * Math.PI/180)+"<br>"+
"Math.cos(0 * Math.PI/ 180) = "+Math.cos(0* Math.PI/180)+"<br>"+
"Math.min(0, 150, 30, 20, -8, -200) = "+Math.min(0, 150, 30, 20, -8, -200)+"<br>"+
"Math.max(0, 150, 30, 20, -8, -200) = "+Math.max(0, 150, 30, 20, -8, -200)+"<br>"+
"Math.random() gives random number between 0(inclusive) to 1(exclusive) = "+Math.random()+"<br>"+
"Math.log(1) = "+Math.log(1)+"<br>"+
"Math.log(10) = "+Math.log(10)+"<br>"+
"Math.log2(8) = "+Math.log2(8)+"<br>"+
"Math.log10(1000) = "+Math.log10(1000);

document.getElementById("g8").innerHTML=
"Math.random() = "+Math.random()+"<br>"+
"(0to9) &emsp; Math.floor(Math.random()*10) = "+Math.floor(Math.random()*10)+"<br>"+
"(0to10) &emsp;Math.floor(Math.random()*11) = "+Math.floor(Math.random()*11)+"<br>"+
"(0to99) &emsp;Math.floor(Math.random()*100) = "+Math.floor(Math.random()*100)+"<br>"+
"(0to100) &emsp;Math.floor(Math.random()*101) = "+Math.floor(Math.random()*101)+"<br>"+
"(1to10) &emsp;Math.floor(Math.random()*10)+1 = "+(Math.floor(Math.random()*10)+1) +"<br>"+
"(1to100) &emsp;Math.floor(Math.random()*100)+1 = "+(Math.floor(Math.random()*100)+1)+"<br>";

function getRndInteger(min , max){
  return Math.floor(Math.random()*(max-min))+min;
}
function getRndInteger1(min , max){
  return Math.floor(Math.random()*(max-min+1))+min;
}
























document.getElementById("h1").innerHTML= 
"Boolean(10 > 9) = "+Boolean(10 > 9) +"<br>"+"(10 > 9) = "+ (10 > 9);

document.getElementById("h2").innerHTML =
"10 > 9 = "+ (10 > 9);

document.getElementById("h3").innerHTML = 
"Boolean(100) = "+ Boolean(100) + "<br>" + "Boolean(3.14) = "+ Boolean(3.14)+"<br>"+
"Boolean(-15) = "+ Boolean(-15) + "<br>" + "Boolean('Hello') = "+ Boolean("Hello")+"<br>"+
"Boolean('false') = "+Boolean('false')+"<br>"+"Boolean(1+7+3.14) = "+ Boolean(1+7+3.14) ;
var x;
document.getElementById("h4").innerHTML= 
" Boolean(0) = "+ Boolean(0) + "<br>" + " Boolean(-0) = "+Boolean(-0) +"<br>"+
' Boolean("") = '+ Boolean("") + "<br>" +
" x is only intialized "+ "<br>" + "Boolean(x) = " + Boolean(x) +"<br>"+
" Boolean(null) = "+ Boolean(null) + "<br>" +
" Boolean(false) = "+ Boolean(false) + "<br>" +
" Boolean(NaN) = "+ Boolean(NaN) + "<br>" +
" Boolean(10/'Hallo') "+ Boolean(10/'Hallo') ;

let w1 = false;
let y1 = new Boolean(false);
let z2 = new Boolean(false);
document.getElementById("h5").innerHTML=
"typeof w1 = " + typeof w1 + "<br>"+
"typeof y1 = "+ typeof y1 + "<br>"+
"typeof z2 = "+ typeof z2 + "<br>"+
"(w1 == y1) = "+ (w1==y1) + "<br>"+
"(w1 === y1) = "+ (w1===y1) + "<br>"+
"(y1 === z2) = "+ (y1===z2) ;

var p1 = 5;
document.getElementById("h6").innerHTML= 
"If p is equal to 5 then "+"<br>"+
"p == 8 = " + (p == 8)+"<br>"+
"p == 5 = " +(p==5) +"<br>"+
'p == "5" = '+(p==("5"))+"<br>"+
"p === 5 = "+(p===5)+"<br>"+
'p === "5" = '+(p===('5'))+"<br>"+
"p != 8 = "+(p!=8)+"<br>"+
"p !== 5 = "+(p!==5)+"<br>"+
'p !== "5" = '+(p!==('5'))+"<br>"+
"p !== 8 = "+(p!==8)+"<br>"+
"p > 8 = "+(p>8)+"<br>"+
"p < 8 = "+(p<8)+"<br>"+
"p >= 8 = "+(p>=8)+"<br>"+
"p <= 8 = "+(p <= 8);

document.getElementById("h7").innerHTML= 
"(false && true) = "+(false && true)+"<br>"+
"(false && false) = "+(false && false)+"<br>"+
"(true && true) = "+(true && true)+"<br>"+
"(false || true) = "+(false || true)+"<br>"+
"(false || false) = "+(false || false)+"<br>"+
"(true || true) = "+(true || true)+"<br>"+
"!(0 == 0) = "+!(0 == 0)+"<br>"+
"!(0 == 1) = "+!(0 == 1)+"<br>"+
"!(1 == 1) = "+!(1 == 1);

function h8myFunction() {
  let age = document.getElementById("age1").value;
  let voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("h8").innerHTML = voteable + " to vote.";
}

document.getElementById("h9").innerHTML= 
"2>12 = "+(2>12)+"<br>"+
"2<12 = "+(2<12)+"<br>"+
'2<"john" = '+(2<"john")+"<br>"+
"2>'john' = "+(2>"john")+"<br>"+
"2 == 'john' = "+(2 == "john")+"<br>"+
'"2"<"12" = '+("2"<"12")+"<br>"+
"'2'>'12' = "+('2'>'12')+"<br>"+
"'2'=='12' = "+('2'=='12');

function h10myFunction() {
let voteable;
let age = Number(document.getElementById("age").value);
if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("h10").innerHTML = voteable + " to vote";
}

var date = new Date().getHours();

if (date  >20 ){
  document.getElementById("h11").innerHTML= "Good Night!";
}else if (date > 16) {
  document.getElementById("h11").innerHTML="Good Evening!";
}else if (date > 12){
  document.getElementById("h11").innerHTML="Good Afternoon!";
}else {
  document.getElementById("h11").innerHTML="Good Morning!";
}

var day;
switch (new Date().getDay()){
  case 0:
  day = "Sunday";
  break;
  case 1:
  day = "Monday";
  break;
  case 2:
  day = "Tuesday";
  break;
  case 3:
  day = "Wednesday";
  break;
  case 4:
  day = "Thursday";
  break;
  case 5:
  day = "Friday";
  break;
  case 6:
  day = "Saturday";
}
document.getElementById("h12").innerHTML= "Today is " +  day;

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
document.getElementById("h13").innerHTML = text;

var t1 = "0";
switch (t1) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
document.getElementById("h14").innerHTML = text;

var cars33 = ["BMW", "Volvo", "Saab", "Ford"];
var i = 2;
var len = cars33.length;
var text = "";
for (; i < len; i++) {
  text += cars33[i] + "<br>";
}
document.getElementById("h15").innerHTML = text;

var i = 0;
var len = cars33.length;
var text = "";
for (; i < len; ) {
  text += cars33[i] + "<br>";
  i++;
}
document.getElementById("h16").innerHTML = text;

var person = {fname:"John",lname:"Doe",age:25};
var text = "";
var x = 0;
for (var x in person){
  text += person[x]+"<br>";
}
document.getElementById("h17").innerHTML= text;

var numbers = [45,989,65,6,95,94,66];
var txt = "";
for(var x in numbers){
  txt += numbers[x]+"<br>";
}
document.getElementById("h18").innerHTML=txt;

var numbers = [984,51,4,963,4,96,84,514,541];
var txt = "";
numbers.forEach(h19myFunction1);
function h19myFunction1(value,index,array){
  txt += value +"<br>";
}
document.getElementById("h19").innerHTML=txt;

var cars44 = ["BMW", "Volvo", "Saab", "Ford"];
var txt = "";
for (var x of cars44){
  txt += x+"<br>";
}
document.getElementById("h20").innerHTML= txt;

let language = "VEMULA VARA PRASAD";
var txt = "";
for (var x of language){
  txt += x+"<br>";
}
document.getElementById("h21").innerHTML=txt;

var numbers = [45,989,65,6,95,94,66];
var txt = "";
for (var x of numbers){
  txt += x+"<br>";
}
document.getElementById("h22").innerHTML=txt;

var i = 0;
var text = "";
while(i<11){
  text += "The Number is "+ i +"<br>";
  i++;
}
document.getElementById("h23").innerHTML= text;

var i = 0;
var text = "";
do{
  text += "The number is "+i+"<br>";
  i++;
}while(i < 11);
document.getElementById("h24").innerHTML= text;

var  cars55 = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";
for(;cars55[i];){
  text += cars55[i]+"<br>";
  i++;
}
document.getElementById("h25").innerHTML=text;

var  cars66 = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
var i = 0;
while(cars66[i]){
  text += cars66[i]+"<br>";
  i++;
}
document.getElementById("h26").innerHTML=text;

var text = "";
for (var i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("h27").innerHTML = text;

var text = "";
for (var i = 0; i < 5; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("h28").innerHTML = text;

var cars77 = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
list: {
  text += cars77[0] + "<br>";
  text += cars77[1] + "<br>";
  break list;
  text += cars77[2] + "<br>";
  text += cars77[3] + "<br>";
}
document.getElementById("h29").innerHTML= text;






























document.getElementById("i1").innerHTML = 
  'typeof "john" &emsp; '+typeof "john" + "<br>" +
  'typeof 3.14 &emsp; '+typeof 3.14 + "<br>" +
  'typeof NaN &emsp; '+typeof NaN + "<br>" +
  'typeof false &emsp; '+typeof false + "<br>" +
  'typeof [1,2,3,4] &emsp; '+typeof [1,2,3,4] + "<br>" +
  "typeof {name:'john', age:34} &emsp; "+typeof {name:'john', age:34} + "<br>" +
  'typeof new Date() &emsp; '+ typeof new Date() + "<br>" +
  'typeof function () {} &emsp; '+typeof function () {} + "<br>" +
  'typeof myCar &emsp; '+typeof cars77 + "<br>" +
  'typeof null &emsp; '+typeof null+"<br>"+  
  'typeof true &emsp; '+typeof true + "<br>" +
  'typeof x &emsp; '+typeof x;

document.getElementById("i2").innerHTML=
 "john".constructor + "<br>" +
  (3.14).constructor + "<br>" +
  false.constructor + "<br>" +
  [1,2,3,4].constructor + "<br>" +
  {name:'john', age:34}.constructor + "<br>" +
  new Date().constructor + "<br>" +
  function () {}.constructor;

var fruits = ["Banana", "Orange", "Apple"];
document.getElementById("i3").innerHTML = i3isArray(fruits);
function i3isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("i4").innerHTML = i4isArray(fruits);
function i4isArray(myArray) {
  return myArray.constructor === Array;
}

var myDate = new Date();
document.getElementById("i5").innerHTML = i5isDate(myDate);
function i5isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}

var myDate = new Date();
document.getElementById("i6").innerHTML = i6isDate(myDate);
function i6isDate(myDate) {
  return myDate.constructor === Date;
}

var car22;
document.getElementById("i7").innerHTML=
"typeof car = "+typeof car22;
car22 = undefined;
document.getElementById("i8").innerHTML=
"typeof car = "+typeof car22;

var car33 = "";
document.getElementById("i9").innerHTML=
 car33 +"typeof car = "+typeof car33;

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;
document.getElementById("i10").innerHTML = 'typeof person = '+typeof person;
person = undefined;
document.getElementById("i11").innerHTML=
'typeof person =  '+typeof person+"<br>"+
'typeof undefined = '+typeof undefined + "<br>" +
'typeof null = '+typeof null + "<br><br>" +
'(null === undefined) = '+(null === undefined) + "<br>" +
'(null == undefined) = '+(null == undefined);

document.getElementById("i12").innerHTML= 
"Number('3.14') = "+ Number("3.14") +"<br>"+
"Number(' ') = "+ Number(" ") +"<br>"+
"Number('') = "+ Number("") +"<br>"+
'Number("99 88") = '+ Number("99 88")+"<br>"+
"parseFloat('3.14') = "+ parseFloat("3.14") +"<br>"+
"parseFloat(' ') = "+ parseFloat(" ") +"<br>"+
"parseFloat('') = "+ parseFloat("") +"<br>"+
'parseFloat("99 88") = '+ parseFloat("99 88")+"<br>"+
"parseInt('3.14') = "+ parseInt("3.14") +"<br>"+
"parseInt(' ') = "+ parseInt(" ") +"<br>"+
"parseInt('') = "+ parseInt("") +"<br>"+
'parseInt("99 88") = '+ parseInt("99 88");

var y = "5";
var x = + y;
var w = "John";
var z = +w; 
document.getElementById("i13").innerHTML=
"typeof y = "+typeof y +"<br>"+
"typeof x = "+typeof x +"<br>"+
"typeof w = "+typeof w +"<br>"+
"typeof z = "+typeof z +"<br>";

var x = 123;
document.getElementById("i14").innerHTML=
"String(x) = "+String(x)+"<br>"+
"String(123.36) = "+String(123.36)+"<br>"+
"String(100+23) = "+String(100+23)+"<br>"+
"x.toString() = "+x.toString()+"<br>"+
"(123.36).toString() = "+(123.36).toString()+"<br>"+
"(100+23).toString() = "+(100+23).toString()+"<br>"+
"(x).toExponential() = "+(x).toExponential()+"<br>"+
"(123.36).toExponential() = "+(123.36).toExponential()+"<br>"+
"(100+23).toExponential() = "+(100+23).toExponential()+"<br>"+
"(x).toFixed() = "+(x).toFixed()+"<br>"+
"(123.36).toFixed() = "+(123.36).toFixed()+"<br>"+
"(100+23).toFixed() = "+(100+23).toFixed()+"<br>"+
"(x).toPrecision() = "+(x).toPrecision()+"<br>"+
"(123.36).toPrecision() = "+(123.36).toPrecision()+"<br>"+
"(100+23).toPrecision() = "+(100+23).toPrecision()+"<br>";

var d = new Date();
document.getElementById("i15").innerHTML=
"Number(d) = "+Number(d)+"<br>"+
"d.getTime() = "+d.getTime()+"<br>"+
"String(Date()) = "+String(Date())+"<br>"+
"Date().toString() = "+Date().toString()+"<br>";

document.getElementById("i16").innerHTML=
"Converting Booleans to Numbers : "+"<br>"+
"Number(false) = "+Number(false)+"<br>"+
"Number(true) = "+Number(true)+"<br>"+
"Converting Booleans to Strings : "+"<br>"+
"String(false) = "+String(false)+"<br>"+
"String(true) = "+String(true)+"<br>"+
"false.toString() = "+false.toString()+"<br>"+
"true.toString() = "+true.toString()+"<br>";

document.getElementById("i17").innerHTML =
"(5 + null) = "+(5 + null) + "<br>"  +
'("5" + null) = '+("5" + null) + "<br>" +
'("5" + 2) = '+("5" + 2) + "<br>" +
'("5" - 2) = '+("5" - 2) + "<br>" +
'("5" * "2") = '+("5" * "2") + "<br>" +
'("5" / "2") = '+("5" / "2") + "<br>";

var myVar ={name:"John"};
var myVar1 =[1,2,3,4,5];
var myVar2 =new Date();
document.getElementById("i18").innerHTML=
"myVar.toString() = "+myVar.toString()+"<br>"+
"myVar1.toString() = "+myVar1.toString()+"<br>"+
"myVar2.toString() = "+myVar2.toString()+"<br>";

document.getElementById("i19").innerHTML=
" & &emsp; = Bitwise AND "+"<br>"+
" | &emsp; = Bitwise OR "+"<br>"+
" ^ &emsp; = Bitwise XOR "+"<br>"+
" ~ &emsp; = Bitwise NOT "+"<br>"+
" << &emsp; = ZERO Fill Left Shift "+"<br>"+
" >> &emsp; = Signed Right Shift "+"<br>"+
" >>> &emsp; = Zero Fill Right Shift"+"<br>"+
"5 & 1 = "+(5&1)+"<br>"+
"5 | 1 = "+(5|1)+"<br>"+
" ~ 5 = "+(~5)+"<br>"+
"5 << 1 = "+(5<<1)+"<br>"+
"5 ^ 1 = "+(5 ^ 1)+"<br>"+
"5 >> 1 = "+(5 >> 1)+"<br>"+
"5 >>> 1 = "+(5 >>> 1)+"<br>";

document.getElementById("i20").innerHTML=
" Decimal to Binary : "+"<br>"+
dec2bin(-5)+"<br>"+dec2bin(5)+"<p></p>"+
"Bnary to Decimal : "+"<br>"+
bin2dec(101)+"<br>"+bin2dec(10010)+"<br>";

function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
function bin2dec(bin){
  return parseInt(bin,2).toString(10);
}

var text222 = "Visit W3Schools! W3Schools W3Schools " ;
var n1 = text222.search(/w3schools/i);
var o1 = text222.replace(/W3Schools/g,"Microsoft");
document.getElementById("i21").innerHTML=
" Text Search : "+"<br>"+n1+"<br>"+
" Text Replace : "+"<br>"+o1;

var text33 = "Visit W3Schools";
var result = text33.match(/w3schools/i);
document.getElementById("i22").innerHTML = "Text Match : "+"<br>"+result;

var text44 = "Is this all there is?";
var result = text44.match(/is/g);
document.getElementById("i23").innerHTML = result; 

var text55 = "\nIs th\nis is is is it?";
var result = text55.match(/^is/m);
document.getElementById("i24").innerHTML = "Result is: " + result;

var text66 = "Is this all there is?";
var result = text66.match(/[his]/g);
document.getElementById("i25").innerHTML = 
"Find any of the characters between the brackets : "+"<br>"+result;

var text77 = "123456789";
var result = text77.match(/[1-4]/g);
document.getElementById("i26").innerHTML = 
"Find any of the digits between the brackets : "+
"<br>"+result;

var text88 = "re, green, red, green, gren, gr, blue, yellow";
var result = text88.match(/(red|green)/g);
document.getElementById("i27").innerHTML =
"Find any of the alternatives separated with  |  : "+
"<br>"+ result;

var text99 = "Give 100%!"; 
var result = text99.match(/\d/g);
document.getElementById("i28").innerHTML = 
"Find a digit : "+"<br>"+result;

var text10 = "Is this all there is?";
var result = text10.match(/\s/g);
document.getElementById("i29").innerHTML = 
"Find a whitespace character : "+"<br>"+result;

var text111 = "HELLO, LOOK AT YOU! LOOK LOOK LOOK"; 
var result = text111.search(/\bLO/);
document.getElementById("i30").innerHTML = 
"Find a match at the beginning of a word like this : "+
"<br>"+ result;

var text12 = "HELLO, LOOK AT YOU!"; 
var result = text12.search(/LO\b/);
document.getElementById("i31").innerHTML = 
"Find a match at the end of a word like this : "+
"<br>"+result;

var text13 = "Visit W3Schools. Hello World!"; 
var result = text13.match(/\u0057/g);
document.getElementById("i32").innerHTML = 
"Find the Unicode character specified by the hexadecimal number xxxx : "+
"<br>"+result;

var text14 = "Hellooo World! Javascript Hello W3Schools!"; 
var result = text14.match(/o+/g);
document.getElementById("i33").innerHTML = 
"Matches any string that contains at least one O : "+
"<br>"+ result;

var text15 = "Hellooo World! Hello W3Schools!"; 
var result = text15.match(/lo*/g);
document.getElementById("i34").innerHTML = 
"Matches any string that contains zero or more occurrences of n : "+
"<br>"+result;

var text16 = "1, 100 or 1000?";
var result = text16.match(/10?/g);
document.getElementById("i35").innerHTML = 
"Matches any string that contains zero or one occurrences of n : "+
"<br>"+result;

var text17 = "The best things in life are free!";
document.getElementById("i36").innerHTML=
"The test() method searches a string for a pattern, and returns true or false, depending on the result."+
"<br>"+/e/.test(text17);

const obj = /e/.exec("The best things in life are free!");
document.getElementById("i37").innerHTML =
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;























try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("j1").innerHTML = err.name+"<br>"+err.message;
}

function j2myFunction() {
  const message = document.getElementById("j2");
  message.innerHTML = "";
  var x = document.getElementById("in").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
  finally {
    document.getElementById("in").value = "";
  }
}

var num = 1;
try {
  num.toPrecision(500);
}
catch(err) {
  document.getElementById("j3").innerHTML = err.name+"<br>"+err.message;
}

var x = 5;
try {
  x = y + 1;
}
catch(err) {
  document.getElementById("j4").innerHTML = err.name+"<br>"+err.message;
}

try {
  eval("alert('Hello)");
}
catch(err) {
  document.getElementById("j5").innerHTML = err.name+"<br>"+err.message;
}

var num = 1;
try {
  num.toUpperCase();
}
catch(err) {
  document.getElementById("j6").innerHTML = err.name+"<br>"+err.message;
}

try {
  decodeURI("%%%");
}
catch(err) {
  document.getElementById("j7").innerHTML = err.name+"<br>"+err.message;
}

j8myFunction();
document.getElementById("j8").innerHTML = "I can display " + carName;
function j8myFunction() {
  carName = "Volvo";
}

x = 5;
elem = document.getElementById("j9");
elem.innerHTML = x;
var x;

try {
  carName = "Saab";
  let carName = "Volvo";
}
catch(err) {
  document.getElementById("j10").innerHTML = err.name+"<br>"+err.message;
}


try {
  carName1 = "Volvo";
  const carName1 = "Volvo";
}
catch(err) {
  document.getElementById("j11").innerHTML = err.name+"<br>"+err.message;
}

var x = 5;
elem = document.getElementById("j12");
elem.innerHTML = "x is " + x + " and y is " + y;
var y = 7;

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("j13").innerHTML = person.fullName();

var x = this;
document.getElementById("j14").innerHTML = x;

document.getElementById("j15").innerHTML = j15myFunction1();
function j15myFunction1() {
  return this;
}

var person = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
  j16myFunction2 : function() {
    return this;
  }
};
document.getElementById("j16").innerHTML = person.j16myFunction2();

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}
var x = person1.fullName.call(person2); 
document.getElementById("j17").innerHTML = x; 

var hello;
hello = () => {
  return "Hello World!";
}
document.getElementById("j18").innerHTML = hello();

var hello;
hello = () => "Hello World!";
document.getElementById("j19").innerHTML = 
"Arrow Function without the brackets or the return keyword. "+"<br>"+hello();

var hello;
hello = (val) => "Hello " + val;
document.getElementById("j20").innerHTML = 
" Arrow Function with a parameter : "+"<br>"+hello("Universe!");

var hello;
hello = val => "Hello " + val;
document.getElementById("j21").innerHTML = "if you have only one parameter in an Arrow Function, you can skip the parentheses. "+"<br>"+hello("Universe!");

var hello;
hello = () => {
  document.getElementById("j22").innerHTML += "Arrow Function : "+"<br>"+this;
}
//The window object calls the function:
window.addEventListener("load", hello);
//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

var hello;
hello = function() {
  document.getElementById("j23").innerHTML += "Regular Function : "+"<br>"+this;
}
//The window object calls the function:
window.addEventListener("load", hello);
//A button object calls the function:
document.getElementById("btn1").addEventListener("click", hello);

class Car{
  constructor(name,year){
    this.name = name;
    this.year = year;
  }
}
const mycar1 = new Car("Ford",2014);
const mycar2 = new Car("Jaguar",2021);
document.getElementById("j24").innerHTML=
mycar1.name +" "+mycar1.year+"<br>"+
mycar2.name+" "+mycar2.year;

class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}
let date101 = new Date();
let year101 = date101.getFullYear();

let myCar = new Car1("Ford", 2014);
document.getElementById("j25").innerHTML =
"My car is " + myCar.age(year101) + " years old.";



















let text166 = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj5 = JSON.parse(text166);
document.getElementById("k1").innerHTML =
obj5.employees[1].firstName + " " +
 obj5.employees[1].lastName;

a = 5;
b = 6;
c = a + b;
console.log(c);

let x9 = 15 * 5;
document.getElementById("k2").innerHTML = x9;

document.getElementById("k3").innerHTML = "Hello \
World!";

document.getElementById("k4").innerHTML = k4myFunction(55);
function k4myFunction(a3) {
  let power = 10;
  return a3 * power;
}

document.getElementById("k5").innerHTML = k5myFunction1(55);
function k5myFunction1(a3) {
  let power = 10;
  return a3 * power;
}

document.getElementById("k6").innerHTML = k6myFunction2(55);
function k6myFunction2(a3) {
  let power = 10;
  return a3 * power;
}

document.getElementById("k7").innerHTML = k7myFunction3(55);
function k7myFunction3(a3) {
  let power = 10;
  return a3 * power;
}

document.getElementById("k8").innerHTML = k8myFunction4(55);
function k8myFunction4(a3) {
  let power = 10;
  return a * power;
}

const person11 = [];
person11["firstName"] = "John";
person11["lastName"] = "Doe";
person11["age"] = 46; 
document.getElementById("k9").innerHTML =
person11[0] + " " + person11.length;

const obj1 = document.getElementById("k13");
obj1.innerHTML = " Hello";

document.getElementById("k10").innerHTML = typeof Obj1 === "undefined";
document.getElementById("k11").innerHTML = typeof Obj1 === null;
document.getElementById("k12").innerHTML = typeof Obj1 !== "undefined" && Obj1 !== null;


















const person33 = {};
person33.firstName = "John";
person33.lastName = "Doe";
person33.age = 50;
person33.eyeColor = "blue"; 

document.getElementById("l1").innerHTML =
person33.firstName + " is " + person33.age + " years old.";

const person100 = new Object();
person100.firstName = "John";
person100.lastName = "Doe";
person100.age = 50;
person100.eyeColor = "blue"; 
document.getElementById("l2").innerHTML =
person100.firstName + " is " + person100.age + " years old.";

const x7 = person;
x7.age = 10;
document.getElementById("l3").innerHTML =
person.firstName + " is " + person.age + " years old.";

document.getElementById("l4").innerHTML = 
 person.firstName + " is " + person.age + " years old.";

document.getElementById("l5").innerHTML = 
person["firstName"] + " is " + person["age"] + " years old.";

var txt="";
var y;
for (let y in person) {
  txt += person[y] + " ";
}

document.getElementById("l6").innerHTML=
txt;

person.nationality = "Indian";
delete person.age;//or delete person["age"]

document.getElementById("l7").innerHTML = 
"Added Property : "+"<br>"+person["nationality"]+"<br>"+
"Deleted Age Property : "+"<br>"+person.age;

const myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

document.getElementById("l8").innerHTML = 
myObj.cars.car2+"<br>"+
myObj.cars["car1"]+"<br>"+
myObj["cars"]["car3"];

var z = "";
const myObj1 = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj1.cars) {
  z += "<h2>" + myObj1.cars[i].name + "</h2>";
  for (let j in myObj1.cars[i].models) {
    z += myObj1.cars[i].models[j] + "<br>";
  }
}

document.getElementById("l9").innerHTML = z;

document.getElementById("l10").innerHTML =
myObj1.cars[0].models+"<br>"+
myObj1.cars[1].name+"<br>"+
myObj1.cars[2].models[1];

const person21 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  city: "New York",
  language: "en",
  fullName3: function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  },
  get lang(){
    return this.language.toUpperCase();
  },
  set edu(edu){
    this.education = edu.toUpperCase();
  },
  get fullName1(){ 
    return (this.firstName + " " + this.lastName).toUpperCase();
  },
  fullName2: function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  }
};

document.getElementById("l11").innerHTML = 
person21.fullName3()+"<br>"+
person21.fullName3;

person21.idname = function(){
  return this.id +" "+this.lastName;
}

document.getElementById("l12").innerHTML = 
person21.idname();

var txt = "";
for(let x in person21){
  txt += person21[x]+" ";
}
const myArray = Object.values(person21);

document.getElementById("l13").innerHTML = 
person21+"<br><br>"+"Displaying Object Properties : "+"<br>"+
person21.firstName+","+person21.age+","+person21.city+"<br><br>"+
"Displaying the Object in a Loop"+"<br>"+
txt+"<br><br>"+"Using Object.values() "+"<br>"+
Object.values(person21);

person21.fullName3 = person21.fullName3.toString();
const arr1 = ["John","Peter","Jane","Sally"];

document.getElementById("l14").innerHTML = 
JSON.stringify(person)+"<br><br>"+
"Stringify Dates : "+"<br>"+
"Today : "+JSON.stringify(new Date())+"<br><br>"+
"Stringify Functions : "+"<br>"+
JSON.stringify(person2)+"<br><br>"+
"Stringify Arrays : "+"<br>"+
JSON.stringify(arr1);

document.getElementById("l15").innerHTML = person2.lang;

person2.edu = "B.Tech";
document.getElementById("l16").innerHTML = 
person2.edu;

document.getElementById("l17").innerHTML = 
person21.fullName2() + "<br>" + person21.fullName1;

function person3(first,last,age,eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.language = "English"
  this.nationality = "Indian";
  this.changeName = function (name){
    this.lastName = name;
  };
}
const myFriend1 = new person3("john","Doe",25,"blue");
const myfriend2 = new person3("Sally","Rally",36,"green");
myFriend1.nationality = "Indian";
myFriend1.name = function() {
  return this.firstName + " " + this.lastName;
};
myFriend1.changeName("Rally");
document.getElementById("l18").innerHTML = 
"My Freiends are "+myFriend1.firstName+" "+myFriend1.lastName+
", "+myfriend2.firstName+" "+myfriend2.lastName+
"<br>"+myFriend1.nationality+"<br>"+myFriend1.name()+"<br>"+
myfriend2.nationality+"<br>"+myFriend1.lastName;

person3.prototype.hairColor = "Black";
person3.prototype.name1 = function(){
  return this.firstName +" "+this.lastName;
}
const myFriend3 = new person3("Alex","Henry",22,"red");
document.getElementById("l19").innerHTML = 
myFriend3.name1()+" <br> "+myFriend3.hairColor;

document.getElementById("l20").innerHTML = 
myFriend1.language;
Object.defineProperty(person3, "language", {value:"NO"});
document.getElementById("l21").innerHTML = 
person3.language;

const apples = {name : "Apples"};
const bananas = {name : "Bananas"};
const oranges = {name : "Oranges"};

const fruits11 = new Map();

fruits11.set(apples, 500);
fruits11.set(bananas,300);
fruits11.set(oranges,200);

document.getElementById("l22").innerHTML = 
fruits11 + " <br> " + fruits11.get(apples)+"<br>"+
fruits11.get("apples");

const fruits1 = new Map([
  [apples, 500],
  [bananas, 300],
  [oranges, 200]
  ]);

document.getElementById("l23").innerHTML = 
fruits1.get(apples)+"<br>"+fruits.entries()+
"<br>"+fruits.keys();

const a6 = "a";
const b6 = "b";
const c6 = "c";

const letters = new Set();

letters.add(a6);
letters.add(b6);
letters.add(c6);

document.getElementById("l24").innerHTML = 
letters.size;

const letters1 = new Set();

letters1.add("a");
letters1.add("b");
letters1.add("c");

document.getElementById("l25").innerHTML = 
letters1.size;

const letters2 = new Set(["a","b","c"]);
document.getElementById("l26").innerHTML = 
letters2.size;
document.getElementById("l27").innerHTML = typeof letters; 
document.getElementById("l28").innerHTML = letters2 instanceof Set;

letters.add("d");
letters.add("d");
letters.add("d");
letters.add("d");
letters.add("d");
letters.add("d");
letters.add("d");
letters.add("e");
document.getElementById("l29").innerHTML =
letters.size;
































const x4 = function(a,b) {return a*b};
document.getElementById("m1").innerHTML = x4(44,33);

const m2myFunction = new Function("a","b","return a*b");
document.getElementById("m2").innerHTML = 
m2myFunction(4,33);

document.getElementById("m3").innerHTML =  m3myFunction1(25);

function m3myFunction1(y){
  return y*y;
}

(function () {
  document.getElementById("m4").innerHTML = "Hello! I called myself";
})();

var z = m2myFunction(4,3)*2;
document.getElementById("m5").innerHTML = z;

function m6myFunction2(a,b){
  return arguments.length;
}
document.getElementById("m6").innerHTML = 
m6myFunction2(4,9,6,7,9)+"<br>"+m6myFunction2.toString();

const w5 = (x,y) => x * y ;
document.getElementById("m7").innerHTML = w5(4,9);

const v4 = (x,y) => {return x * y};
document.getElementById("m8").innerHTML = v4(13,16);

function m9myFunction3(x, y) {
  if (y === undefined) {
    y = 2;
  }  
  return x * y;
}

function m9myFunction4(x,y=3){
  return x*y;
}
document.getElementById("m9").innerHTML = 
m9myFunction3(4)+"<br>"+m9myFunction4(3);

function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
function sumAll() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
document.getElementById("m10").innerHTML = 
findMax(1,123,500,115,44,88)+"<br>"+sumAll(1,123,500,115,44,88);

document.getElementById("m11").innerHTML = 
window.findMax(1,5,97,6,5,894,9841,8419);

var u4 = m12myFunction5();
function m12myFunction5() {
  return this;
}
document.getElementById("m12").innerHTML = u4;

function m13myFunction6(arg1,arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

const myObj4 = new m13myFunction6("John","Doe");
document.getElementById("m13").innerHTML = 
myObj4.firstName;

const person88 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const personOne = {
  fullName: function(city,country) {
    return this.firstName + " " + this.lastName+" "+city+" "+country;
  }
}
const person1000 = {
  firstName:"John",
  lastName: "Doe"
}
const person200 = {
  firstName:"Mary",
  lastName: "Doe"
}
document.getElementById("m14").innerHTML = 
person88.fullName.call(person1000)+"<br>"+person88.fullName.call(person200)+
"<br>"+ personOne.fullName.call(person1000,"Olso","Norway")+"<br>"+
"<h3>"+"JavaScript Function Apply : "+"</h3>"+
person88.fullName.apply(person1000)+"<br>"+
personOne.fullName.apply(person1000,["Olso","Norway"]);

document.getElementById("m15").innerHTML = 
Math.max(1,2,3)+"<br>"+Math.max.apply(null,[1,2,3])+
"<br>"+Math.max.apply(Math,[1,2,3])+
"<br>"+Math.max.apply(" ",[1,2,3])+
"<br>"+Math.max.apply(0,[1,2,3]);

let a33 = 4; 
function m16myFunction7() {
  c = 10;
  let b = 5;
  return b*a33;
}
m16myFunction7();
document.getElementById("m16").innerHTML = m16myFunction7()+
"<br>"+(c*c);

document.getElementById("m17").innerHTML = add();
function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();  
  return counter; 
}

const m18add1 = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

function m18myFunction8(){
  document.getElementById("m18").innerHTML = m18add1();
}





















class Car111 {
  constructor(name,year){
    this.name = name;
    this.year = year;
  }
  age(){
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
const myCar1 = new Car111("ford",2014);
document.getElementById("n1").innerHTML = 
myCar1.name+" "+myCar1.year+"<br>"+
"My Car is "+myCar1.age() + " Years Old";

class Car22 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car22 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar33 = new Model("Ford", "Mustang");
document.getElementById("n2").innerHTML = myCar33.show();

class Car2 {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }/*
  set cnam(x) {
    this.carname = x;
  }*/
}

let myCar2 = new Car2("Ford");

document.getElementById("n3").innerHTML = myCar2.cnam;

class Car3 {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }/*
  set carname(x) {
    this._carname = x;
  }*/
}

let myCar3 = new Car3("Ford");

document.getElementById("n4").innerHTML = myCar3.carname;

class Car4 {
  constructor(brand) {
    this._carname = brand;
  }
  set carname(x) {
    this._carname = x;
  }
  get carname() {
    return this._carname;
  }
}

let myCar4 = new Car4("Ford");
myCar4.carname = "Volvo";
document.getElementById("n5").innerHTML = myCar4.carname;

class Car5 {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar5 = new Car5("Ford");
document.getElementById("n6").innerHTML = Car5.hello();
try{
  myCar5.hello();
}
catch(err){
  document.getElementById("n7").innerHTML = err.name+"<br>"+err.message;
}
document.getElementById("n8").innerHTML = Car5.hello(myCar5);


function myDisplayer(some){
  document.getElementById("n9").innerHTML = some;
}
function myFirst(){
  myDisplayer("Hello");
}
function mySecond(){
  myDisplayer("Goodbye");
}
myFirst();
mySecond();


function myDisplayer1(some){
  document.getElementById("n10").innerHTML = some;
}
function myCalculator(num1,num2){
  let sum = num1 + num2;
  return sum;
}
let result11 = myCalculator(5,9);
myDisplayer1(result11);


function myDisplayer2(some){
  document.getElementById("n11").innerHTML = some;
}
function myCalculator1(num1, num2){
  let sum = num1 + num2;
  myDisplayer2(sum);
}
myCalculator1(5,5);


function myDisplayer3(some){
  document.getElementById("n12").innerHTML = some;
}
function myCalculator2(num1,num2,myCallback){
  let sum = num1+num2;
  myCallback(sum);
}
myCalculator2(5,8, myDisplayer3);

setTimeout(n111myFunction1, 5000);
function n111myFunction1(){
  document.getElementById("n111").innerHTML = "I Love You !!"
}
/*
setTimeout(function() { myFunction2("I Love You !!");}, 1000);
function myFunction2(value){
  document.getElementById("n113").innerHTML = value;
}*/

setInterval(n113myFunction3, 500);
function n113myFunction3(){
  let d = new Date();

document.getElementById("n113").innerHTML = 
d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}
setInterval(function() { n1133myFunction2("I Love You !!");}, 900);
function n1133myFunction2(value){
  document.getElementById("n1133").innerHTML = value;
}

function myDisplayer(some) {
  document.getElementById("n13").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);




















"use strict"
let txt11 = "";
var str = "HELLO \
WORLD         ";
var fruits = ["Banana","Orange","Apple","Mango"];
fruits.forEach(o1myFunction);
function o1myFunction(value){
txt11 = txt11 + value + "<br>";
return txt11;}
var fruits111 = fruits.map(o1myFunction1);
function o1myFunction1(value){
  return value + " Fruit ";
}
var numbers = [45,55,64,7,6,2,47];
var over50 = numbers.filter(o1myFunction2);
function o1myFunction2(value){
  return value > 50;
}
var sum = numbers.reduce(o1myFunction3);
function o1myFunction3(total,value){
  return total + value;
}
var sum1 = numbers.reduceRight(o1myFunction3);
var allOver50 = numbers.every(o1myFunction4);
function o1myFunction4(value,index,array){
  return value > 18;
}
let text56 = "Hello world, welcome to the universe.";

document.getElementById("o1").innerHTML = str.charAt(0)+
"<br>"+str[1]+"<br>"+str.trim()+"<br>"+Array.isArray(fruits)+
"<br>"+txt+"<br>"+fruits111+"<br>"+over50+"<br>"+sum+
"<br>"+allOver50+"<br>"+text.includes("world")+
"<br>"+text56.startsWith("Hello")+"<br>"+text56.endsWith("universe.");

document.getElementById("o2").innerHTML = Math.trunc(4.9)+
"<br>"+Math.trunc(4.7)+"<br>"+
Math.trunc(4.4)+"<br>"+
Math.trunc(4.2)+"<br>"+
Math.trunc(-4.2);

document.getElementById("o3").innerHTML = 
Math.sign(-4)+"<br>"+
Math.sign(0)+"<br>"+
Math.sign(4);

document.getElementById("o4").innerHTML = 
Math.cbrt(8)+"<br>"+
Math.cbrt(64)+"<br>"+
Math.cbrt(125);

let x102 = Number.EPSILON;
let y102 = Number.MIN_SAFE_INTEGER;
let z102 = Number.MAX_SAFE_INTEGER;
document.getElementById("5").innerHTML = x102+
"<br>"+y102+"<br>"+z102+"<br>"+
Number.isInteger(10)+"<br>"+Number.isInteger(10.5)+"<br>"+
Number.isSafeInteger(10)+"<br>"+Number.isSafeInteger(12316546131654168451651686546)+
"<br>"+isFinite(10/0)+"<br>"+isFinite(10/1)+
"<br>"+isNaN("Hello");

let str1 = "5";
const person103 = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
document.getElementById("o6").innerHTML = 
fruits.includes("Mango")+"<br>"+
str1.padStart(4,0)+"<br>"+str1.padEnd(4,0)+
"<br>"+Object.entries(person103)+
"<br>"+Object.values(person103);






















document.getElementById("p1").innerHTML = "hi";
var x14 = document.getElementById("DIV").getElementsByTagName("P")[1];
x14.style.backgroundColor = "red";

const x16 = document.getElementById("main");
const y16 = x16.getElementsByTagName("p");

document.getElementById("pdemo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y16[0].innerHTML;

const z17 = document.getElementsByClassName("intro");
document.getElementById("demo1").innerHTML = 
'The first paragraph (index 0) and (index 1) with class="intro" is: ' + z17[0].innerHTML+"&emsp;"+z17[1].innerHTML;

const x28 = document.querySelectorAll("p.intro");
document.getElementById("p4").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x28[0].innerHTML;

const x32 = document.forms["frm1"];
let text441 = "";
for (let i = 0; i < x32.length ;i++) {
  text441 += x32.elements[i].value + "<br>";
}
document.getElementById("p5").innerHTML = text441;

document.getElementById("image").src = "invest.jpg";
document.getElementById("p6").innerHTML = "Date : "+Date()
document.write(Date());

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function p7myFunction(){

let x = document.getElementById("numb").value;
let text = "";
if ( isNaN(x) || x < 1 || x > 10 ){
  text = "Input not Valid";
}else {
  text = "Input OK";
}
document.getElementById("p7").innerHTML = text;
}

function myMove(){
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 50);
  function frame(){
    if (pos == 350){
      clearInterval(id);
    } else{
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}


document.getElementById("myBtn").onclick = displayDate;
function displayDate() {
  document.getElementById("p8").innerHTML = Date();
}

function upperCase(){
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mOver(obj){
  obj.innerHTML = "Thank you";
}

function mOut(obj){
  obj.innerHTML = "Mouse Over Me";
}

function mDown(obj){
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj){
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
}

function FOCUS(x){
  x.style.background = "yellow";
}

/*var x95 = document.getElementById("myBtn1");
x95.addEventListener("mouseover",first);
x95.addEventListener("click",second);
x95.addEventListener("mouseout",three);
*/
function first(){
  document.getElementById("p11").innerHTML += "Mouse Over ! "+"<br>"; 
}

function second(){
  document.getElementById("p11").innerHTML += " Clicked ! "+"<br>";
}

function three(){
  document.getElementById("p11").innerHTML += " Mouse Out !"+"<br>";
}

window.addEventListener("resize",four);
function four(){
  document.getElementById("p12").innerHTML = Math.random();
}

document.getElementById("myP1").addEventListener("click", function() {
  alert("You clicked the white element!");
}, false);
document.getElementById("myDiv1").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, false);
document.getElementById("myP2").addEventListener("click", function() {
  alert("You clicked the white element!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, true);



document.getElementById("myDIV3").addEventListener("mousemove", p13myFunction);
function p13myFunction() {
  document.getElementById("p13").innerHTML = Math.random();
}
function removeHandler() {
  document.getElementById("myDIV3").removeEventListener("mousemove", p13myFunction);
}
function addHandler() {
  document.getElementById("myDIV3").addEventListener("mousemove", p13myFunction);
}

//document.getElementById("p14").innerHTML = document.body.innerHTML;
//document.getElementById("p15").innerHTML = document.documentElement.innerHTML;
document.getElementById("p16").innerHTML = document.getElementById("myDIV3").nodeName;
document.getElementById("p17").innerHTML = document.getElementById("myDiv2").nodeType;
/*
const para = document.createElement("h2");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

const para1 = document.createElement("h1");
const node1 = document.createTextNode("This is Insert Before");
para1.appendChild(node1);
const Child = document.getElementById("p11");
element.insertBefore( para1 , para); 

const elmnt = document.getElementById("p18");
elmnt.remove();

const para2 = document.createElement("h3");
const node2 = document.createTextNode("This is Replaced Element");
para2.appendChild(node2);
const para3 = document.getElementById("p2");
element.replaceChild(para3, para2);
*/
const myCollection = document.getElementsByTagName("p");
document.getElementById("p19").innerHTML = 
"This document contains " + myCollection.length + " paragraphs.";

function colorChange(){
  const myCollection = document.getElementsByTagName("p");
  for(let i = 0;i < myCollection.length; i++){
    myCollection[i].style.color = "red";
  }
}



























document.getElementById("q1").innerHTML = 
"Browser Inner Window Width : "+window.innerWidth+" px<br>"+
"Browser Inner Window Width : "+window.innerHeight+" px";

function open(){
  window.open("https://www.w3schools.com");
 }
 function close(){
  window.close();
 }
 function move(){
  window.moveTo(150,150);
 }
 function resize(){
  window.resizeTo(250,250);
 }

 document.getElementById("q2").innerHTML = 
 "Screen width is " + screen.width+
 "<br>"+"Screen Height is "+screen.height+
 "<br>"+"Available Screen Width is "+screen.availWidth+
 "<br>"+"Available Screen Height is "+screen.availHeight+
 "<br>"+"Screen Color Depth is "+screen.colorDepth+
 "<br>"+"Screen Pixel Width is "+screen.pixelDepth;

 document.getElementById("q3").innerHTML = 
 "Page Location is <br>" + window.location.href+
 "<br>"+"Page Hostname is <br>"+window.location.hostname+
 "<br>"+"Page Path is <br>"+window.location.pathname+
 "<br>"+"Page Protocol is <br>"+window.location.protocol+
 "<br>"+"Port number is <br>"+window.location.port;

 function newDoc(){
  window.location.assign("https://www.w3schools.com");
 }
 function goBack(){
  window.history.back();
 }
 function goForward(){
  window.history.forward();
 }

document.getElementById("q4").innerHTML =
"Cookies Enabled is "+ navigator.cookieEnabled+
"<br><br>"+"Navigator AppName is "+navigator.appName+
"<br><br>"+"Navigator AppCodeName is "+navigator.appCodeName+
"<br><br>"+"Navigator Product is "+navigator.product+
"<br><br>"+"Browser Version is "+navigator.appVersion+
"<br><br>"+"Browser Agent is "+navigator.userAgent+
"<br><br>"+"Browser Platform is "+navigator.platform+
"<br><br>"+"Browser Language is "+navigator.language+
"<br><br>"+"Is Browser Online ? "+navigator.onLine+
"<br><br>"+"Is Java Enabled ? "+navigator.javaEnabled();

function ALERT(){
  alert("Alert");
}

function confirmation(){
  var txt;
  if (confirm("press a Button")){
    txt = "You Pressed OK!";
  } else{
    txt = "You Pressed Cancel!";
  }
  document.getElementById("q5").innerHTML = txt;
}

function PROMPT(){
  let text;
  let person = prompt("Please Enter Your Name : "," Harry Potter ");
  if (person == null || person == ""){
    text = "User Cancalled The Prompt.";
  } else{
    text = "Hello "+person+"! How are you today ? ";
  }
  document.getElementById("q6").innerHTML = text;
}


let text118 = "";
function settimeout(){
  document.getElementById("q7").innerHTML = 
  text118 += " HELLO <br>";
}

let myVar19 = setInterval(myTimer, 1000);

function myTimer(){
  const d = new Date();
  document.getElementById("q8").innerHTML = 
  d.toLocaleTimeString();
}

setTimeout(mytime, 4000);
setTimeout(mytime1, 8000);
setTimeout(mytime2, 12000);
setTimeout(mytime3, 16000);

function mytime(){
  document.getElementById("q9").innerHTML = "4 seconds";  
}
function mytime1(){
  document.getElementById("q9").innerHTML = "8 seconds";
}
function mytime2(){
  document.getElementById("q9").innerHTML = "12 seconds";
}
function mytime3(){
  document.getElementById("q9").innerHTML = "16 seconds";
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('q10').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}























const x26 = document.getElementById("r1");

function getLocation(){
  try{
    navigator.geolocation.getCurrentPosition(showPositon);
  } catch{
    x26.innerHTML = err;
  }
}

function showPositon(position){
  x26.innerHTML = "Latitude: "+position.coords.latitude+"<br>Longitude: "+position.coords.longitude; 
}

function rmyFunction(){
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()){
    document.getElementById("r2").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("r2").innerHTML = "Input OK";
  }
}

function rmyFunction5(){
  let text;
  if(document.getElementById("id2").validity.rangeOverflow){
    text = "Value too large";
  } else {
    text = "Input OK";
  }
  document.getElementById("r3").innerHTML = text;
}

function rmyFunction2(){
  let text;
  if(document.getElementById("id3").validity.rangeUnderflow){
    text = "Value too Small";
  } else {
    text = "Input OK";
  }
  document.getElementById("r4").innerHTML = text;
}

function rmyFunction3(){
  window.history.go(-2);
}

document.getElementById("r5").innerHTML = "Window history length is "+ window.history.length;

localStorage.setItem("name","John Doe");
document.getElementById("r6").innerHTML = localStorage.getItem("name")+"<br>"+
localStorage.length;

sessionStorage.setItem("name1","John Doe");
document.getElementById("r7").innerHTML = sessionStorage.getItem("name1")+"<br>"+
sessionStorage.length;




























document.getElementById("eq1").innerHTML = `half of 100 is ${100/2}`;

console.log("Aardvark" < "Zoroaster");

console.log(NaN == NaN);

console.log(null || "user");

console.log("Agnes" || "user");

let mood = "light";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
/*
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
} else {
console.log("Hey. Why didn't you give me a number?");
}
*/
let tri = "#";
do{
  console.log(tri);
  tri = tri + "#";  
}while(tri.length != 8);

var chess = "";
for( var i=0;i<8;i++){
  if (i%2 == 0) {
    var j5=0;
    var txt1 = "";
    do{
      j5++;
      if (j5%2 == 0) {
        txt1 += "#"; 
      }else{
        txt1 += " ";
      }
    }while(j5 <= 7);
    chess += txt1 + "\n";
  }

  if (i%2 != 0) {
    var j6 = 0;
    var txt2 = "";
    do{
      j6++;
      if (j6%2 == 0) {
        txt2 += " ";
      }else{
        txt2 += "#";
      }
    }while(j6 <= 7);
    chess += txt2 + "\n";
  }
}
console.log(chess);

var size = 8;
var board = "";
for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++) {
    if ((i+j) % 2 == 0) { 
          board += " ";
    } else { 
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);




