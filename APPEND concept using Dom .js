
//AppendChild Concept
let newP =document.createElement('p');
newP.innerText="hi,im new paragraph.";
// how can we insert js object to user page.
let body1 =document.querySelector('body');
body1.appendChild(newP);
newP.append("How are yuuuuuu");
let btn =document.createElement('button');
btn.innerText="SuBmit";
body1.appendChild(btn);


let newH = document.createElement('h4');
newH.innerText="i append into the Box byeQ!";
let box = document.querySelector('.box');
box.appendChild(newH);


//append element/string/text can do append Always append on Last
let body =document.querySelector('body');
body.appendChild(newP);
newP.append("How are yuuuuuu");


//prepend can add in the start of the element


box.prepend(newH);


// insertAdjacent(where can we add element )

// insertADjacentElenent(position,element),
// there are 4 parameters
// beforebegin'
// afterbegin,
// beforeend,
// afterend,

// let box = document.querySelector('.box');
// let btn =document.createElement('button');
// btn.innerText= "im new btn";
// box.insertAdjacentElement('beforeend',btn);

//REMOVING ELEMENT
//removeChild(element);
//remove(element)
