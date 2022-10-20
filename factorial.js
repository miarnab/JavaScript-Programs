var a = parseInt(prompt("Enter the number: "));
var f = 1;
for(var i = 1; i <= a; i++)
{
    f = f * i;
}
console.log("The factorial of the given number: ",f);