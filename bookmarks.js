

var bookmarkArr = JSON.parse(localStorage.getItem("Bookmark"))||[];
displayBookmark();

function displayBookmark (){
    document.querySelector("tbody").textContent="";
   bookmarkArr.map(function(elem,idx){
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
        td5.textContent="Delete";
        td5.addEventListener("click",function(){
            deleteJob(idx);
        });

        tr.append(td1,td2,td3,td4,td5);

        document.querySelector("tbody").append(tr);
        
   })
}
function deleteJob(index){
  bookmarkArr.splice(index,1);
  localStorage.setItem("Bookmark",JSON.stringify(bookmarkArr));
  displayBookmark();
}