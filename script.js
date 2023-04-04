//selector
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todolist=document.querySelector('.todo-list');
const totalItem=document.getElementById("task");

//eventlistener

todoButton.addEventListener('click',addtodo);
todolist.addEventListener('click',deleteCheck);
let count=0;
totalItem.innerHTML=`<p><b>${count}</b> task left</p>`;

//function

function addtodo(event){
    if(todoInput.value==''){
        alert('please enter a task');
    }
    else{
        count++;
        totalItem.innerHTML=`<p><b>${count}</b> task left</p>`;
        
        //prevent from submitting
        event.preventDefault();
        //Todo Div
        const newDiv=document.createElement('div');
        newDiv.classList.add('todo');
        
      //  const buttondiv=document.createElement('div');
       // buttondiv.classList.add('buttons');
        //Create li
        const newtodo=document.createElement('li');
        newtodo.innerHTML=todoInput.value;
        newtodo.classList.add('todo-item');
        newDiv.appendChild(newtodo);
        //create checked button
        const completedButton=document.createElement('button');
        completedButton.innerHTML='<i class="fa fa-solid fa-check"></i>';
        completedButton.classList.add('complete-btn');
        newDiv.appendChild(completedButton);
        //create delete button
        const trashButton=document.createElement('button');
        trashButton.innerHTML='<i class="fa fa-solid fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        newDiv.appendChild(trashButton);
        //append to the list
        todolist.appendChild(newDiv);
    
        //clear todo input value
        todoInput.value='';
    }
  
}

function deleteCheck(e){
    const item=e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        todo.classList.add('fall');
        count--;
        totalItem.innerHTML=`<p><b>${count}</b> task left</p>`;
        todo.remove();
    }

    if(item.classList[0]=='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle('check');
    }
}

// showing all items
const btn1=document.getElementById("btn1");
btn1.addEventListener("click", 
function comp (){
    const todos = todolist.childNodes;
    todos.forEach(function (todo) {
            if (todo.classList.contains("check")) {
                todo.style.display = "flex";
            } 
    });
  }
)

// showing checked items

function comp (){
    const todos = todolist.childNodes;
    todos.forEach(function (todo) {
            if (todo.classList.contains("check")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
});
}

// showing unchecked items

function Uncomp(){
    const todos = todolist.childNodes;
    todos.forEach(function (todo) {
            if (!todo.classList.contains("check")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
});
}