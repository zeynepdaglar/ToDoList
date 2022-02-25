function addList(){
    let textBoxValue = document.querySelector('#textbox').value
  
    if(textBoxValue != ""){

        let ul_DOM = document.querySelector('#ul')
        let li_DOM = document.createElement('li')
        ul_DOM.append(li_DOM)

        let button_DOM = document.createElement('button')
        button_DOM.classList.add("btn-icon")
        li_DOM.append(button_DOM)
        let i_DOM = document.createElement('i')
        i_DOM.classList.add("fa-regular", "fa-circle")
        button_DOM.append(i_DOM)

        let counter = 1
        button_DOM.onclick = function btnCheck(){
            counter++
            if(counter%2==0){
                  i_DOM.classList.add("fa-regular", "fa-circle-check")
                  li_DOM.style.color='grey';            
                }
            else{
                i_DOM.classList.add("fa-regular", "fa-circle")
                li_DOM.style.color='black';
            }
        }

        let buttonDelete_DOM = document.createElement('button')
        buttonDelete_DOM.classList.add("btn-icon", "btn-delete")
        li_DOM.append(buttonDelete_DOM)
        
        buttonDelete_DOM.onclick = function deleteItem(p){
            //bir üst elemana ulaşır
            let parent =buttonDelete_DOM.parentNode
            console.log(parent)
            parent.remove()
        }

        let deleteIcon = document.createElement('i')
        deleteIcon.classList.add("fa-regular", "fa-circle-xmark")
        buttonDelete_DOM.append(deleteIcon)

        li_DOM.append(textBoxValue)
        let hr_DOM = document.createElement('hr')
        li_DOM.append(hr_DOM)
        document.querySelector('#textbox').value =""
    }
}

function deleteAll(){
    //tüm li elementlerini getirir
    let  val = document.getElementsByTagName("li");
    if(val !=null){
        while(val.length > 0){
            console.log(val[0]);
            val[0].remove();
        }
    }
}
