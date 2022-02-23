let icon = document.querySelector('#icon-check')
let text = document.querySelector('#li-text').value
icon.addEventListener("click", btnCheck)
let counter=1

function btnCheck(){
    counter++
    if(counter%2==0){
          icon.className = "fa-regular fa-circle-check btn-icon"
          //tıklanması durumunda ustunun cizilmesini sağlar
          //text.style.textDecoration = "line-through"
    }
    else{
        icon.className = "fa-regular fa-circle"
    }

}

function addList(){
    //text-box id sine sahip olan elementin içindeki değerleri al
    let textBoxValue = document.querySelector('#textbox').value
    // if(textBoxValue != ""){
        //yeni bir li elementi oluştur
        let Li_DOM = document.createElement('li')
        //yeni li ögesini divLi idsine sahip div içine koy
        document.querySelector("#divLi").append(Li_DOM)
        Li_DOM.innerHTML = textBoxValue
      
    // }
}
