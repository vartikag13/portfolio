import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Bakery from './components/Bakery';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/bakery' index element={<Bakery />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
