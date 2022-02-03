import logo from './logo.svg';
import './App.css';

function App() {
  for (let i = 1; i <= 8; i++){

    //=======Append 8 vertical rows to the body=======//
    
        $('#game').append('<div class="row-'+i+'" style="display: inline-block; margin-top: -4px"></div>');
        for (let j = 1; j <= 8; j++){
            if (i%2!=0){
                if (j%2!=0){
                    color='black';
                }else{
                    color='red';
                }
            } else {
                if (j%2==0){
                    color='black';
                }else{
                    color='red';
                }
            }
    
    //=======Append 8 boxes to the 8 rows, alternating them black and red=======//
    
            $('.row-'+i).append('<div class="boxes box-'+box+'" style="background-color: '+color+'; width: 50px; height: 50px; padding-top: 3px"></div>');
            box++;
        }
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
