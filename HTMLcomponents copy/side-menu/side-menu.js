
document.querySelectorAll(".menu-elem-heading").forEach(item => {
    item.addEventListener('click',reduct )
})

document.querySelector(".menu-elem-heading").addEventListener("click", reduct)
function reduct(ele){
 



    
    let m=ele.currentTarget.nextElementSibling
    m.classList.toggle("hide")
    but = ele.currentTarget.querySelector("img")
    if (m.classList.contains("hide")){
      
      but.src="/HTMLcomponents/side-menu/favicons/plus.svg"
        
    }
    else
    {
    but.src="/HTMLcomponents/side-menu/favicons/minus.svg"
       
}
    

    if (m.style.maxHeight) {

        m.style.maxHeight = null;
      } else {
        m.style.maxHeight = m.scrollHeight + "px";
      }

    
  //  alert("hello")
}

