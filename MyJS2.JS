
//declare variables for the tab content, tab buttons, Anchor tags and toggle button.
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");
let tabButton1 = document.getElementById("tabButton1");
let tabButton2 = document.getElementById("tabButton2");
let tabButton3 = document.getElementById("tabButton3");
let welcomeAnchor1 = document.getElementById('welcomeAnchor1')
let welcomeAnchor2 = document.getElementById('welcomeAnchor2')
let welcomeAnchor3 = document.getElementById('welcomeAnchor3')
let tog = document.getElementById("toggle")
let colors = ["#6e34eb", "#1dd1b3", "#1A1A1B", "#272729" ]
let themeContents = [welcomeAnchor1, welcomeAnchor2, welcomeAnchor3, tabContainer]


//declare showPanel(0) first to show the first panel when the website loads.

showPanel()

tabButton1.addEventListener("click" , () => {
    tab1.style.transform = "translateX(0%)";
    tab2.style.transform = "translateX(-100%)";
    tab3.style.transform = "translateX(-100%)";
    tabButton1.style.color = "#F3F1E2"
    tabButton2.style.color = "#000";
    tabButton3.style.color = "#000";
})

tabButton2.addEventListener("click" , () => {
    tab1.style.transform = "translateX(100%)";
    tab2.style.transform = "translateX(0%)";
    tab3.style.transform = "translateX(-100%)";
    tabButton1.style.color = '#000'
    tabButton2.style.color = "#F3F1E2";
    tabButton3.style.color = "#000";
})

tabButton3.addEventListener("click" , () => {
    tab1.style.transform = "translateX(100%)";
    tab2.style.transform = "translateX(100%)";
    tab3.style.transform = "translateX(0%)";
    tabButton1.style.color = '#000'
    tabButton2.style.color = "#000";
    tabButton3.style.color = "#F3F1E2";
})

// showPanel function to load the first tab on opening the website.

function showPanel() {

    tab1.style.transform = "translateX(0%)";
    tab2.style.transform = tab3.style.transform = "translateX(-100%)";
    tabButton1.style.color = "#F3F1E2"
    tabButton2.style.color = tabButton3.style.color = "#000";

}

tog.addEventListener('change', function() {

  if (this.checked) {

      //parts of the website that change colour in the themeContents array have theyre colour changed.
      document.getElementById("output").innerHTML = "Night Mode Off";
      document.body.style.background = "#6e34eb";
      for ( let i = 0; i < themeContents.length; i++){
          themeContents[i].style.background = "#1dd1b3"
      }

  } else {

      document.getElementById("output").innerHTML = "Night Mode On";
      document.body.style.background = "#1A1A1B";
      for ( let i = 0; i < themeContents.length; i++){
          themeContents[i].style.background = "#272729"
      }

  }

});
