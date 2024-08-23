var selectedRow = null;

//swho alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(()=> document.querySelector(".alert").remove(), 3000);
}
//clear all fields
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value ="";
    document.querySelector("#rollno").value = "";
}
//add data

document.querySelector("#student-form").addEventListener("submit", (e)=>{
    e.preventDefault();

    //get form values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;

    //validate

    if(firstName == "" || lastName == "" || rollNo ==""){
        showAlert("Please fill in all fields", "danger")
    } else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createComment("tr");

            row.innerHTML = '
             <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
             <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
             <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            
            ';
        }

});

//delete data

document.querySelector("#student-list").addEventListener("click", (e)=>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("student Data Deleted", "danger");
    }
})