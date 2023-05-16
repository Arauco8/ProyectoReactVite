import './App.css'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'
import HelloWorld from './components/HelloWorld'

function App() {

  return (
    <>
      <ClassComponent/>
      <HelloWorld name={"Puma"}/>
      <FuncComponent text={'Función n° 1'} salario={150000} />
    </>
  )
}

export default App
