
shirtSize =12;
firstName ="Talha ";
lastName ='Ali';

shirtSize = ''

function make_shirt(sizeOfShirt,message){
    if(sizeOfShirt == ''){
        sizeOfShirt = 'medium';
    }
    if(sizeOfShirt == 'medium' || sizeOfShirt == 'large'){
        return `size of your shirt is: ${sizeOfShirt}` +
            `\n message: I love JavaScript`;
    }else {
        return `size of your shirt is: ${sizeOfShirt}` +
            `\n message: Other Sizes Then Larges and medium`;
    }

}

// make_shirt(15,"Hello world");

console.log("Q37 = T-Shirt size and Message Function:")
console.log(make_shirt(shirtSize ,"Hello world"))