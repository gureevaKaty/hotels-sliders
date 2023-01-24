
import './App.css';
import Maldives from './Maldives';
import Mauritius from './Mauritius';

function App() {

  return(
    <div>
      <div className='container'>
        <h1>Best hotels to visit</h1>
      </div>

      <div className='container'>
        <h2>Maldives</h2>
        <Maldives/>
        
      </div>

      <div className='container'>
        <h2>Mauritius</h2>
        <Mauritius/>
      </div>

    </div>
  )
}

export default App;
