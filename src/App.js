import './style/App.css';
// you can set inputs you want in ./utils/data
import data from './utils/data';
import FlexInput from './components/inputs/FlexInput';
import { handleSubmit } from './utils/handlers';
function App() {
  return (
    <>
      <div className="App">
        <div className='main-container'>
          {/* take the data object and make an inputs out of it */}
          {data.map((input,key) => {
            return <FlexInput inputData={input} key={key}/>
          })}
          <button onClick={handleSubmit}>אישור</button>
        </div>
      </div>
    </>
  );
}

export default App;
