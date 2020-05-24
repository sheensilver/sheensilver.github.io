
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const btn = document.getElementById('btn');
var fullText = '';
var lessText = '';
function checkText() {
    fullText = inputText.value;
    let checkText = inputText.value.split(' ');
    if(checkText.length < 12){
      outputText.innerHTML = fullText;  
      return false;
    }
    else{   
        let i = 0;
        for(x of checkText){
                lessText = lessText + x + ' ';
                i++;
                console.log(x);
                if(i >= 12)
                    break;
        }
        lessText = lessText + '...';
        outputText.innerHTML = lessText;
        btn.innerHTML = 'Show More';
        return true;
    }

}
function btnClick(){
    checkText();
    if(checkText() === true){
        outputText.innerHTML = fullText;
        console.log(fullText);
        btn.style.display = ' none'
    }
}