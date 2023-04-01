import Intro from "../intro/intro"
import Jobs from "../jobs/jobs"
import "./App.scss"

function App(): JSX.Element {

  return (
    <div className="App">
      <Intro/>
      <Jobs/>
    </div>
  )
}

export default App