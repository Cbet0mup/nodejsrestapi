const myForm = document.getElementById('myForm');
const input = document.getElementById('username');
const output = document.getElementById('output');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //let text = input.
    console.log("Form has been submitted!")
    console.log(input.value)
    output.innerText = input.value;
    input.value = "";
})