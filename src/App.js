import logo from './logo.svg';
import './App.css';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         היי React
        </p>
      </header>

      <Upload></Upload>
    </div>
  );
}

export default App;
