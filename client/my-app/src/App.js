import './App.css';
import Api from "./Api"

function App() {
  return (
    <div>
        {Api.get_pages()}
    </div>
  );
}

export default App;
