import './App.css';
import Page1 from './HousePlants/Page1';
import Page2 from './HousePlants/Page2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>{/* Wrapping the application in BrowserRouter to enable routing */}
      <Routes>{/* Defining the routes for the application */}
        <Route exact path="/" element={<Page1/>}/>{/* Route for the home page, rendering Page1 component */}
        <Route exact path="/Page2/:id" element={<Page2/>}/>{/* Route for Page2, with a dynamic :id parameter, rendering Page2 component */}
      </Routes>
      </BrowserRouter>
      </header>
      
    </div>
  );
}

export default App;
