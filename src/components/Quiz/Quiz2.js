
import React from 'react';
import { createBrowserHistory } from "history";

class Quiz2 extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "La ley 769 del 2002 es:",
          answers: [
            "A. Código nacional de tránsito",
            "B. Plan estratégico de seguridad vial",
            "C. Código único de tránsito",
            "D. Normas de seguridad vial"
          ],
          correct: 0
        },
        {
          question: "¿Cuál es el objetivo general del plan estratégico de seguridad vial?",
              answers: [
                "A. Reducir las lesiones graves y los muertos en accidentes de tránsito",
                "B. Reducir los índices de multas y comparendos",
                "C. Establecer las normas que regulen la seguridad vial",
                "D. Comparar accidentalidad antes y después del PESV"
              ],
              correct: 0
        },
         {
              question: "¿Qué es un análisis de trabajo seguro?",
              answers: [
                "A. Un análisis que busca brindar información de la vía y actores viales",
                "B. Un análisis que busca mitigar accidentes de tránsito en base a actividades y actores viales",
                "C. Un diagnóstico de la vía y actores viales",
                "D. Ninguna de las anteriores"
              ],
              correct: 1
            },
            {
              question: "¿Cuáles son los tres factores fundamentales de riesgo?",
              answers: [
                "A. Hombre, vía y demás actores viales",
                "B. Vía, andes y carreteras",
                "C. Agentes de tránsito, vía y vehículos",
                "D. Hombre, vía y vehículos"
              ],
              correct: 3
            },
            {
              question: "Unas de las políticas del PESV son:",
              answers: [
                "A. Elementos de protección personal",
                "B. Alcohol y drogas",
                "C. Velocidad",
                "D. Todas las anteriores"
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
          let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";
  
          this.state.history.push({ pathname: "/loading", state: { username: userKey, quiz: "2" } });
          this.state.history.go();
          
      } 
      else if (this.state.current === 4 && this.state.incorrect > 0) {
        console.log("Bad");
        let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";

        this.state.history.push({ pathname: "/loading", state: { username: userKey, quiz: "NA" } });
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
                <h1>Quiz Modulo 2</h1>
            </div>
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    )
  }

export default Quiz2;