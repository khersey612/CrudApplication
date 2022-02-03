let app = new function() {
    this.el = document.getElementById('tasks');
    this.tasks=[]


//display to do list items-READ

this.FetchAll = function() {
let data='';

if(this.tasks.length>0){
    for(i=0; i<this.tasks.length; i++){
        data+='<tr>';
        data+='<td>'+(i+1)+'. ' + this.tasks[i]+'</td>';
        data+='<td><button onclick="app.Edit('+i+')" class="btn btn-outline-secondary">Edit</button></td>';
        data+='<td><button onclick="app.Delete('+i+')" class="btn btn-outline-secondary">Delete</button></td>';
        data+='</tr>';
    }
}
this.Count(this.tasks.length);
return this.el.innerHTML = data;
    };


//create function-CREATE

    this.Add= function(){
el = document.getElementById('add-todo');
let task= el.value;
if(task){
    this.tasks.push(task.trim());
    this.el.value='';
    this.FetchAll();

}
    };


//edit line items-UPDATE

    this.Edit = function(item){
el = document.getElementById('edit-todo');
this.el.value = this.tasks[item]
document.getElementById('edit-box').style.display = 'block';
self=this;

document.getElementById('save-edit').onsubmit = function(){
    let task = el.value;
    if(task){
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CloseInput();
    }
}
    };

//delete items-DELETE
    this.Delete = function(item){
this.tasks.splice(item, 1);
this.FetchAll();
    };
//pass in data to get appropriate count
    this.Count = function(data){
let el = document.getElementById('counter');
let name = 'Tasks';
if(data){
    if(data == 1){
        name = 'Task';
    }
    el.innerHTML = data+ ' '+name;
}
else{
    el.innerHTML = "No "+ name;
}
    };
}
//call fetchall function so we're always updating to do list
app.FetchAll();
//Close input box
function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}

console.log(Delete);
