const age = 96;

function calculateKrAge(ageOfForeigner)
{
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calculator = 
{
  add : function(a,b)
  {
    return a+b;
  }
};

console.log(calculator.add(12,89));