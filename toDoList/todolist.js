
    // Function to retrieve tasks from localStorage
    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    // Function to save tasks to localStorage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to render tasks to the UI
    function renderTasks() {
        const taskList = document.getElementById('taskList');
        const tasks = getTasks();
        
        taskList.innerHTML = ''; // Clear existing list
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.text;
            
            if (task.completed) {
                li.classList.add('done');
            }
            
            // Add remove button to the task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '❌';
            removeBtn.className = 'remove-btn';
            removeBtn.addEventListener('click', function() {
                tasks.splice(tasks.indexOf(task), 1);
                saveTasks(tasks);
                renderTasks();
            });
            li.appendChild(removeBtn);
            
            
            // Add done button to the task
            const doneBtn = document.createElement('button');
            doneBtn.textContent = task.completed ? 'Undone' : 'Done';
            doneBtn.className = 'done-btn';
            doneBtn.addEventListener('click', function() {
              // Toggle the text of the button
    if (doneBtn.textContent === 'Done') {
      doneBtn.textContent = 'Undone';
      // You can also add additional styling or class changes here
  } else {
      doneBtn.textContent = 'Done';
      // Revert any styling or class changes if needed
  }
                task.completed = !task.completed;
                saveTasks(tasks);
                renderTasks();
            });
            li.appendChild(doneBtn);
            
            taskList.appendChild(li);
        });
    }

    // Function to add a new task
    function addTask() {
        const input = document.getElementById('taskInput');
        const taskText = input.value.trim();

        if (taskText !== '') {
            const tasks = getTasks();
            tasks.push({ text: taskText, completed: false });
            saveTasks(tasks);
            renderTasks();
            input.value = ''; // Clear input field
        }
    }

    // Initial rendering of tasks when the page loads
    renderTasks();

    // Event listener for Enter key
    document.getElementById('taskInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    