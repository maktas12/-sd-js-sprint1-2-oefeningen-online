console.log("main.js file loaded");

//prompt('Irritant he zo een popup ;-) Bij alle opdrachten geldt, bedenk eerst de oplossing en schrijf deze in stapjes op (steno) ga daarna pas aan het werk!!', 'Ja meneer dat doe ik!')
const switchButton = document.querySelector(".button-switch");
if (switchButton){
    switchButton.addEventListener('click', function(){
        const theBody = document.body;
        theBody.classList.toggle("the_body_dark");
        const theButton = document.querySelectorAll("button_light");
        for (let i = 0; i < theButton.length; i++){
            const changeButton = theButton[i];
            changeButton.classList.toggle('button_dark');
        }
    })
}

const switchButton2 = document.querySelector(".button-switch2");
if (switchButton2){
    switchButton2.addEventListener('click', function(){
        const theBody1 = document.querySelector(".deelBlokje");
        theBody1.classList.toggle("input_dark");
        const theBody2 = document.querySelector(".deelBlokje1");
        theBody2.classList.toggle("input_blue");
        const theButton = document.querySelectorAll("button_light");
        for (let i = 0; i < theButton.length; i++){
            const changeButton = theButton[i];
            changeButton.classList.toggle('button_dark');
        }
    })
}