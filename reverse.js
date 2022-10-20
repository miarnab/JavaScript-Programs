var n = parseInt(prompt("Enter the number: "));
var r = 0, rev = 0;
while(n>0)
{
    r = n % 10;
    rev = rev * 10 + r;
    n = n / 10;
}
console.log("The reverse of the given number is: ",rev);