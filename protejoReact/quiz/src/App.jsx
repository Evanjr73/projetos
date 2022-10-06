// react   compenents , estáticos
import  {useContext , useEffect} from "react";
import { QuizContext } from "./context/quiz";

import Welcome from './components/Welcome'
import Question from "./components/Question";
import GameOver from "./components/GameOver"
import './App.css'




function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(
    () => {
        //embaalhar as perguntas
        dispatch({type: "REODER_QUESTINS"})
    } ,[]
  )

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizstate.gamestage === "Start" && <Welcome/>}
      {quizstate.gamestage === "Playing" && <Question/>}
      {quizState.gamestage == "End" && <GameOver/> }
    </div>
  )
}

export default App
