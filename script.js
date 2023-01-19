function loadCalendarElements(month, year)
{

}


function handleMouseMove(e)
{
  console.log("mouse move");

  const {currentTarget: target} = e;
  const rect=target.getBoundingClientRect(),
  x=e.clientX-rect.left,
  y=e.clientY-rect.top;

  target.style.setProperty("--mouse-x", `${x}px`)
  target.style.setProperty("--mouse-y", `${y}px`)

}

window.onload=function(){
  const days = 30;
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const startingDay="Mon";

  let weekCount=0;
  for (i=0; i<=days; i++)
  {
    let j = i+1
    let template = `<div class="calendarElement" id="${j}"> ${j}<br/>${week[i-7*weekCount]} </div>`;
    if(week[i-7*weekCount]==="Sun")
    {
      weekCount+=1;
    }
    calendar.innerHTML=calendar.innerHTML+template;


    let elem = document.getElementById(j);
    console.log(elem);


    if (Math.random()>.8)
    {

      let color="linear-gradient(45deg, #f0f, #5dd)";
      elem.style.background=color;
      elem.style.color="#000"
    }

  }
  for (const element of document.getElementsByClassName("calendarElement")){
    console.log("mouse move");
    element.onmousemove=e=>handleMouseMove(e);

  }
  
}

let w = window.innerWidth;
var targetObj={w};
var targetProxy = new Proxy(targetObj, {
  set: function (target, key, value) {
        console.log("a");
      return true;
  }
});
