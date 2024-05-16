import timer from "./clock"

setInterval(timer,1000)

let activity =  document.querySelector(".tabs-item_first")
activity.addEventListener("click", ()=>insertHTML("portfolio"))

let map =  document.querySelector(".tabs-item_second")
map.addEventListener("click", ()=>insertHTML("map"))

let clock = document.querySelector('.tabs-item_third')
clock.addEventListener("click", ()=>insertHTML("clock"))

let tabs = document.querySelectorAll(".tabs-item")


window.addEventListener("popstate", ()=>{
   render()
  })

let render = ()=>{
  let path = new URL(window.location.href).pathname
  if(path.slice(1)==="map"){
    getMap()
  }
  else if(path.slice(1)==="clock"){
    getClock()
  }
  else if(path.slice(1)==="portfolio"||path==="/"){
    getPortfolio()
  }
}


function getPortfolio(){
  document.getElementById("app").innerHTML = ``
  fetch("pages/portfolio.html")
  .then(res => res.text())
  .then(html => document.getElementById("app").innerHTML =html)
}
function getMap(){
  document.getElementById("app").innerHTML = ``
            const body = document.createElement('map-card');
          document.getElementById("app").appendChild(body);
}
function getClock(){
    document.getElementById("app").innerHTML = ``
    
}
function insertHTML(url){
    if(url=="portfolio"){
      window.history.pushState("portfolio","","portfolio")
      getPortfolio()
     
      
    }
    else if(url=="clock"){
        window.history.pushState("clock","","clock")
        getClock()
      }
    else{
      window.history.pushState("map","","map")
      getMap()
      
    }
    tabs.forEach(i=>i.classList.contains(new URL(window.location.href).pathname.slice(1))
    ?i.style.background='lightgrey'
    : i.style.background='white'
)
    
}
  render()
