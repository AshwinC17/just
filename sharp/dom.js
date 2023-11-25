// DOM \\
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.links);


// Get element by id
//console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Hy'
// console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h1> hello </h1>'
// header.style.borderBottom = 'solid 10px #002'

// Get elements by class name 
//let items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';
//items[2].style.backgroundColor = 'green';
// for(let i=0; i<items.length; i++) {
//     items[i].style.fontWeight = 'bold'
// }

//Get element by tag name
// let li = document.getElementsByTagName('li');
// li[1].textContent = 'hey'
// for(let i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = 'green';
// }
// let newItem = document.createElement('li');
// newItem.textContent = "item 5"
// li[3].appendChild(newItem);

// Query Selector
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'
// let input = document.querySelector('input');
// input.value = 'new'
// let submit = document.querySelector('input[type = "submit"]');
// submit.value = "send"
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// let lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'orange';

// Query Selector ALL
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';
// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = 'grey';
// }

//Task
// let li = document.querySelectorAll('li');
// li[1].style.color = 'green';
// let titles = document.querySelectorAll('.title');
// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }

// Traverse \\

//let il = document.querySelector('#items');

//ParentNode 
// console.log(il.parentNode);
// console.log(il.parentNode);
// il.parentNode.style.background = 'grey';
// console.log(il.parentNode.parentNode.parentNode);

//Parent Element
// console.log(il.parentElement);
// console.log(il.parentElement);
// il.parentNode.style.background = 'grey';
// console.log(il.parentElement);

// ChildNodes
// console.log(il.childNodes);
// console.log(il.children);
// console.log(il.children[1]);
// il.children[1].style.backgroundColor = 'yellow';

//FirstChild
// console.log(il.firstChild);

// First element child
// console.log(il.firstElementChild);
// il.firstElementChild.textContent = " hello first";

//Last element Child
//console.log(il.lastElementChild);
// il.lastElementChild.textContent = " hello last";

//Last Child
// console.log(il.lastChild);
// il.lastChild.textContent = " hello last";

//nextsibling
// console.log(il.nextSibling);

//next element sibling
// console.log(il.nextElementSibling);

//previous sibling
// console.log(il.previousSibling);

//previous  element sibling
// console.log(il.previousElementSibling);
// il.previousElementSibling.style.backgroundColor = 'yellow';

// create Element
let newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'h1';

// set attribute
newDiv.setAttribute('title', 'hello div');

// create text node
let newDivTxt = document.createTextNode('Hello World');

// add text to div/ append child
newDiv.appendChild(newDivTxt);

// Insert before "Item Lister"
let container1 = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container1.insertBefore(newDiv, h1);
newDiv.style.fontSize = '20px';

// Update id and title for the next use
newDiv.id = 'h2';
newDiv.setAttribute('title', 'hello2 div');

// Insert before "Item 1"
let container2 = document.querySelector('#items');
let item1 = document.querySelector('#items li:first-child');
container2.insertBefore(newDiv.cloneNode(true), item1);

newDiv.style.fontSize = '50px';