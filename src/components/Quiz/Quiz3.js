
import React from 'react';
import { createBrowserHistory } from "history";

class Quiz3 extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "¿Cuál es el mayor factor de riesgo (90%) en el manejo preventivo?",
          answers: [
            "A. Factor Humano",
            "B. La vía",
            "C. El vehículo",
            "D. Ninguna de las anteriores"
          ],
          correct: 0
        },
        {
          question: "        ◦ Dentro del manejo preventivo de conductores ¿Cuáles son los aspectos principales al hacer una revisión general del vehículo?",
              answers: [
                "            A. Luces, Presión de llantas, pastillas de frenos",
                "            B. Luces, labrado de las llantas, estado de la suspensión",
                "            C. Labrado de las llantas, Pastillas de frenos, Estado del escape",
                "            D. Estado del líquido refrigerante, estado de líquido de frenos, estado del motor"
              ],
              correct: 0
        },
         {
              question: "¿Cuáles son los elementos de protección principales para motociclistas?",
              answers: [
                "A. Casco, Guantes, balaclava",
                "B. Balaclava, Chaleco, Guantes",
                "C. Casco, Guantes, Chaqueta, Botas",
                "D. Guantes, botas, Chaqueta"
              ],
              correct: 3
            },
            {
              question: "¿Que tips de seguridad debe tener en cuenta un ciclista a la hora de transitar?",
              answers: [
                "A. Utilizar ciclo rutas, No ir entre vehículos, Utilizar elementos reflectivos",
                "B. No sujetarse de vehículos, No ir rápido, frenar a tiempo",
                "C. Buen uso de andenes y de puentes peatonales, llevar casco, usar identificación de la bicicleta",
                "D. Todas las anteriores"
              ],
              correct: 0
            },
            {
              question: "¿Cuál es el porcentaje de peatones muertos en accidentes de tránsito?",
              answers: [
                "A. 25%",
                "B. 80%",
                "C. 50%",
                "D. 10%"
              ],
              correct: 3
            },
      ];
      
      this.state = {current:0, dataSet:dataSet, correct:0, incorrect:0, history :createBrowserHistory()}
      this.handleClick = this.handleClick.bind(this)
      
    }
    
    handleClick(choice) {
      if (choice === this.state.dataSet[this.state.current].correct) {
        this.setState({correct: this.state.correct + 1})
      } else {
        this.setState({incorrect: this.state.incorrect + 1})
      }
      
      if (this.state.current === 4 && this.state.incorrect === 0) {
          console.log("congrats");
          try {
          let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";            
          this.state.history.push({ pathname: "/loading", state: { username: userKey, quiz: "3" } });
          this.state.history.go();
          } catch (error) {
            
            this.state.history.push("/");
            this.state.history.go();
          }
          
      } 
      else if (this.state.current === 4 && this.state.incorrect > 0) {
        console.log("Bad");
        try {
          let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";            
          this.state.history.push({ pathname: "/loading", state: { username: userKey, quiz: "NA" } });
          this.state.history.go();
          } catch (error) {
            
            this.state.history.push("/");
            this.state.history.go();
          }
        
    } else {
           this.setState({current: this.state.current + 1}) 
      }
    }
    
    render() {
      return(
        <div className="quiz_container">
          <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
          <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
        </div>
      )
    }
  }
  
  function Question(props) {
      
    return (
      <h1 className="question">{props.dataSet.question}</h1>
    )
  }
  
  function Answer(props) {
    
    return(
      <div>
        <button className="aswer" onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
      </div>
    )
  }
  
  function AnswerList(props) {
    var answers = []
    for (let i = 0; i < props.dataSet.answers.length; i++) {
      answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
    }
    return(
      <div>
        {answers}
      </div>
    )
  }
  
  function QuizArea(props) {
    return(
      <div className="quiz_area">
        <Question dataSet={props.dataSet} />
        <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
      </div>
    )
  }
  
  function TotalCorrect(props) {
      
    return(
      <h2 className="total_correct">Correct: {props.correct}</h2>
    )
  }
  
  function TotalIncorrect(props) {
    return(
      <h2 className="total_Incorrect">Incorrect: {props.incorrect}</h2>
    )
  }
  
  function ScoreArea(props) {
    return(
      <div className="score_area" >
        <div className="class_banner">
                <h1>Quiz Modulo 3</h1>
            </div>
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    )
  }

export default Quiz3;