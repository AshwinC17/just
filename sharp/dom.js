//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.links);


// Get elements by id
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

//get element by tag name
let li = document.getElementsByTagName('li');
li[1].textContent = 'hey'

// for(let i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = 'green';
// }
let newItem = document.createElement('li');
newItem.textContent = "item 5"
li[3].appendChild(newItem);