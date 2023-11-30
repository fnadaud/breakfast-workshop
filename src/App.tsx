import { useState } from "react"
import MakeBreakfast from "./pages/MakeBreakfast"
import CreateWorkshop from "./pages/CreateWorkshop"
import "./App.css"

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = () => {
    setCurrentPage(currentPage === 0 ? 1 : 0)
  }

  return (
    <>
      <div className="header">
        <h1>L'Atelier du P'tit Déj'</h1>
        <button className="header-button" onClick={handleClick}>
          {currentPage === 0 ? "Créer son propre atelier" : "Composer son petit déjeuner"}
        </button>
      </div>
      <div className="content">
        {currentPage === 0 
          ? <MakeBreakfast />
          : <CreateWorkshop />
        }
      </div>
    </>
  )
}

export default App
