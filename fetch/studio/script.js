//TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (res) {
        res.json().then(function (data) {
            let astros = document.getElementById("container")
            //astros.innerHTML = data()

            for (let i = 0; i < data.length; i++) {
                let greenTrue = document.getElementById("green-true")
                if(data[i].active){
                    greenTrue.style.color = "green";
                }
                astros.innerHTML +=`
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${data[i].firstName}</h3>
                            <ul>
                                <li>Hours in space: ${data[i].hoursInSpace}</li>
                                <li id="green-true">Active: ${data[i].active}</li>
                                <li>Skills: ${data[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${data[i].picture}">
                    </div>`
            }
        
        })
    })
})