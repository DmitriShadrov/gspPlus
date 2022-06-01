
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
        <h1>Page with video and button</h1>
          <div className='frame'>
              <h2></h2>
              <iframe width="668" height="380" src="https://www.youtube.com/embed/UedTcufyrHc?&autoplay=1"frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        <button className="custom-btn" >place a bet</button>
      </div>
    </div>
  );
}

export default App;
