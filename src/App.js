import { BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterAndLogin from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<RegisterAndLogin />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/chat' element={<ProtectedRoute><Chat/></ProtectedRoute>}/>
        </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
