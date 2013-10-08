//all_tasks = [];
var todo_app = {
  createTask: function() {
    
    
    //alert("hello")

    //get user input from 'new-user-task-field'
    

    task = document.getElementById('new-user-task-field').value;
    todo_app.addTask(task)
    //all_tasks.push(task);
    //var show_task = document.createElement("div")
  },

  addTask: function(task) {
    var div = document.createElement('div');
    var div_button_delete = document.createElement('button');
    var div_button_complete = document.createElement('button');
    
    div.innerHTML = task;
    div_button_delete.innerHTML = "Delete";
    div_button_complete.innerHTML = "Complete";
    
    div.appendChild(div_button_delete).addEventListener('click', todo_app.deleteTask)
    div.appendChild(div_button_complete)



    //This worked before adding button
    //div.innerHTML = task
   
    //var newdiv = document.createElement('h1')
    //newdiv.appendChild(document.createElement
      //("Please work"));
    //document.getElementById('container').innerHTML = task;
    document.getElementById('todo_items').appendChild(div)


  },
  deleteTask: function(task){
    var old_task = document.getElementById(task)
    old_task.delete(div)

  }
}



//var todo_item = {
  //updateDisplay: function(task)
    //document.getElementById('todo_items').innerHTML = task
//},

window.onload = function () {
  //document.getElementById('add-item')
  document.getElementById('add_task').addEventListener('click', todo_app.createTask)
  //document.getElementById('todo_items').appendChild.addEventListener('click', todo_app.deleteTask)

//var 
  







};
