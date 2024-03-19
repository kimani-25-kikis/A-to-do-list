const todoList =[{name :'Make dinner', duedate: '2022-09-03'},

{name :'Wash utensils', duedate: '2022-09-03'}];

renderTodoList();

function renderTodoList(){

    let todoListHtml = '';

        for(let i =0; i<todoList.length;i++){
            const todoObject = todoList[i];
            //const name = todoObject.name;
            //const duedate = todoObject.duedate;
           const {name, duedate} = todoObject;
            const html = `
            
        
             <div>${name}</div>
             <div>${duedate}<div> 
             
             <button onclick ="
             
             todoList.splice(${i},1);
             renderTodoList();
             "class="delete-todo-button">Delete</button>
             
             `;
            todoListHtml += html;

        }

        document.querySelector('.js-todo-list').innerHTML =todoListHtml;
}

function addTodo(){
    const inputElement =document.querySelector('.js-input-name');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input')
    const duedate = dateInputElement.value;
    

    todoList.push({

        name,
        duedate
    });


    inputElement.value ='';

    renderTodoList();
}
