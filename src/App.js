import { BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import Chat from "./Chat";
import { UserAuthContextProvider } from "./UserAuthContext";
import ProtectedRoute from "./ProtectedRoute";
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
