// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" style={{height:200,width:200}}/> */}
        <button onClick={window['object_function']}>Click me!</button>

      </header>
    </div>
  );
}

export default App;