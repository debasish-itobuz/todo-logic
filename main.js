const input = document.querySelector('#input')
const output = document.querySelector('#output')
const addBtn = document.querySelector('#btn')
const updateBtn = document.querySelector('#updateBtn')
const task = document.querySelector('#task')
let arr = []

let tempVal = null

function delTask(e) {
    // console.log(e)
    // console.log(e.target.parentNode);
    const op = e.target.parentNode;//child
    const opParent = op.parentNode;//parent

    // console.log(op, opParent);
    opParent.removeChild(op)

    // arr = arr.filter((item)=> item !== e.target.parentNode.childNodes[0].innerText)
    const index = arr.findIndex((item)=> item === e.target.parentNode.childNodes[0].innerText)
    arr.splice(index,1)
    // console.log(index)
    console.log(arr)

}

function editTask(e) {
    const taskVal = e.target.parentElement.childNodes[0].innerText
    tempVal = e.target.parentElement.childNodes[0]
    // console.log(e)
    // console.log(e.target.parentElement.childNodes[0].innerText);
    input.value = taskVal;
}

function add() {

    const inputVal = input.value.trim().toLowerCase();
    if (inputVal !== '' && !arr.includes(inputVal)) {
        const outputDiv = document.createElement('div')
        outputDiv.setAttribute('class', 'flex gap-5 my-3')
        const textValue = document.createElement('h3')
        textValue.setAttribute('class', 'textValue')

        textValue.innerHTML = inputVal

        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'delTask')
        delBtn.setAttribute('onclick', 'delTask(event)')
        delBtn.innerText = 'Delete'

        const editBtn = document.createElement('button')
        editBtn.setAttribute('class', 'editTask')
        editBtn.setAttribute('onclick', 'editTask(event)')
        editBtn.innerText = 'Edit'

        outputDiv.appendChild(textValue)
        outputDiv.appendChild(delBtn)
        outputDiv.appendChild(editBtn)
        output.appendChild(outputDiv)
        arr.push(inputVal)
    }
    input.value = ""
    console.log(arr)
}

addBtn.addEventListener('click', () => {
    add();
})

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') add()
})

updateBtn.addEventListener('click', () => {
    if (tempVal) {
        const index = arr.findIndex((item)=> item === tempVal.innerText)
        tempVal.innerText = input.value;
        arr[index] = input.value
        input.value = ''
        tempVal = null
        console.log(arr)
    }
})


