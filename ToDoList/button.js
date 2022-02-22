let icon = document.querySelector('#icon-check')
icon.addEventListener("click", btnCheck);
let counter=1

function btnCheck(){
    counter++
    if(counter%2==0){
          icon.className = "fa-regular fa-circle-check btn-icon"
    }
    else{
        icon.className = "fa-regular fa-circle"
    }

}

//text-box id sine sahip olan elementin içindeki değerleri al
let textBoxValue = document.querySelector('#text-box').value
//add butonunu sec
let btnAdd = document.querySelector('#button-addon2')
//yeni bir li elementi oluştur
let Li_DOM = document.createElement('li')
//add butonuna tıklandıgında addList fonksiyonunu çalıştır
btnAdd.addEventListener("click", addList);

function addList(){
    //texBoxValue boş veya null değilse
    if(textBoxValue != "" && textBoxValue != null){
         Li_DOM.innerHTML = textBoxValue
    }
    else{
     //toast
    }

}