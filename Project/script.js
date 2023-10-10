console.log("working good");
//API
const API = "https://65237389f43b179384156c37.mockapi.io/users";
// selecting the dom elements
const studentList = document.querySelector("#student-list");
const studentForm = document.querySelector("#student-form");
let editId;
//creating a form
studentForm.innerHTML += `
<form class="form-data">
<h2 class="head">Student Form</h2>
<input
type="text"
name = "name"
required
value= ""
placeholder ="Student Name"
class="input-text"
id="input-name"
/>

<input
type="text"
name = "batch"
required
value= ""
placeholder ="Student Batch"
class="input-text"
id="input-batch"
/>

<input
type="text"
name = "age"
required
value= ""
placeholder ="Student Age"
class="input-text"
id="input-age"
/>
<div>
<button 
type="submit" 
id="add-btn"
class="btn"
>Add students</button>

<button 
type="submit" 
id="update-btn"
class="btn"
>Update students</button>
</div>
</form>
`;
const updateBtn = document.querySelector("#update-btn");
const addBtn = document.querySelector("#add-btn");
const inputName = document.querySelector("#input-name");
const inputBatch = document.querySelector("#input-batch");
const inputAge = document.querySelector("#input-age");
updateBtn.style.display = "none";

// CRUD -> CREATE, READ, UPDATE, DELETE
// Reading all data (GET)
function ReadAllData() {
  fetch(API, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => renderAllStudents(data))
    .catch((err) => console.log("Error", err));
}
ReadAllData();

function createData(newStudent) {
  //Create(POST)
  fetch(API, {
    method: "POST",
    body: JSON.stringify(newStudent),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => renderStudents(data))
    .then(() => {
      inputName.value = "";
      inputBatch.value = "";
      inputAge.value = "";
    })
    .catch((err) => console.log(err));
}

//updateData
function updateData(updatedStudent) {
  fetch(`${API}/${editId}`, {
    method: "PUT",
    body: JSON.stringify(updatedStudent),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(() => location.reload())
    .catch((err) => console.log("Error", err));
}

//Delete(Delete)
function deleteData(id, parent) {
  fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => parent.parentNode.remove())
    .catch((err) => console.log(err));
}

// render students data
function renderStudents(stud) {
  const studentDiv = document.createElement("div");
  studentDiv.className = "card";
  studentDiv.innerHTML += `
 <h2>${stud.name}</h2>
 <p> <span class="span-h">Batch</span> -<span id="batch-val" >${stud.batch}</span ></p>
  <p><span class="span-h">Age</span> -<span id="age-val">${stud.age}</span></p>
 <div class="btn-group">
 <button data-id= ${stud.id} id = "edit-btn"class=" btn">Edit</button>
 <button data-id= ${stud.id} id = "del-btn"class=" btn">Delete</button>
 </div>
 
 `;
  studentList.append(studentDiv);
}

// render array of students card
function renderAllStudents(students) {
  students.forEach((student) => {
    renderStudents(student);
  });
}

studentForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id == "add-btn") {
    const newStudent = {
      name: inputName.value,
      batch: inputBatch.value,
      age: inputAge.value,
    };
    createData(newStudent);
  }

  if (e.target.id == "update-btn") {
    const updatedStudent = {
      name: inputName.value,
      batch: inputBatch.value,
      age: inputAge.value,
    };
    updateData(updatedStudent);
  }
});

function populateStudentForm(parent) {
  const editableParent = parent.parentNode;
  inputName.value = editableParent.querySelector("h2").textContent;
  inputBatch.value = editableParent.querySelector("#batch-val").textContent;
  inputAge.value = editableParent.querySelector("#age-val").textContent;
  updateBtn.style.display = "block";
  addBtn.style.display = "none";
}

studentList.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  const parent = event.target.parentNode;
  if (event.target.id === "del-btn") {
    deleteData(id, parent);
  }
  if (event.target.id === "edit-btn") {
    populateStudentForm(parent);
    editId = id;
  }
});
