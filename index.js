document.querySelector("form").addEventListener("submit", addJobList);

var jobArray= JSON.parse(localStorage.getItem("Job"))||[];

function addJobList(){
    event.preventDefault();
    
    var name=document.getElementById("name").value ;
    var email= document.getElementById("email").value;
    var role= document.getElementById("role").value;
    var salary= document.getElementById("salary").value;

    var newJob = {name:name, email:email, role:role, salary:salary};
    jobArray.push(newJob);

    localStorage.setItem("Job",JSON.stringify(jobArray));

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("role").value="";
    document.getElementById("salary").value="";
}