// Write your JavaScript code here.
// Remember to pay attention to page loading!
//1
window.addEventListener("load", function(){
    console.log('window loaded');
    //2 window confirm event shuttle  is ready for takeoff
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    takeOffButton.addEventListener('click', function(){
     const confirmation =   window.confirm("Confirm the shuttle is ready for takeoff");
        if(confirmation === true){
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue"
            shuttleHeight.innerHTML = 10000
        }
    })
    
}) 

//3 
window.addEventListener("load", function(){
    let landing = document.getElementById("landing");
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    landing.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed"
        shuttleBackground.style.backgroundColor = "green"
        shuttleHeight.innerHTML = 0

    })
})
