let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnCleanup= $('#btnCleanup')
let btnSort =$('#btnSort')
function addItem(){
    let listItem=$('<li>',{
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(() =>{
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
}
function clearDone(){
    console.log("ji")
    $('#ulTasks .done').remove()
}
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}
inpNewTask.keypress((e)=>
{
    if(e.which==13) addItem()

})
btnAdd.click(addItem)
btnReset.click(() => inpNewTask.val(''))
btnCleanup.click(clearDone)
btnSort.click(sortTasks)