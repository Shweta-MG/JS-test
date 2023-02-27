//Using JavaScript, create a button, add it to the html
let div = document.querySelector('.selfAssesment');
let button = document.createElement('BUTTON');
let text = document.createTextNode("Button");



button.style.backgroundColor = "Green";
button.style.borderRadius = '15px';



button.appendChild(text);
div.appendChild(button);

//adding event listener. 
button.addEventListener('click', onclick)

function onclick(){
    let h1  = document.createElement('h1');
    let textH1 = document.createTextNode('Javascript test');
    h1.appendChild(textH1);
    div.appendChild(h1);

//Background color change randomly
    let color = '#'
    color += Math.random().toString(16).slice(2,8).toUpperCase();
    div.style.backgroundColor = color;
    button.disabled = true;    
}
