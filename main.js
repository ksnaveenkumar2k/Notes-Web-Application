// selecting popupbox - overlay - button ----

var popupoverlay = document.querySelector(".pop-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbtn = document.getElementById("add-popup-btn")

addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display ="block"
    popupbox.style.display ="block"
})

// selecting cancel button---->

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display ="none"
    popupbox.style.display ="none"
})

// selecting content ---->

var container = document.querySelector(".main")
var addbook = document.getElementById("add-note")
var booktittleinput = document.getElementById("note-head-input")
var bookauthor = document.getElementById("note-tittle-input")
var bookdescription = document.getElementById("note-description") 

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","main")

    div.innerHTML =`<div class="main">
    <div class='card mt-2 bg-light'>
    <h5 class='card-header'>${booktittleinput.value}</h5>
      <div class='card-body'>
        <h5 class='card-title'>${bookauthor.value}</h5>
        <p class='card-text' style='text-align: justify;'>
          ${bookdescription.value}
        </p>
       <button class='btn btn-outline-danger' onclick='del(event)'>Delete</button>
      </div>
      </div>
      </div>`
    container.append(div)
    popupoverlay.style.display ="none"
    popupbox.style.display ="none"
})



// delete book--->

function del(event){
  const parentContainer = event.target.parentNode.parentElement;
  parentContainer.remove()
}



