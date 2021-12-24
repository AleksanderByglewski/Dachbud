
document.querySelectorAll(".menu-elem-heading").forEach(item => {
    item.addEventListener('click',reduct )
})

document.querySelector(".menu-elem-heading").addEventListener("click", reduct)
function reduct(ele){
 
    let m=ele.currentTarget.nextElementSibling
    
    m.classList.toggle("hide")
    but = ele.currentTarget.querySelector("img")
    if (m.classList.contains("hide")){
    but.src="./favicons/plus.svg"
    }
    else{
        but.src="./favicons/minus.svg"
    }
  //  alert("hello")
}

