import React from 'react';
import Content  from './View/Content'
import AppBar from './Component/AppBar'

export const woop = React.createContext();

const value = {
  index:0,
  row: [ {
    title : "願望",
    description : "願望を書いてください",
    input: ""
  },
  {
    title : "メリット",
    description : "メリットを書いてください",
    input: ""
  }
  ]
};
 
function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <woop.Provider  value={value}>
        <Content></Content>
      </woop.Provider>
    </div>
  );
}
 
export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import chip from './View/chips';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <chip></chip>
//       </header>
//     </div>
//   );
// }

// export default App;
