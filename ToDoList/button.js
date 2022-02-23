// let icon = document.querySelector('#icon-check')
// let text = document.querySelector('#li-text').value
// icon.addEventListener("click", btnCheck)
let counter=1
function btnCheck(){
    counter++
    if(counter%2==0){
          icon.className = "fa-regular fa-circle-check btn-icon"
          //tıklanması durumunda ustunun cizilmesini sağlar
          let text = document.querySelector('li')
          text.style.textDecoration = "line-through"
    }
    else{
        icon.className = "fa-regular fa-circle"
        let textt = document.querySelector('li')
        textt.style.textDecoration = "none"
    }

}

function addList(){
    // text-box id sine sahip olan elementin içindeki değerleri al
    let textBoxValue = document.querySelector('#textbox').value
    let divLi =  document.querySelector("#divLi")
    
    if(textBoxValue != ""){
        let divcol1 = document.querySelector('#divcol1')
        let br = document.createElement('br')
        let br2 = document.createElement('br')
        let button = document.createElement('button')
        button.setAttribute("class", "btn-icon")
        button.onclick = btnCheck
        let i = document.createElement('i')
        i.classList.add("fa-regular", "fa-circle", "btn-icon")
        button.append(i)
        divcol1.append(button)
        divcol1.append(br)
        divcol1.append(br2)
        // yeni bir li elementi oluştur
        let Li_DOM = document.createElement('li') 
        let hr = document.createElement('hr')
        // yeni li ögesini divLi idsine sahip div içine koy
        divLi.append(Li_DOM) 
        Li_DOM.innerHTML = textBoxValue 
        divLi.append(hr)
    }
}
