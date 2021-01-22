
import './App.css';
import Home from './components/Home';
import { RestaurantContextProvider } from "./context/RestaurantContext";


function App() {
 
  return (
    <div className="App">
            <RestaurantContextProvider>

      <Home />
      </RestaurantContextProvider>
    </div>
  );
}

export default App;
