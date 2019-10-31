import React from 'react';

import './css/reset.css';
import './css/timeline.css';

import Header from './componentes/Header';
import Timeline from './componentes/Timeline';

function App() {
  return (
    <div id="root">
      <div data-reactroot="" className="main">

        <Header/>
        <Timeline login={this.props.params.login} />
        
      </div> {/*fim .main*/}
    </div>  
  );
}

export default App;
