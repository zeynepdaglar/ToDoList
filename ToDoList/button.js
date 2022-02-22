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

//text-box id sine sahip olan elementin içindeki değerleri al
let textBoxValue = document.querySelector('#textbox').value
//add butonunu sec
let btnAdd = document.querySelector('#button-addon2')
//add butonuna tıklandıgında addList fonksiyonunu çalıştır
btnAdd.addEventListener('click', addList)

window.onload=function addList(){
    if(textBoxValue != ""){
        //yeni bir li elementi oluştur
        let Li_DOM = document.createElement('li')
        //yeni li ögesini divLi idsine sahip div içine koy
        document.querySelector("#divLi").append(Li_DOM)
        Li_DOM.innerHTML = textBoxValue
        console.log(textBoxValue)
    }
}
