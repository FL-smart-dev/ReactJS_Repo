import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeComponent from './components/ListEmployeComponent';
import {Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent';


function App() {

    return (
      <>
      <BrowserRouter>
        <HeaderComponent />
          <div className="app-container">
            <Routes>
              {/* //https://localhost:3000 */}
              <Route path='/'element = { <ListEmployeComponent />}></Route>
              {/* //https://localhost:3000/employees */}
              <Route path='/employees' element = {<ListEmployeComponent />}></Route>
              {/* //https://localhost:3000/addNewEmployee */}
              <Route path='/add-employee' element = {<EmployeeComponent />} ></Route>
              {/* //http:localhost:3000/edit-employee/1 *1 */}
              <Route path ='/edit-employee/:id' element = {<EmployeeComponent /> }></Route>
            </Routes>
          </div>
        <FooterComponent />
      </BrowserRouter>
      </>
    )
}

export default App;