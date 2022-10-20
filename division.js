var a = parseInt(prompt("Enter the first number: "));
var b = parseInt(prompt("Enter the second number: "));
if(a>b)
{
    var q_1 = a/b;
    var r_1 = a%b;
    console.log("The quotient of the two numbers is: ",q_1);
    console.log("The reminder of the two numbers is: ",r_1);
}
else
{
    var q_2 = b/a;
    var r_2 = b%a;
    console.log("The quotient of the two numbers is: ",q_2);
    console.log("The reminder of the two numbers is: ",r_2);
}