
let switchIcon = document.querySelector(".switch-icon");
switchIcon.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    switchIcon.src = "images/icon-moon.svg";
  } else {
    switchIcon.src = "images/icon-sun.svg";
  }
});


const input = document.getElementById("new-task");
const taskList = document.querySelector(".task-list");
const buttonsCategory = document.querySelectorAll(".button-category");


input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const taskText = input.value.trim();
    if (taskText === "") return;


    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const circle = document.createElement("span");
    circle.classList.add("circle", "unselected");

    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    const crossImg=document.createElement("img");
    crossImg.src="images/icon-cross.svg";
    crossImg.classList.add("cross-img");
    crossImg.addEventListener("click", () => {
  const taskItem = crossImg.closest(".task-item");
  if (taskItem) {
    taskItem.remove();
    updateTask(); 
  }
});
    taskItem.appendChild(circle);
    taskItem.appendChild(textSpan);
    taskItem.appendChild(crossImg);
    taskList.prepend(taskItem);
    input.value = "";

    
    circle.addEventListener("click", () => {
      circle.classList.toggle("selected");
      circle.classList.toggle("unselected");
      textSpan.classList.toggle("completed-text"); 
    });
  }
updateTask()
});


buttonsCategory.forEach((button) => {
  button.addEventListener("click", () => {
   
    buttonsCategory.forEach((btn) =>
      btn.classList.remove("buttonselected")
    );
    button.classList.add("buttonselected");

    
    const allTasks = document.querySelectorAll(".task-item");

    allTasks.forEach((task) => {
      const circle = task.querySelector(".circle");

      const isCompleted = circle.classList.contains("selected");
      const isActive = circle.classList.contains("unselected");
    updateTask()
      if (button.classList.contains("completed")) {
        task.style.display = isCompleted ? "flex" : "none";
      } else if (button.classList.contains("active")) {
        task.style.display = isActive ? "flex" : "none";
      } else {
        
        task.style.display = "flex";
      }
    });
  });
});
function updateTask(){
  let taskCounter=document.querySelector(".task-counter");
let tasks=document.querySelectorAll(".task-item .circle.unselected");
  taskCounter.textContent = `${tasks.length} tasks to do`;
}
let clearButton=document.querySelector(".clear-button");
clearButton.addEventListener("click",()=>{
    let completedTasks=document.querySelectorAll(".task-item .circle.selected");
    completedTasks.forEach((circle) =>{
        const taskItem = circle.closest(".task-item");
         if (taskItem) {
      taskItem.remove();
    }
    })
})

