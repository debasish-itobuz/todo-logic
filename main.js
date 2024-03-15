const input = document.querySelector('#input')
const output = document.querySelector('#output')
const addBtn = document.querySelector('#btn')
const updateBtn = document.querySelector('#updateBtn')
const task = document.querySelector('#task')

let tempVal = null

function delTask(e){
    // console.log(e)
    // console.log(e.target.parentNode);
    const op = e.target.parentNode;//child
    const opParent = op.parentNode;//parent

    console.log(op, opParent);
    opParent.removeChild(op)

}

function editTask(e)
{
   const taskVal = e.target.parentElement.childNodes[0].innerText
   tempVal = e.target.parentElement.childNodes[0]
    // console.log(e)
    // console.log(e.target.parentElement.childNodes[0].innerText);
    input.value= taskVal;
}

addBtn.addEventListener('click', ()=>{
    const inputVal = input.value;
    const outputDiv = document.createElement('div')
    outputDiv.setAttribute('class','outputDiv')
    const textValue = document.createElement('h3')
    textValue.setAttribute('class','textValue')

    textValue.innerHTML = inputVal

    const delBtn = document.createElement('button')
    delBtn.setAttribute('class','delTask')
    delBtn.setAttribute('onclick','delTask(event)')
    delBtn.innerText = 'Delete'

    const editBtn = document.createElement('button')
    editBtn.setAttribute('class','editTask')
    editBtn.setAttribute('onclick','editTask(event)')
    editBtn.innerText = 'Edit'

    outputDiv.appendChild(textValue)
    outputDiv.appendChild(delBtn)
    outputDiv.appendChild(editBtn)
    output.appendChild(outputDiv)
    input.value=""
})

updateBtn.addEventListener('click', ()=>{
    if(tempVal){
    tempVal.innerText = input.value;
    input.value = ''
    tempVal = null
    }
})


