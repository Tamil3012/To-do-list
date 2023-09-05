let input = document.getElementById('input')
let btn = document.getElementById('btn')
let list = document.getElementById('list');

let todos = [];

btn.addEventListener('click',()=>{
    todos.push(input.value)
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerHTML = todo;
    list.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        para.style.textDecorationColor = 'white'
        para.style.textDecorationStyle = 'bolder'
        remove(todo)
    })

    para.addEventListener('dblclick',()=>{
        list.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
   let index = todos.indexOf(todo)
   if(index>-1)
    todos.splice(index,1)
}
