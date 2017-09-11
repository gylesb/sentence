var sentence = prompt("Enter a sentence: ");

var greet = function() {
print(sentence);
};
greet();

var first=sentence.charAt(0).toUpperCase();
alert("first letter is "+first);

var len=sentence.length;
var last=sentence.charAt(len-1).toUpperCase();
alert("last letter is "+last);

var len=sentence.length;
var rfirst=sentence.charAt(len-1).toUpperCase();
alert("Reversing the order of first letter  "+first+" will be "+rfirst);

var rlast=sentence.charAt(0).toUpperCase();
alert("Reversing the order of last letter "+last+" will be "+rlast);

alert("original order of the sentence "+first+last);

alert("Reverse order of the sentence "+rfirst+rlast);
alert(sentence + last + first);

var sent=sentence+last+first;
alert(sent);

alert("length of the sentence "+len);

var halflen=len/2;

alert("half length of the sentence "+halflen);


var hsen=sentence.charAt(halflen);

var order=hsen+sent;

alert("new order will be "+order);

var sentence = prompt("Enter a sentence: ");
var first=function(sentence){
return sentence.charAt(0).toUpperCase();
};

alert(first(sentence));
