let todolist = [];
function addtodo(){
  let  inputElement = document.querySelector('#todo-input');
  let  dateinput = document.querySelector('#date');
  let datein = dateinput.value;
  let todoitem = inputElement.value;
  todolist.push("("+ datein +")---" + todoitem);
  console.log(todolist);
  inputElement.value ='';
  displayitems();
  const too = JSON.stringify(todolist);
  localStorage.setItem('kush',too);

  return;
}

window.onload = function() {
  const storedList = localStorage.getItem('kush');
  if (storedList) {
    todolist = JSON.parse(storedList);
    displayitems();
  }
};

function displayitems(){
  let newHtml = '';
  let historyvalue = document.querySelector('#history');
  for ( let i = 0; i < todolist.length; i++){
   newHtml +=`
   <div class="task"><span>${i +1}.</span>
        <span id ="todospan">${todolist[i]}</span>
        <button  id="delete" onclick="todolist.splice(${i},1);
        localStorage.setItem('kush', JSON.stringify(todolist));
        displayitems();
        ">delete</button>
    </div>`;
  }
  historyvalue.innerHTML = newHtml;
}
