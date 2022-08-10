import './App.css';
import BodyBase from './Components/BodyBase/BodyBase';
import HeaderBase from './Components/HeaderBase/HeaderBase'
import IMG from './Components/IMG/IMG'

function App() {
  return (
    <div className="App" style={bod}>
      <div className='App1' style={bod1}>
      <HeaderBase/>
      <BodyBase />
      </div>

      <div>
      <IMG />
      </div>
    </div>
  );
}

const bod1 = {
  border: "0px solid pink",
  marginLeft: "30px"
}
const bod = {
  border: "0px solid pink",
  backgroundColor: "#FFFFFF",
  position: "relative",
  marginTop: "-20px",

}



export default App;

