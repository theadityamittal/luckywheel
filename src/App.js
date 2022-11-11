import React, {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Website from './components/Website';

const App = () => {
  const [visible, setVisibility] = useState(false)

  useEffect(() => {
    if(visible){
      document.body.style.overflow = "scroll"
    }
    else{
      document.body.style.overflow = "scroll"
    }
  }, [visible])

  return (
    <div className="App">
      {visible
      ? <Sidebar visible={visible} setVisibility={setVisibility}/>
    : <></>}
    <Website setVisibility={setVisibility}/>
    </div>
  );
}

export default App;
