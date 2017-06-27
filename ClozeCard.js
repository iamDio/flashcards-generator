module.exports  = ClozeCard;


function ClozeCard(fullText,partial,cloze){

this.fullText = fullText;
this.partial = partial;
this.cloze = cloze;


/*	The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

The constructed object should have a partial property that contains only the partial text.

The constructed object should have a fullText property that contains only the full text.

The constructor should throw or log an error when the cloze deletion does not appear in the input text.

Use prototypes to attach these methods, wherever possible.*/
}


var question1 = new ClozeCard('Rome is the capital of Italy', '... is the capital of Italy','Rome');

console.log(question1.partial)
console.log();
console.log(question1.fullText)