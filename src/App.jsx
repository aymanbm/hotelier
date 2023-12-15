import './App.css';
import Header from './components/Templates/Main/Header/Header';


function App() {
  localStorage.setItem("Data",JSON.stringify({
    enfants: "0",
    adultes: "1",
    arrive: "2023-11-10",
    depart: "2023-12-10",
  }))


return <div>
            <Header/>                
        </div>
      
}export default App;





