let items = [
    {period:"Weekdays",time:"22:00",beforeMin:"30"}
]
const date = new Date()
const currentTime = date.getHours()+':'+date.getMinutes()

function addNewTime(newObj){
    items.push(newObj)
    console.log(items)
}

const form = document.querySelector(".js-form")
form.addEventListener('submit',e=>{
    e.preventDefault();
    const timeValue = document.querySelector('#time')
    const beforeMinValue = document.querySelector('#beforeMin')
    const periodValue = document.querySelector('#period')

    const time = timeValue.value.trim()
    const beforeMin = beforeMinValue.value.trim()
    const period = periodValue.value.trim()
    if(time !=='' && beforeMin >= 0){
        const reqObj = {time,beforeMin,period}
        addNewTime(reqObj);
        time.value = ""
        beforeMin.value = ""
        renderResult(reqObj)
    }
})

function renderResult(myObj){
    const list = document.querySelector('#lists')

    const node = document.createElement("li")

    node.innerHTML = `
        ${myObj.period}, ${myObj.time}, alarm before ${myObj.beforeMin} minute <span id="remove" style="color: red">remove</span>
    `
    list.append(node)
}

function renderDefaultItems(){
    document.addEventListener('DOMContentLoaded', () => {
        // const ref = localStorage.getItem('todoItemsRef');
        // if () {
        // todoItems = JSON.parse(ref);
        items.forEach(t => {
            renderResult(t);
        });
        // }
    });
}

document.querySelector("#remove").addEventListener("click",(res)=>{
    console.log(res)
})

renderDefaultItems()