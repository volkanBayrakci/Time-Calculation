import TargetCalc from "./components/TargetCalc";
import TimeCalc from "./components/TimeCalc";


const App = () => {
  return(
    <>
    <div className="container mt-3">
      <TimeCalc />
      <hr className="my-4" />
      <TargetCalc />
    </div>
    </>
  )
}

export default App
