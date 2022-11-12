import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import './App.css';
import Layout from './components/Layout';

function App() {
  return(
    <Layout>
      <Routes>
      
      <Route path='/' element={<Notes/>}>
      </Route>
      <Route path='/create' element={<Create/>}>
      </Route>

      
      
    </Routes>

    </Layout>
    
  )
}
export default App;
