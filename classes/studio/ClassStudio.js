//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name
        this.mass = mass
        this.scores = scores
    }
    addScore(num) {
        let scoreSum = this.scores.push(num)
    }
    average() {
        let avgScore = 0;
        for (let i = 0; i < this.scores.length; i++) {
            avgScore += this.scores[i]
        }
        avgScore = avgScore / this.scores.length
        avgScore = Math.round(avgScore * 10) / 10
        return avgScore;
    }
    status() {
        if (this.average() >= 90) {
            return("Accepted");
        }
        else if (this.average() >= 80) {
           return("You are Reserve Canditate");
        } else if (this.average() >=70){
            return("You are a Probationary Canditate");
        } else {
            return("Rejection");
        } 
         
        }
        

}

// 90 and up - auto acceptance 
// 80 - 89 - Resereve canditates
// 70 -79 - probationary canditates
// below 70 - Rejection notice
let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
// bubbaBear.addScore(83);
// console.log(bubbaBear);
 console.log(bubbaBear.average());
console.log(bubbaBear.status());

// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.