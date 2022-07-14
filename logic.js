function generator(length, lower, letters, chars){
    /*
    length: int
    lower: bool 
    letters: bool 
    chars: bool 
    return: string

    this function takes as input length of desired password, and what should be included in said password
    then returns a string matching desired password
    */
    const allLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    const allChars = [ "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

    let final = ""
    
    if(lower){
        for(let i = 0; i < length; i++){
            let x = Math.floor(Math.random() * (allLowerCase.length - 1))
            console.log(x)
            final = final + allLowerCase[x]
        }
        
    }else if(letters){
        for(let i = 0; i < length; i++){
            let x = Math.floor(Math.random() * (allLetters.length - 1))
            console.log(x)
            final = final + allLetters[x]
        }
    }else if(chars){
        for(let i = 0; i < length; i++){
            let x = Math.floor(Math.random() * (allChars.length - 1))
            console.log(x)
            final = final + allChars[x]
        }
    }else{
        console.log("invalid selection")
    }

    return final


}

const radio = document.getElementById("resetRadio"); 
var ele = document.getElementsByName("fav_language");
radio.addEventListener("click", function(){
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
    
      
})


let lower = false; 
let letters = false; 
let chars = false; 
    


const element = document.getElementById("generate");

//all checks go here
element.addEventListener("click", function() {
    let lower = false; 
    let letters = false; 
    let chars = false; 
    let length = 15; 
    var slider = document.getElementById("myRange");

    length = slider.value; 

    if(document.getElementById("lowercase").checked) {
        lower = true; 
        letters = false; 
        chars = false; 
    }else if(document.getElementById('nosymbols').checked) {
        lower = false; 
        letters = true; 
        chars = false; 
    }else if(document.getElementById('allchars').checked){
        lower = false; 
        letters = false; 
        chars = true;
    }


    let password = generator(length, lower, letters, chars)
    document.getElementById("output").innerHTML = password;


  });
