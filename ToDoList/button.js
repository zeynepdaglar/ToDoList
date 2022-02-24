//listeye yeni eleman eklemeyi sağlayan fonksiyon:
function addList(){
    // text-box id sine sahip olan elementin içindeki değerleri al
    let textBoxValue = document.querySelector('#textbox').value
    if(textBoxValue != ""){

        let ul_DOM = document.querySelector('#ul')
        let li_DOM = document.createElement('li')
        ul_DOM.append(li_DOM)

        let button_DOM = document.createElement('button')
        button_DOM.className = 'btn-icon'
        li_DOM.append(button_DOM)
        let i_DOM = document.createElement('i')
        i_DOM.classList.add("fa-regular", "fa-circle")
        button_DOM.append(i_DOM)

        let counter = 1
        //icona tıklandığında çalışıcak fonksiyon:
        button_DOM.onclick = function btnCheck(){
            counter++
            if(counter%2==0){
                  i_DOM.className = "fa-regular fa-circle-check btn-icon"
                  //tıklanması durumunda ustunun cizilmesini sağlar
                  // let text = document.querySelector('li')
                  // text.style.textDecoration = "line-through"
            }
            else{
                i_DOM.className = "fa-regular fa-circle"
                // let textt = document.querySelector('li')
                // textt.style.textDecoration = "none"
            }
        }

        li_DOM.append(textBoxValue)

        let hr_DOM = document.createElement('hr')
        ul_DOM.append(hr_DOM)
    }
}
