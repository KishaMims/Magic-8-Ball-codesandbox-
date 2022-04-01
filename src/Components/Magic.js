import { useState } from "react";

const finalPrediction = () => {
  let results = [
    "It is certain",
    "It is decidedly so",
    "Reply hazy try again",
    "Cannot predict now",
    "Do not count on it",
    "My sources say no",
    "Outlook not so good",
    "Signs point to yes"
  ];

  let randomAnswer = results[Math.floor(Math.random() * 8)];

  return randomAnswer;
};

//console.log(finalPrediction());

// function setPrediction(e) {
//     let results = e.target.value;
//     setPrediction(finalPrediction);
//   }

function MagicEightBall(props) {
  const [prediction, setPrediction] = useState("");
  const [question, setQuestion] = useState("");

  function EmptyQuestion() {}
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskQuestion = () => {
    console.log("is this happening ?");
    // if the question is empty, show an alert
    if (question === "") {
      alert("Please enter a question!");
    } else {
      // otherwise empty the quesiton box and show the prediction
      setPrediction(finalPrediction);
      setQuestion("");
    }
  };

  return (
    <div>
      <h1 className="font-link">{props.title}</h1>
      <p className="font-link">What does the future hold?</p>
      <label className="font-link">
        Type your question in below to be guided by the Magic 8 Ball:
      </label>
      <br />
      <form>
        <br />
        <label>
          <input
            type="text"
            name="question"
            value={question}
            onChange={handleQuestionChange}
          />
        </label>
      </form>
      <br />
      <button onClick={handleAskQuestion} className="shake-link">
        {" "}
        Is it So?
      </button>
      <img src={props.imageURL} alt={props.description} />
      <p className="font-link">{prediction}</p>
    </div>
  );
}

export { MagicEightBall };
// function magicEightBall() {
//   var q = document.forms["predictionHere"]["OneQuesiton"].value;
//   let randomAnswer = Math.floor(Math.random()*8)
//     if (q == "") {
//       alert("You must type a quesiton");
//       return false;
//     } else {
//     let newFortune = document.getElementById("showFuture");
//       newFortune.innerHTML = results[randomAnswer];
//       return randomAnswer;
//     }
//   }
