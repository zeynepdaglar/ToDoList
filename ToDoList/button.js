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
    let divLi =  document.querySelector("#divLi")
    if(textBoxValue != ""){
        //yeni bir li elementi oluştur
        let Li_DOM = document.createElement('li')
        let br = document.createElement('br')
        let hr = document.createElement('hr')
        //yeni li ögesini divLi idsine sahip div içine koy
        divLi.append(br)
        divLi.append(hr)
        divLi.append(Li_DOM)
        Li_DOM.innerHTML = textBoxValue
      
    }
}
