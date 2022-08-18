import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer}  from './components/ItemListContainer/ItemListContainer';





function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <header className='App-header'>
      
      <ItemListContainer greeting="Texto provisional"></ItemListContainer>

      </header>
    </div>
  );
}

export default App;
