//ARRAY METHODS(COLLECTIONS IN JAVA)

var employees = [
    {
        emp_id: "cap101",
        emp_name: "manu",
        emp_photo: "https://cdn.pixabay.com/photo/2016/04/21/01/31/handsome-1342457__340.jpg",
        emp_age: 20,
        emp_gender: "male",
        emp_company: "Capgemini",
        emp_salary: 30000,
        emp_designation: "Web developer",
        emp_doj: new Date('2005/05/05'),
        emp_location: "mandya",
        emp_education: "BE"
    },
    {
        emp_id: "cap102",
        emp_name: "Anu",
        emp_photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083386__340.jpg",
        emp_age: 20,
        emp_gender: "Female",
        emp_company: "Capgemini",
        emp_salary: 50000,
        emp_designation: "Full stack developer",
        emp_doj: new Date('2005/09/15'),
        emp_location: "Bangalore",
        emp_education: "BE"
    },
    {
        emp_id: "cap103",
        emp_name: "manu",
        emp_photo: "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638__340.png",
        emp_age: 20,
        emp_gender: "male",
        emp_company: "Capgemini",
        emp_salary: 30000,
        emp_designation: "Web developer",
        emp_doj: new Date('2005/05/05'),
        emp_location: "mandya",
        emp_education: "BE"
    },
    {
        emp_id: "cap104",
        emp_name: "saasha",
        emp_photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083386__340.jpg",
        emp_age: 20,
        emp_gender: "Female",
        emp_company: "Thomas Reuters",
        emp_salary: 30000,
        emp_designation: "Angular developer",
        emp_doj: new Date('2005/05/05'),
        emp_location: "Chennai",
        emp_education: "BE"
    
    }
];

var emp = [];
employees.forEach(empData => {
     emp.push(`<div class="card">
    <img src="${empData.emp_photo}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${empData.emp_name}</h5>
      <br>
      <span class="badge badge-success float-right">${empData.emp_id}</span>
       <br>
      <span class="badge badge-success float-right">${empData.emp_designation}</span>
       <br>
      <li class="list-group-item">Salary: ${empData.emp_salary}</li>
      <li class="list-group-item">Location: ${empData.emp_location}</li>
      <li class="list-group-item">Education: ${empData.emp_education}</li>
      <li class="list-group-item">Age: ${empData.emp_age}</li>
      <li class="list-group-item">Comapny: ${empData.emp_company}</li>
      <li class="list-group-item">Gender: ${empData.emp_gender}</li>
      <li class="list-group-item">Date of Joining: ${empData.emp_doj.toString()}</li>
      


      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `);
    
});

document.getElementById('template').innerHTML = emp;