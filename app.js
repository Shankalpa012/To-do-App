"use strict"
//My Selectors
const todoinput=document.querySelector('.todo-input');
const todobtn=document.querySelector('.todo-btn');
const todolist=document.querySelector('.todo-list');

//My Event Listener
todobtn.addEventListener('click',addtask);
todolist.addEventListener('click', deleteItems);




//My Functions

//onclick function for add Event(for adding the task)
function addtask(e){
    //stops from refreshing the page
    e.preventDefault();9

    //creating a div
    const tododiv=document.createElement('div');
    tododiv.classList.add('todo');
    
    //creating a list inside div
    const list=document.createElement('li');
    list.innerText=todoinput.value;
    list.classList.add('list');
    tododiv.appendChild(list);
    
    //adding to the local storage
    todoStore(todoinput.value);
    
    //creating a check button
    const checkbtn=document.createElement('button'); 
    checkbtn.classList.add('check-btn');
    checkbtn.innerHTML='<i class="fas fa-check"></i>';
    tododiv.appendChild(checkbtn);   
    
    //creating a delet button
    const deletebtn=document.createElement('button'); 
    deletebtn.classList.add('delete-btn');
    deletebtn.innerHTML='<i class="fas fa-trash"></i>';
    tododiv.appendChild(deletebtn);   

     //appending into the list
     todolist.appendChild(tododiv);

     //clearing the input
     todoinput.value=" ";

}

//this function is to delete the task 

function deleteItems(e){
    
    const items=e.target;
    if(items.classList[0]==="delete-btn"){
     const todo=items.parentElement;
     todo.classList.add("effect");
     todo.addEventListener("transitionend",function(){
        todo.remove();        
     });

    }
     
     if(items.classList[0]==="check-btn"){
        const todo=items.parentElement;
        todo.classList.toggle("completed");
    }
}

//this function is to store in the local Storage
function todoStore(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    } 
        console.log(todos);  
        todos.push(todo);
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos))

}





