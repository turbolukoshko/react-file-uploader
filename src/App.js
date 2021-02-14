import './App.css';
import { useState } from 'react';

const App = () => {

  const [drag, setDrag] = useState(false);

  const dragStart = e => {
    e.preventDefault();
    setDrag(true);
  }

  const dragLeave = e => {
    e.preventDefault();
    setDrag(false);
  }

  const drop = e => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(files);
  }

  return (
    <div className="app">
      {drag ? 
        <div 
          className="drop-area"
          onDragStart={e => dragStart(e)}
          onDragLeave={e => dragLeave(e)}
          onDragOver={e => dragStart(e)}
          onDrop={e => drop(e)}
        >
          Release files to download
        </div> :
        <div
          onDragStart={e => dragStart(e)}
          onDragLeave={e => dragLeave(e)}
          onDragOver={e => dragStart(e)}
        >Drag and drop files to upload them</div>
      }
    </div>
  );
}

export default App;
