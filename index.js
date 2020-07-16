const form=document.querySelector('form');
const ul=document.querySelector('ul');
const input=document.querySelector('input');
const taskLeft=document.getElementById('task_left');
const deleteall=document.getElementById('delete');
const leftTask=document.getElementById('left_task');
const completed=document.getElementById('completed');

const todoList=document.querySelector('ul');
var count=0;

form.addEventListener('submit',addTask);
todoList.addEventListener('click',checkDelete);
deleteall.addEventListener('click',DeleteMultiple);
totalTaskLeft(count);
function DeleteMultiple(e)
{
  e.preventDefault();
  ul.innerHTML='';
  count=0;
  totalTaskLeft(count);

}
function addTask(e)
{
    e.preventDefault();
    if(input.value=='')
        return;
     
    var id=Date.now().toString();    
    var li=document.createElement('li');

    li.innerHTML=(`<input type="checkbox" id="${id}" class="check"><label for="${id}" >
    ${input.value}<div class="hover delete">
    <i class="far fa-times-circle" ></i></div></label>`);
     ul.append(li);
     input.value='';
     count++;
    totalTaskLeft(count);

}

function totalTaskLeft(count)
{
taskLeft.innerText=count;
if(count==0)
{
 leftTask.classList.add('visible');
 completed.classList.add('completed');


}
else
{
  leftTask.classList.remove('visible');
  completed.classList.remove('completed');

}

}
function checkDelete(e)
{

  if(e.target.classList[0]==="check")
  {
    if(e.target.checked==false)
    {
      count++;
    totalTaskLeft(count);
      
    }
    else
    {
      count--;
      totalTaskLeft(count);
    }
    e.target.parentElement.classList.toggle('checked');


  }
  else if(e.target.parentElement.classList.contains('delete'))
  {

e.target.parentElement.parentElement.parentElement.style.display='none';


  }
  return;

}