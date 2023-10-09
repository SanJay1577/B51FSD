console.log("working good");
//API
const API = "https://65237389f43b179384156c37.mockapi.io/users";
// selecting the dom elements
const studentList = document.querySelector("#student-list");
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

//Update (PUT)

//Create(POST)

//Delete(Delete)
function deleteData(id, parent) {
  fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => parent.remove())
    .catch((err) => console.log(err));
}

// render students data
function renderStudents(stud) {
  const studentDiv = document.createElement("div");
  studentDiv.className = "card";
  studentDiv.innerHTML += `
 <h2>${stud.name}</h2>
 <p><span>Batch</span> - ${stud.batch}</p>
 <p><span>Age</span> - ${stud.age}</p>
 <button data-id= ${stud.id} class="del-btn">Delete</button>
 `;
  studentList.append(studentDiv);
}

// render array of students card
function renderAllStudents(students) {
  students.forEach((student) => {
    renderStudents(student);
  });
}

studentList.addEventListener("click", (event) => {
  if (event.target.className === "del-btn") {
    const id = event.target.dataset.id;
    const parent = event.target.parentNode;
    deleteData(id, parent);
  }
});
