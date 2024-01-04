let form = document.querySelector("#form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let select = document.querySelector("#select");
let ul = document.querySelector("#ul");
let button = document.querySelector("#button");
let relation = document.querySelector("#relation");
// let li = document.querySelector("#li");



// button.addEventListener("click", () => {
//     document.body.style.backgroundColor = "pink";
//     document.body.style.color = "green";
//     console.log(document.body)
// })

let newbutton = document.querySelector("#button")
ul = document.querySelector("#ul")

const addlist = (e) => {
    e.preventDefault();
    let myname = document.createElement("li");
    myname.innerText = name.value;
    myname.className = "list-group-item  rounded-0 my-1 py-2";
    ul.appendChild(myname);
    // console.log(myname);

    let myemail = document.createElement("li");
    myemail.innerText = email.value;
    myemail.className = "list-group-item  rounded-0 my-1 py-2";
    ul.appendChild(myemail);
    // console.log(myemail);

    let mynumber = document.createElement("li");
    mynumber.innerText = number.value;
    mynumber.className = "list-group-item  rounded-0 my-1 py-2";
    ul.appendChild(mynumber);
    // console.log(mynumber);

    let myrelation = document.createElement("li");
    myrelation.innerText = relation.value;
    myrelation.className = "list-group-item  rounded-0 my-1 py-2";
    ul.appendChild(myrelation);
    // console.log(myrelation);

    let deletbtn = document.createElement("button");
    deletbtn.innerText = "delete";
    deletbtn.className = "btn btn-danger border-0 "
    ul.appendChild(deletbtn);
    // console.log(deletbtn)

    let deletcall = document.createElement("button");
    deletcall.innerText = "Call";
    deletcall.className = "btn btn-info border-0 mx-2"
    ul.appendChild(deletcall);
    // console.log(deletbtn)

    let deletwhat = document.createElement("button");
    deletwhat.innerText = "Whatsapp";

    deletwhat.className = "btn btn-success border-0 "
    ul.appendChild(deletwhat);
    // console.log(deletbtn)

    form.reset()
};
form.addEventListener("submit", addlist);


const deleteform = (e) => {
    if (e.target.className.includes("btn-danger")) {
        let newli = e.target.parentElement;

        if (window.confirm("Are you sure?")) {
            ul.remove(newli);
        }
    }
}
ul.addEventListener("click", deleteform);

