let i = 0;
let todos = [];
const todoContent = document.getElementById('todos');
const content = document.getElementById('content');
const radioButton = document.getElementsByName('status');

const clickAdd = () => {
  const todo = {
    id: todos.length,
    comment: content.value,
    status: '作業中'
  }

  todos.push(todo);

  showTask(todos);
  content.value = "";
}

function showTask(todos) {
  todoContent.innerText = "";
  todos.forEach((todo, i) => {
    const tr = document.createElement('tr');
    todoContent.appendChild(tr)
    const tableId = document.createElement('td');
    const tableComment = document.createElement('td');
    const tableStatus = document.createElement('td');
    const tableDelete = document.createElement('td');

    tableId.innerText = i;
    tableComment.innerText = todo.comment;

    tr.appendChild(tableId);
    tr.appendChild(tableComment);
    tr.appendChild(tableStatus);
    tr.appendChild(tableDelete);

    tableStatus.appendChild(statusButton(todo));
    tableDelete.appendChild(deleteButton(todo.id));
  })
}

function statusButton(todo) {
  const statusButton = document.createElement('button');
  statusButton.textContent = todo.status;
  statusButton.addEventListener('click', () => {
    if (todo.status === '作業中') {
      todo.status = '完了';
    } else {
      todo.status = '作業中';
    }
  });
  return statusButton;
};

function deleteButton(id) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', () => {
    const targetIndex = todos.findIndex(todo => {
      return todo.id === id;
    })
    todos.splice(targetIndex, 1);
    showTask(todos)
    todos.forEach((todo, i) => {
      todo[i].id = i;
    })

  });
  return deleteButton;
};

document.getElementById('add_btn').addEventListener('click', () => clickAdd());