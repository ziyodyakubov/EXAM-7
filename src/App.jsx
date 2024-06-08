import Aside from "./components/aside"
import Header from "./components/header"
import "./../src/routes"
import './index.css'

function App() {

  return (
    <>
      <Header/>

      <main>
        <div className="flex justify-between">
          <Aside/>
          
          <div className="p-[5px] flex items-center flex-wrap gap-[20px]">

          </div>
        </div>
      </main>
    </>
  )
}

export default App
