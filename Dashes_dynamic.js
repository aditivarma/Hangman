var wordArray = ['Apple', 'Banana','Caramel'];
/*
Math.random generates a random no between 0 and 1, 
by mutiplying the length of the array, we can generate a random no between o and 3 
However, elements of an array are postitioned from 0 to (array.length - 1)
So we need to find an integer between 0 and 2 (math.round rounds off no to nearest integer)
*/
var randomElement = Math.round(Math.random() * (wordArray.length - 1));
var randomWord = wordArray[randomElement];
console.log(randomWord);
var numberOfDashes = randomWord.length;
var x1 = -10;
const y1 = 0;
const y2 = 0;
for (i = 1;i <= numberOfDashes;i++)
{
    x1 = x1 + 10 
    x2 = x1 + 20
    var xCoordinates =  Math.pow((x2 - x1), 2);
    var yCoordinates =  Math.pow((y2 - y1), 2);
    var width = Math.sqrt(xCoordinates + yCoordinates)
    
}