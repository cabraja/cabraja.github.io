window.onscroll = function() {
    const menu = document.getElementById("nav")
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 600 && menu.style.left !== "0vw") {
      document.getElementById("menu").style.backgroundColor = "rgba(98, 158, 248, 0.795)";
    } else {
      document.getElementById("menu").style.backgroundColor = "transparent";
    }
  
  }


function moveMenu(){
    const menu = document.getElementById("nav")
    const bar1 = document.getElementById("bar1")
    const bar2 = document.getElementById("bar2")
    const bar3 = document.getElementById("bar3")

    if(menu.style.left === "0vw"){

      menu.style.left = "-100vw"
      bar1.style.transform = "rotate(180deg)"
      bar2.style.opacity = "1"
      bar3.style.transform = "rotate(-180deg)"

    }else{
      
      menu.style.left = "0vw"
      bar1.style.transform = "rotate(-400deg)"
      bar2.style.opacity = "0"
      bar3.style.transform = "rotate(400deg)"

    }
  }