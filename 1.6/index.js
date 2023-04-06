// console.log("Hello my name is Siwoo");
// console.log("Hello my name is Jiwoo");
// console.log("Hello my name is Riwoo");
// console.log("Hello my name is Xiwoo");
// console.log("Hello my name is Biwoo");

function hello(name, age)
{
  console.log("Hello my name is " + name + "and I'm in " + age);
}

hello("Siwoo", 19);
hello("Jiwoo", 14);
hello("Riwoo", 15);
hello("Xiwoo", 11);
hello("Biwoo", 18);

const calculator = 
{
  plus : function plus(a,b) // a and b is location
  {
    console.log(a+b);
  },
  divide : function divide(a,b)
  {
    console.log(a/b);
  }
};

calculator.divide(123,1234)