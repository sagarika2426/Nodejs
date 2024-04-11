async function fetchData() {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'flex-col', 'items-center', 'py-3', 'bg-gray-800', 'w-1/2', 'm-auto', 'rounded-lg', 'shadow-md');

    data.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'items-center', 'w-full', 'py-2', 'px-4', 'border-b', 'border-gray-300');
        li.innerHTML = `
            <span class="text-yellow-500 font-semibold" id="todo_${todo.id}">${todo.todo}</span>
            <div class="flex">
                <button onclick="editTodo(${todo.id})" class="px-3 py-1 mr-2 bg-green-200 rounded-md text-black">Edit</button>
                <button onclick="deleteTodo(${todo.id})" class="px-3 py-1 bg-yellow-200 rounded-md text-black">Delete</button>
            </div>
        `;
        containerDiv.appendChild(li);
    });

    todoList.appendChild(containerDiv);
}

async function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todo = todoInput.value;
    // console.log(todo)
    if (todo !== "") {
        try {
            await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ todo })
            });
            fetchData();
            window.alert('New task has been added!');
            todoInput.value = ""; //clear the input field after adding the todo
        } catch (error) {
            console.error('Error adding new todo:', error);
        }
    }
}

async function editTodo(id) {
    const todoElement = document.getElementById(`todo_${id}`);
    const updatedTodo = prompt("Update the Task:", todoElement.innerText);
        try {
            await fetch(`http://localhost:3000/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ todo: updatedTodo })
            });
            fetchData();
            window.alert('This task has been updated!');
        } catch (error) {
            console.error('Error updating todo:', error);
        
    }
}

async function deleteTodo(id) {
    try {
        await fetch(`http://localhost:3000/${id}`, {
            method: 'DELETE'
        });
        fetchData();
        window.alert('This task has been deleted!');

    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);
