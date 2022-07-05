import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
