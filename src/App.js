import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Pages/Dashboard'
import Approve from './components/Pages/Approve'
import ContactUs from './components/Pages/ContactUs'
import Members from './components/Pages/Members'
import Sidebar from './components/Sidebar/Sidebar';
import AddData from './components/Pages/AddData';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/approve' element={<Approve />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/members' element={<Members />} />
            <Route path='/adddata' element={<AddData/>} />
            <Route path='*' element={<div>Path not found</div>} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
