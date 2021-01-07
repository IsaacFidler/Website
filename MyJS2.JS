let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");
let tabButton1 = document.getElementById("tabButton1");
let tabButton2 = document.getElementById("tabButton2");
let tabButton3 = document.getElementById("tabButton3");
let tabContainer = document.getElementById('tabContainer')
let welcomeAnchor1 = document.getElementById('welcomeAnchor1')
let welcomeAnchor2 = document.getElementById('welcomeAnchor2')
let welcomeAnchor3 = document.getElementById('welcomeAnchor3')
let tog = document.getElementById("toggle")

//declare showPanel(0) first to show the first panel when the website loads.

showPanel(0)

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

// function for shifting the different tab content depending on which tab is clicked.

function showPanel(panelIndex) {

    if (panelIndex == 0) {
        tab1.style.transform = "translateX(0%)";
        tab2.style.transform = "translateX(-100%)";
        tab3.style.transform = "translateX(-100%)";
        tabButton1.style.color = "#F3F1E2"
        tabButton2.style.color = "#000";
        tabButton3.style.color = "#000";
    }
}

tog.addEventListener('change', function() {
  if (this.checked) {
      document.getElementById("output").innerHTML = "Night Mode Off";
      document.body.style.background = "#6e34eb";
      tabContainer.style.background = "#1dd1b3";
      welcomeAnchor1.style.background= "#1dd1b3";
      welcomeAnchor2.style.background= "#1dd1b3";
      welcomeAnchor3.style.background= "#1dd1b3";

  } else {
      document.getElementById("output").innerHTML = "Night Mode On";
      document.body.style.background = "#1A1A1B";
      tabContainer.style.background = "#272729";
      welcomeAnchor1.style.background= "#272729";
      welcomeAnchor2.style.background= "#272729";
      welcomeAnchor3.style.background= "#272729";
      tog.style.background = '#111111';
  }
});
