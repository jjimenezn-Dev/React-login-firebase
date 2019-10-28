
import React from 'react';
import { createBrowserHistory } from "history";

class Quiz6 extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "¿Cuáles de las siguientes opciones NO se debe hacer el caso de quemadura?",
          answers: [
            "A. Frotar",
            "B. Limpiar",
            "C. Llevar al paciente a un centro médico",
            "D. Cubrir con un paño húmedo"
          ],
          correct: 0
        },
        {
          question: "¿Con que elemento debe inmovilizarse un brazo en caso de fractura o luxación?",
              answers: [
                "A. Cabestrillo",
                "B. Vendas",
                "C. Cartón",
                "D. Cuerda"
              ],
              correct: 0
        },
         {
              question: "En cualquier caso de accidente sea leve o grave ¿que es lo más recomendable después de prestar los primeros auxilios?",
              answers: [
                "A. Llevar al paciente a un centro médico",
                "B. Sobarlo",
                "C. Llevarlo a la casa",
                "D. No hacer nada"
              ],
              correct: 0
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
      
      if (this.state.current === 2 && this.state.incorrect === 0) {
          console.log("congrats");
          try {
            let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";            
            let authName = this.props.history.location.state.authName ? this.props.history.location.state.authName : "";
            this.state.history.push({ pathname: "/loading", state: {authName: authName, username: userKey, quiz: "6" } });
            this.state.history.go();
            } catch (error) {
              
              this.state.history.push("/");
              this.state.history.go();
            }
          
      } 
      else if (this.state.current === 2 && this.state.incorrect > 0) {
        console.log("Bad");
        try {
          let userKey = this.props.history.location.state.username ? this.props.history.location.state.username : "";            
          let authName = this.props.history.location.state.authName ? this.props.history.location.state.authName : "";
          this.state.history.push({ pathname: "/loading", state: {authName: authName, username: userKey, quiz: "NA" } });
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
                <h1>Quiz Modulo 6</h1>
            </div>
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    )
  }

export default Quiz6;