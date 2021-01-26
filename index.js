let i = 0;

const clickAdd = () => {
  const content = document.getElementById('content').value;
  document.getElementById('content').value = "";

  const todosContents = document.getElementById('todos');

  const tr = document.createElement('tr');
  todosContents.appendChild(tr);

  const tdId = document.createElement('td');
  tdId.innerText = i++;

  const tdComment = document.createElement('td');
  tdComment.innerText = content;

  const workingButton = document.createElement('button');
  workingButton.innerText = "作業中";

  const deleteButton = document.createElement('button');
  deleteButton.innerText = "削除";

  todosContents.appendChild(tdId);
  todosContents.appendChild(tdComment);
  todosContents.appendChild(workingButton);
  todosContents.appendChild(deleteButton);
}


document.getElementById('add_btn').addEventListener('click', () => clickAdd());