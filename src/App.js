
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menubar from './Menubar/Menubar';
import Test from './Test/Test';
function App() {

  const count=()=>{
    console.log('hello paisi brooo')
  }
  return (
    <div className="App">
     <Menubar country="Uganda"  ></Menubar>
     <h1>0</h1>
     <Test count={count} ></Test>
    </div>
  );
}

export default App;
