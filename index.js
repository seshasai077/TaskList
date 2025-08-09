////////////   form ////////////////////
let formGrp = document.querySelector(`#form`)
formGrp.addEventListener(`submit` , function(e){
  
    //accesd the form and need to access the input to add into the local storage
    let taskName = document.querySelector(`#form-input`)
    let taskValue = taskName.value
     if (taskValue === ''){
         alert(`enter Task`)
         return ;
    }
    // localStorage.setItem(`task` , taskValue) if i say it overwrite the eolement which i stored
    // so we must want to make like array first there will be a stored data if i add new item it must add to existing stored item in the array
    let storedData = localStorage.getItem(`tasks`)
    let arr = [];
    if (storedData == null){
           arr = [];
    }
    else{
         arr = JSON.parse(storedData)
    }
    arr.unshift(taskValue);
    localStorage.setItem(`tasks` , JSON.stringify(arr) )
})
//////////////////////////////// task list ////////////////////////////////////////////////
let list = document.querySelector(`#list-item`)
let storedData = localStorage.getItem(`tasks`)
    let arr = [];
    if (storedData == null){
           arr = [];
    }
    else{
         arr = JSON.parse(storedData)
    }
   if (arr.length !== 0) {
    let eachListItem = ``;
    for (let task of arr) {
        eachListItem += `<li class="list-group-item list-group-action bg-warning text-white">
                            <span>${task}</span>
                            <button class="close">
                                <i class="fa fa-times-circle"></i>
                            </button>
                         </li>`;
    }
    list.innerHTML = eachListItem;
}
///////////////////////////////////// remove task list button ////////////////////////////////////////////
let listEle = document.querySelector(`#list-item`)
listEle.addEventListener(`click` , function(event){
           let clicked = event.target
           if (clicked.classList.contains(`fa-times-circle`)){
               let li = clicked.parentElement.parentElement
                let taskTest = li.querySelector(`span`).innerText;
                let storedData = localStorage.getItem("tasks");
                let arr = storedData ? JSON.parse(storedData) : [];
                arr = arr.filter(task => task !== taskTest)
                localStorage.setItem("tasks", JSON.stringify(arr));
                 li.remove()                                     //how to access the span
                                                                             //clicked → your <i class="fa fa-times-circle"> icon.
                                                                             // clicked.parentElement → the <button>.
                                                                             // clicked.parentElement.parentElement → the <li>.
                                                                             // li.querySelector('span') → the <span> with the task text.
               

           }
})