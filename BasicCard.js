module.exports = BasicCard;

function BasicCard (front,back){
this.front = front;
this.back  = back; 

/*	The constructed object should have a front property that contains the text on the front of the card.
The constructed object should have a back property that contains the text on the back of the card.*/
}

var question1 = new BasicCard('What is the Capital of Italy?', 'Rome');
var question2 = new BasicCard('Who is the president of USA?', 'Donald Trump');

console.log(question1.front);


