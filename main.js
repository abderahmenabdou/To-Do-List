const task = document.getElementById("task");
const add = document.getElementById("add");
const result = document.querySelector(".result")



let arrayData;
if(window.localStorage.getItem("tasks")){
    arrayData = JSON.parse(window.localStorage.getItem("tasks"))
}else{
    arrayData = []
}


// Creat Task
function creatTask(){
    const tasks = task.value;
    if(task.value !== ""){
        if(changeMood === "add"){
            arrayData.push(tasks);
        }else{
            arrayData[upData] = tasks
            changeMood = "add";
            add.innerHTML = `<i class="fa-solid fa-plus"></i>`
        }
    }else{
        alert("Enter Your Name Task")
    }
    
    // Save In Local Storage
    window.localStorage.setItem("tasks", JSON.stringify(arrayData))

    ClearData()
    shwoData()
}

// Clear Data
function ClearData(){
    task.value = ""
}

// Show Data
function shwoData(){
    let content ="";
    for(let i = 0; i < arrayData.length; i++){
        content += `
        <div class="task">
                <h3>${arrayData[i]}</h3>
                <div class="icon">
                    <i onclick="updateTask(${i})" class="fa-regular fa-pen-to-square"></i>
                    <i onclick="deleteTask(${i})" class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        `
    }
    result.innerHTML = content
}

shwoData()

// Delete Task
function deleteTask(i){
    arrayData.splice(i,1);
    window.localStorage.setItem("tasks", JSON.stringify(arrayData))

    shwoData()
}

// Update Task
let changeMood = "add"
let upData;
function updateTask(i){
    task.value = arrayData[i]
    changeMood = "update"
    add.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`

    upData = i;
}