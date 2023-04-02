import Footer from "../footer/footer"
import Intro from "../intro/intro"
import Jobs from "../jobs/jobs"
import Navbar from "../navbar/navbar"
import "./App.scss"

function App(): JSX.Element {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Jobs/>
      <Footer/>
    </div>
  )
}

export default App