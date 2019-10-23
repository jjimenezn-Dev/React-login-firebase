
import React from 'react';
import { createBrowserHistory } from "history";

class Quiz4 extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "¿Qué efectos puede generar colocar 2 o mas señales de tránsito verticales?",
          answers: [
            "A. Contaminación visual y Pérdida de efectividad",
            "B. Mareo y nauseas",
            "C. Confusión y contaminación visual",
            "D. Pérdida de efectividad y Confusión"
          ],
          correct: 0
        },
        {
          question: "¿Cuál es la principal diferencia entre las señales de tránsito verticales y horizontales?",
              answers: [
                "A. Su geometría",
                "B. Unas son de uso informativo y otras de obligatorio cumplimiento",
                "C. Unas están perpendiculares al piso y otras están en el piso",
                "D. Su uso"
              ],
              correct: 2
        },
         {
              question: "¿Qué tipos de señales de tránsito existen?",
              answers: [
                "A. Obligatorias y de referencia",
                "B. Preventivas y obligatorias",
                "C. Informativas y cumplimiento restringido",
                "D. Obligatorias, preventivas e informativas"
              ],
              correct: 3
            },
            {
              question: "¿Que son las señales de mensaje variable o SMV?",
              answers: [
                "A. Señales que cambian con el paso del tiempo",
                "B. Señales que se cumplen ciertas veces",
                "C. Dispositivos de control que pueden ser cambiadas mecánicamente o electrónicamente",
                "D. Señales normales"
              ],
              correct: 2
            },
            {
              question: "¿Qué tipo de señal debe ir antes de ingresar a un túnel?",
              answers: [
                "A. Preventiva",
                "B. Obligatoria",
                "C. Informativa",
                "D. Restrictiva"
              ],
              correct: 0
            },
            {
              question: "¿En qué caso podemos ver una señal horizontal combinada con una señal vertical?",
              answers: [
                "A. Curva peligrosa",
                "B. Pare",
                "C. Ceder el paso",
                "D. Gasolinera"
              ],
              correct: 1
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
      
      if (this.state.current === 5 && this.state.incorrect === 0) {
          console.log("congrats");
          let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";
  
          this.state.history.push({ pathname: "/loading", state: { username: userKey, quiz: "4" } });
          this.state.history.go();
          
      } 
      else if (this.state.current === 5 && this.state.incorrect > 0) {
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
                <h1>Quiz Modulo 4</h1>
            </div>
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    )
  }

export default Quiz4;