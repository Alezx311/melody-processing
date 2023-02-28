import { Grommet } from 'grommet'
import './App.css'
import { Main } from './components'

// const InitialDiv = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

const App = () => (
  <Grommet>
    <Main />
  </Grommet>
)

export default App
