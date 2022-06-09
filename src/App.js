import './App.css';
import LoginScreen from './Screens/LoginScreen.jsx';
import DoctorSection from './Screens/DoctorSection/DoctorDashboard';
import {useState} from "react"
import AdminSection from './Screens/AdminSection/AdminDashboard';
import LoadingScreen from './Screens/LoadingScreen';
function App() {
  const [currentPage,setCurrentPage]=useState("LoadingScreen")
  const signOut=()=>{
    localStorage.removeItem("loggedUser")
    setCurrentPage("LoadingScreen")
  }
  return (
    <div className="App"> 
     {currentPage=="LoadingScreen" && <LoadingScreen setCurrentPage={setCurrentPage}/>}
     {currentPage=="Login" && <LoginScreen setCurrentPage={setCurrentPage}/>}
     {currentPage=="DoctorDashboard" && <DoctorSection signOut={signOut} setCurrentPage={setCurrentPage} />}
     {currentPage=="AdminSection" && <AdminSection signOut={signOut} setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
