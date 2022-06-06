import './App.css';
import LoginScreen from './Screens/LoginScreen.jsx';
import DoctorSection from './Screens/DoctorSection/DoctorDashboard';
import {useState} from "react"
function App() {
  const [currentPage,setCurrentPage]=useState("Dashboard")
  return (
    <div className="App"> 
     {currentPage=="Login" && <LoginScreen setCurrentPage={setCurrentPage}/>}
     {currentPage=="Dashboard" && <DoctorSection setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
