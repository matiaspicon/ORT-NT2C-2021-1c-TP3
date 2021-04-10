const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let count = 0;
let uncheck = 0;

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const uncheckedCountTextSpan = document.getElementById('unchecked-span')


function addTodo() {
  const mensaje = prompt('Ingrese la tarea a realizar: ');  
  const li = document.createElement('li');

  const cb = document.createElement('input');
  cb.type = "checkbox";
  cb.onchange = uncb;
  cb.className = classNames.TODO_CHECKBOX
  
  const span = document.createElement('span');
  span.innerText = mensaje;
  
  li.className = classNames.TODO_ITEM

  li.appendChild(cb);
  li.appendChild(span);
  list.appendChild(li);

  count++;
  uncheck++;

  itemCountSpan.innerText = count;
  refreshUncheckText();
}

function uncb(algo){
  if(algo.target.checked){
    uncheck--;
  }
  else{
    uncheck++;
  }
  refreshUncheckText();
}

function refreshUncheckText(){
  uncheckedCountSpan.innerText = uncheck;
  if(uncheck < (count - count*0.7)){
    uncheckedCountTextSpan.classList= "count-cb-good"
  } else if(uncheck < (count - count*0.4)){
    uncheckedCountTextSpan.classList= "count-cb-warning"
  } else{
    uncheckedCountTextSpan.classList= "count-cb-bad"
  }


}
