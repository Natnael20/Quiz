//graph 
const xValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    }
  }
});

//pie chart
window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Quiz Statistics"
    },
    data: [{
      type: "pie",
      startAngle: 240,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        { y: 79.45, label: "Excellent" },
        { y: 7.31, label: "Good" },
        { y: 7.06, label: "Average" },
        { y: 4.91, label: "Bad" },
        { y: 1.26, label: "Fail" }
      ]
    }]
  });
  chart.render();

}


//home page play video
function playVideo() {
  var videoContainer = document.querySelector(".video-container");
  var iframe = document.getElementById("youtubeVideo");
  var playButton = document.querySelector(".play-button");

  //the play buttona and thumbnail will be removed
  playButton.style.display = "none";
  videoContainer.classList.add("hide-before");
  videoContainer.removeChild(videoContainer.childNodes[1]);

  // Update the z-index of the play button and start playing the video
  playButton.style.zIndex = 0;
  iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");
}

//instead of using a attribute, the button will take the user to the login page
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the button with ID "goToMain"
  document.getElementById("login").addEventListener("click", function () {
    // Redirect to main.html when the button is clicked
    window.location.href = "login.html";

  });
});

//instead of using a attribute, the button will take the user to the login page
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the button with ID "goToMain"
  document.getElementById("signin").addEventListener("click", function () {
    // Redirect to main.html when the button is clicked
    window.location.href = "login.html";

  });
});



//daily challenge
//Daily question 
var dailyQuesBtn = document.getElementById('questionText');
dailyQuesBtn.textContent = "What is the capital city of France?";

//after the submission of submit button in the daily challenge
function submitAnswer() {
  const answerForm = document.getElementById("answerForm"); 
  const userAnswer = answerForm.elements["answer"].value.trim();
  const answer = document.querySelector(".answer");

  if (userAnswer !== "") {
      const correctAnswer = "Paris";  // Provide the correct answer here
      //regardless how the answer is writeen it will be switched to lowercase
      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          answer.style.color = "#22c55e"; //adding style
          answer.textContent = "You are correct!"; 
      } else {
          answer.style.color = "#ff2020";
          //if incorrect, the user will be shown the answer
          answer.textContent = `Incorrect. The correct answer is ${correctAnswer}`;
      }
  } else {
      answer.style.color = "#ff2020"; //add style
      answer.textContent = "Please enter your answer"; //if user have not written the answer
  }

  //after the submission this will clear the answer
  answerForm.reset();
}


