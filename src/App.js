import Main from './Components/Items/Main';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import UserContextProvider from './Context/UserContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import History from './Components/History/History';

function App() {
  return (

    <>
      <UserContextProvider>
       
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            {/* <Route path="/NotFound404" element={<NotFound></NotFound>}></Route> */}
            <Route path="/" element={<Main/>} />
            <Route path="/History" element={<History/>} />
            <Route path='*' element={<Main/>}/>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>

  );
}

export default App;
