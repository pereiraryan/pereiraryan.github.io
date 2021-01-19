import { useState} from 'react'; 
import Button from  './Button';
import './App.css';



function App() {


  const [color, setColor] = useState('red'); 
  return (
      <div className={`App ${color}`} style={{ backgroundColor: color}} >
      <div className="continer">
        <h1>Hello React</h1>
          <Button color="red" setColor={setColor} />
          <Button color="yellow" setColor={setColor} />
          <Button color="blue" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
