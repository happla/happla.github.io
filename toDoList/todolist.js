function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();
  if (task !== "") {
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = task;
    
    // Add remove button to the task
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", function() {
      li.remove();
    });
    li.appendChild(removeBtn);
    
    // Add done button to the task
    var doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "done-btn";
    doneBtn.addEventListener("click", function() {
      li.classList.toggle("done");
    });
    li.appendChild(doneBtn);
    
    ul.appendChild(li);
    input.value = "";
  }
}

document.getElementById("taskInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
