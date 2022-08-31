// Your code here
window.addEventListener("DOMContentLoaded", event=>{
    const addBtn = document.body.querySelector('#add')
    const shoppingList = document.body.querySelector('ul')
    const inputName = document.body.querySelector('#name')
    const inputType = document.body.querySelector('#type')
    addBtn.addEventListener("click", event =>{
        const liItem = document.createElement('li')
        const text = `${inputName.value}, ${inputType.value}`
        liItem.innerText = text
        liItem.setAttribute('data-type',inputType.value)
        shoppingList.appendChild(liItem)
    })
})
