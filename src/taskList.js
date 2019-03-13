// each list item is created with a delete button
// each list created has a submit button that deletes li (parent element)
const ulTag = document.getElementById("tasks")
const formTag = document.querySelector("form")
const inputId = document.getElementById("new-task-description")

formTag.addEventListener('submit', addItemToList)

ulTag.addEventListener('click', deleteItemFromList)

function deleteItemFromList(event) {
    event.preventDefault();
    if (event.target.nodeName === "BUTTON"){
        event.target.parentElement.remove()
    }
    // debugger
}


function addItemToList(e){
    e.preventDefault();

    let inputValue = inputId.value;
    ulTag.innerHTML +=
    `<li>
      <div>${inputValue}</div>
      <button>X</button>
     </li>`
}






    // const liTags = document.querySelectorAll('li')

    // for(let i = 0; i < liTags.length; i++){
    //     liTags[i].lastElementChild.addEventListener('click', function(e){
    //         alert('clicked');
    //         e.preventDefault();
    //         // const list = buttonTag.parentNode
    //         // const ul = list.parentNode
    //         // ul.removeChild(list)
    //     })
    // }




// deletes parent of li button

// function deleteNameFromList(e){
//     e.preventDefualt();
//
// }
