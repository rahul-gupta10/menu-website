import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button} from 'reactstrap';
import './App.css';
import Maincont from './Maincont';
import DarkModeToggle from "react-dark-mode-toggle"
function App() {
  const [mode, setmode] = useState('light');
  return (
    <div className={`${mode} `} >
      <div>
        <h1 className='menu'>Menu List</h1>
        <hr style={{width : "10vh" , color:"black" , marginLeft:"47%"}}></hr>
        <div className='menubutton'>
          <Button className={`btn-${mode} btn bg-transparent`}>All</Button>
          <Button className={`btn-${mode} btn bg-transparent`}>Sweets</Button>
          <Button className={`btn-${mode} btn bg-transparent`}>Spicey</Button>
          <DarkModeToggle
      onChange={()=>setmode(mode==="light"?"dark":"light")}
      checked={mode==="dark"?true:false}
      size={60}
    />
        </div>
        <Maincont mode={mode}></Maincont>
      </div>
    </div>
  );
}

export default App;
