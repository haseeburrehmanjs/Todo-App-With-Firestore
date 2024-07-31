let form = document.getElementById('form')
let todo = document.getElementById('input')
let list = document.getElementById('list')

// here is empty array for push todos
let array = []

// todos render in html screen
function renderScreen(){
    list.innerHTML = ''
    array.map(item => {
        list.innerHTML += `
    <li class="text-light d-flex justify-content-between align-items-center">${item.values}
    <div>
    <button id="delete_btn"><i class="fa-solid fa-delete-left"></i></button>
    <button id="edit_btn"><i class="fa-solid fa-pen-to-square"></i></button>
    </div>
    </li>`
    })
}
// renderScreen()

form.addEventListener('submit', event => {
    event.preventDefault()

    if(todo.value === ''){
        alert('Enter todo first')
    }else {
        array.push({
            values: todo.value
        })
        console.log(array);
        renderScreen()
        todo.value = ''
    }
})