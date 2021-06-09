const text = ['You Only live Once']; //you can add more index here
let count = 0; //count the index inside the array
let currentText = '' //this will hold the value of the array
let letter = ''; 
let index = 0; //count individual letters

//self invoke function  
(function type(){

    if(count === text.length){ //resume the count after end of the string inside array
        count = 0;
    }
    currentText = text[count] //pass the value of the text array
    letter = currentText.slice(0, ++index); //get the individual letters
    document.querySelector('.typing').textContent = letter; //display the letters
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 300);
}());