var jobList= JSON.parse(localStorage.getItem("Job"))||[];
displayJobs(jobList);

function displayJobs(jobs) {
    document.querySelector("tbody").textContent="";
    jobs.map(function(elem){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.textContent=elem.name;
        var td2=document.createElement("td");
        td2.textContent=elem.email;
        var td3 =document.createElement("td");
        td3.textContent=elem.role;
        var td4 =document.createElement("td");
        td4.textContent=elem.salary+" LPA";

        var td5=document.createElement("td");
        td5.textContent= "bmark";
        td5.addEventListener("click",function(){
            if(td5.textContent==="Added"){
                alert("Already in bookmark")
            }
            else{
                bookmarkArr.push(elem);
                td5.textContent = "Added"
                localStorage.setItem("Bookmark",JSON.stringify(bookmarkArr));
            }
        });
        tr.append(td1,td2,td3,td4,td5);

        document.querySelector("tbody").append(tr);
        
    })
}

var bookmarkArr= JSON.parse(localStorage.getItem("Bookmark"))|| [];
// function addToBookmark (job){
    
//     bookmarkArr.push(job);

//     localStorage.setItem("Bookmark",JSON.stringify(bookmarkArr));

// }


document.getElementById("filterRole").addEventListener("change",filterFun);
function filterFun(){
var selectedRole=document.getElementById("filterRole").value;
var filteredArr=jobList.filter(function(elem){
    if(selectedRole===""){
        return 1;
    }
    else {
        return elem.role === selectedRole;
    }
})
displayJobs(filteredArr);
}

document.getElementById("sortName").addEventListener("change",sortByName);
function sortByName (){
    var selectedOrder=document.getElementById("sortName").value;
    if (selectedOrder==="ascending"){
        jobList=jobList.sort(function(a,b){
            if (a.name>b.name) return 1;
            if (a.name<b.name) return -1;
            else return 0;
        })

    }
    else if (selectedOrder==="descending"){
        jobList=jobList.sort(function(a,b){
            if (a.name>b.name) return -1;
            if (a.name<b.name) return 1;
            else return 0;
        })
    }
    displayJobs(jobList);
}

document.getElementById("sortSalary").addEventListener("change",sortBySalary);

function sortBySalary (){
    var selectedSalary=document.getElementById("sortSalary").value;
    if (selectedSalary==="lth"){
        jobList=jobList.sort(function(a,b){
           return a.salary-b.salary;
        })

    }
    else if (selectedSalary==="htl"){
        jobList=jobList.sort(function(a,b){
            return b.salary-a.salary;
        })
    }
    displayJobs(jobList);
}