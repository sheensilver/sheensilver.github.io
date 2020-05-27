const addContentItem = document.getElementById('add-item');
const bot = document.getElementById('bot');
let  ItemsLength = 0

function addItem() {
   ItemsLength ++;
   if(addContentItem.value !== "" && ItemsLength < 11){


   console.log('add');
   let newToDoItem =  document.createElement('div'); 
   let ToDoContent = document.createElement('p');
   let ToDoBtn1 = document.createElement('button');
   let ToDoBtn2 = document.createElement('button');
   let saveIcon = document.createElement('i');
   let deleteIcon = document.createElement('i');

   bot.appendChild(newToDoItem);
   newToDoItem.appendChild(ToDoContent);
   newToDoItem.appendChild(ToDoBtn1);
   newToDoItem.appendChild(ToDoBtn2);
   newToDoItem.classList.add('to-do-item');

   ToDoContent.classList.add('content')

   ToDoBtn1.appendChild(saveIcon);
   saveIcon.classList.add('fa');
   saveIcon.classList.add('fa-check');
   saveIcon.classList.add('green');

   ToDoBtn2.appendChild(deleteIcon);
   deleteIcon.classList.add('fa');
   deleteIcon.classList.add('fa-times');
   deleteIcon.classList.add('red')

   ToDoContent.innerHTML = addContentItem.value;
   addContentItem.value = "";



   ToDoBtn2.addEventListener('click', function(e){
      this.parentElement.remove();
   })
   }else
      alert("You were add alot of task");
   

}