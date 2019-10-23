
import React, { useContext } from 'react';
import { createBrowserHistory } from "history";

class Quiz1 extends React.Component {
    constructor(props) {
      super(props)

  var dataSet = [
        {
          question: "¿Cuales son las partes principales de un motor a gasolina?",
          answers: [
            "A. Culata, Exosto, Bloque",
            "B. Culata, Balinera, Prensa",
            "C. Bloque, Carter, Prensa",
            "D. Culata, Bloque, Carter"
          ],
          correct: 3
        },
        {
          question: "¿Qué dispositivos del sistema de refrigeración se encienden solo cuando es necesario?",
              answers: [
                "A. Sensores",
                "B. Termostato",
                "C. Radiador",
                "D. Electro veltiladores"
              ],
              correct: 3
        },
         {
              question: "¿Qué tipos de aceites existen para la lubricación del motor?",
              answers: [
                "A. Sintéticos, ultra sintéticos, Minerales",
                "B. Minerales, Sintéticos, Semisintéticos",
                "C. Semisintéticos, Sintéticos, ultra sintéticos",
                "D. Minerales tipo A, Minerales tipo B, Minerales tipo C"
              ],
              correct: 1
            },
            {
              question: "Según la clasificación de aceites por viscosidad existen de diferentes tipos: ",
              answers: [
                "A. Monogrados, centígrados",
                "B. Homogrados, Monogrados",
                "C. Monogrados, Multígrados",
                "D. Multígrados, Unigrados."
              ],
              correct: 2
            },
            {
              question: "¿Cuáles son los elementos principales del sistema de escape?",
              answers: [
                "A. Catalizador, Sensor de Oxígeno, Silenciador",
                "B. Catalizador, Prensa, Bloque",
                "C. Silenciador, Balinera, Sensor de contaminación",
                "D. Silenciador, Sensor de Oxígeno, Inyección electrónica, Catalizador"
              ],
              correct: 3
            },
            {
              question: "¿Qué tipos de transmisiones existen?",
              answers: [
                "A. Mecánica, Asistida",
                "B. Mecánica, Electro asistida",
                "C. Electrónica, Asistida",
                "D. Mecánica, Automática"
              ],
              correct: 3
            },
            {
              question: "Algunas partes del sistema de suspensión son:",
              answers: [
                "A. Bujes, Espiral, Rotula, Tijeras",
                "B. Brazos, amortiguador, bloque",
                "C. Amortiguador, Barra estabilizadora, Brazo axial, Cadenilla",
                "D. Espiral, Bujes, cadeneta",
              ],
              correct: 0
            },
            {
              question: "El elemento encargado de moverse y ejercer presión sobre el disco en el sistema de frenos es:",
              answers: [
                "A. Mordazas",
                "B. Pastillas",
                "C. Liquido de aceite",
                "D. Disco de frenos"
              ],
              correct: 0
            }
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
      
      if (this.state.current === 7 && this.state.incorrect === 0) {
          console.log("congrats");
          let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";
  
          this.state.history.push({ pathname: "/loading", state: { username: userKey, quiz: "NA" } });
          this.state.history.go();
          
      } 
      else if (this.state.current === 7 && this.state.incorrect > 0) {
        console.log("Bad");
        let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";

        this.state.history.push({ pathname: "/loading", state: { username: userKey, quiz: "1" } });
        this.state.history.go();
        
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
                <h1>Quiz Modulo 1</h1>
            </div>
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    )
  }

export default Quiz1;