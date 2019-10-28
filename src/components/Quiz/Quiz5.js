
import React from 'react';
import { createBrowserHistory } from "history";

class Quiz5 extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "La prueba o examen de laboratorio que determina la cantidad de Alcohol etílico que una persona tiene en la sangre se llama:",
          answers: [
            "A. Alcoholuria",
            "B. Alcoholimetría",
            "C. Alcoholemia",
            "D. Embriaguez"
          ],
          correct: 0
        },
        {
          question: "¿Cuál de las siguientes opciones NO es un requisito para conducir un vehículo de servicio público?",
              answers: [
                "A. Saber leer y escribir",
                "B. Aprobar un examen teórico-práctico",
                "C. Certificado de aptitud física, y mental",
                "D. Tener 16 años cumplidos"
              ],
              correct: 3
        },
         {
              question: "De las siguientes opciones, ¿Cual es una prohibición especial para adelantar vehículos?",
              answers: [
                "A. En intersecciones",
                "B. En curvas o pendientes",
                "C. En zonas residenciales",
                "D. Por la izquierda de un vehículo"
              ],
              correct: 1
            },
            {
              question: "¿Cuáles de las siguientes opciones NO es un tipo de sanción?",
              answers: [
                "A. Amonestación",
                "B. Retención preventiva del vehículo",
                "C. Comparendo pedagógico",
                "D. Inmovilización del vehículo"
              ],
              correct: 2
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
      
      if (this.state.current === 3 && this.state.incorrect === 0) {
          console.log("congrats");
          try {
            let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";            
            let authName = this.props.history.location.state.authName ? this.props.history.location.state.authName : "";
            this.state.history.push({ pathname: "/loading", state: { authName: authName, username: userKey, quiz: "5" } });
            this.state.history.go();
            } catch (error) {
              
              this.state.history.push("/");
              this.state.history.go();
            }
          
      } 
      else if (this.state.current === 3 && this.state.incorrect > 0) {
        console.log("Bad");
        try {
          let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";            
          let authName = this.props.history.location.state.authName ? this.props.history.location.state.authName : "";
          this.state.history.push({ pathname: "/loading", state: { authName: authName, username: userKey, quiz: "NA" } });
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
                <h1>Quiz Modulo 5</h1>
            </div>
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    )
  }

export default Quiz5;