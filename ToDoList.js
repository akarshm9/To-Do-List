let del = document.getElementById('del');
let add = document.getElementById('add');
let t = document.getElementById('t');
let d = document.getElementById('d');
let todos = document.getElementById('todo');
let i;

add.addEventListener("click", (e) => {
    let title = t.value;
    let desc = d.value;
    e.preventDefault();

    console.log(e);

    localStorage.setItem("ToDos", JSON.stringify([title, desc]));
    todos.innerHTML = `<h3>${title}</h3>
    <p>${desc}</p>`;
if (title=="" && desc=="") {
    todos.innerText="Please enter title and description for your todos"
}
else if(title=="")
{
    todos.innerText="Please enter the title";
}
else if(desc==""){
    todos.innerText="Please enter the description";
}
else{
    console.log("hello")
}
   

})

del.addEventListener("click", (e) => {
    let title=t.value;
    let desc=d.value;
    e.preventDefault();
    localStorage.clear();
    todos.innerHTML="";
    if (title=="" && desc=="") {
        todos.innerText="Nothing to delete!!";
    }
})
var first=document.getElementById('first');
var second=document.getElementById('second');
var third=document.getElementById('third');
var fourth=document.getElementById('fourth');
var fifth=document.getElementById('fifth');

let harry=document.getElementById('harry');
let chris=document.getElementById('chris');
let shani=document.getElementById('shani');
let giri=document.getElementById('giri');
let mosh=document.getElementById('mosh');

function done1() {
    first.style.textDecoration="line-through";
    harry.style.textDecoration="line-through";
    
}
function done2() {
    second.style.textDecoration="line-through";
    mosh.style.textDecoration="line-through";
}
function done3() {
    third.style.textDecoration="line-through";
    chris.style.textDecoration="line-through";
}
function done4() {
    fourth.style.textDecoration="line-through";
    shani.style.textDecoration="line-through";
}
function done5() {
    fifth.style.textDecoration="line-through";
    giri.style.textDecoration="line-through";
}
function done6() {
    sixth.style.textDecoration="line-through";
    akarsh.style.textDecoration="line-through";
}
function done7() {
    seventh.style.textDecoration="line-through";
    nihant.style.textDecoration="line-through";
}
function done8() {
    eighth.style.textDecoration="line-through";
    ashmit.style.textDecoration="line-through";
}



function mar1() {
    first.style.textDecoration="underline";
    harry.style.textDecoration="underline";
}
function mar2() {
    second.style.textDecoration="underline";
    mosh.style.textDecoration="underline";
}
function mar3() {
    third.style.textDecoration="underline";
    chris.style.textDecoration="underline";
}
function mar4() {
    fourth.style.textDecoration="underline";
    shani.style.textDecoration="underline";
}
function mar5() {
    fifth.style.textDecoration="underline";
    giri.style.textDecoration="underline";
}
function mar6() {
    sixth.style.textDecoration="underline";
    akarsh.style.textDecoration="underline";
}
function mar7() {
    seventh.style.textDecoration="underline";
    nihant.style.textDecoration="underline";
}
function mar8() {
    eighth.style.textDecoration="underline";
    ashmit.style.textDecoration="underline";
}