import './App.css'
import Card from './Card';

import banane from "./assets/banane.jpeg";
import beurre from "./assets/beurre.jpeg";
import pain from "./assets/pain.jpeg";
import yahourt from "./assets/yahourt.png";

function App() {
  const fruits = ["Banane", "Pomme", "Orange"];
  const fat = ["Beurre"];
  const dairy = ["Yahourt", "Lait"];
  const cereals = ["Cracotte", "Pain", "Biscotte"];

  return (
    <>
      <div className="header">
        <h1>L'Atelier du P'tit Déj'</h1>
      </div>
      <div className="content">
        <h2>
          Compose ton petit déjeuner !
        </h2>
        <div className="cards">
          {fruits.map(item => <Card key={item} title={item} type="FRUIT" image={banane} />)}
          {fat.map(item => <Card key={item} title={item} type="FAT" image={beurre} />)}
          {dairy.map(item => <Card key={item} title={item} type="DAIRY" image={yahourt} />)}
          {cereals.map(item => <Card key={item} title={item} type="CEREAL" image={pain} />)}
        </div>
      </div>
    </>
  )
}

export default App
