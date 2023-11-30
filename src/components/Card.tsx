import { useState } from "react"
import defaultImage from "../assets/default.png"
import Tick from "./Tick"

const Card = ({ title, type, image = defaultImage }: { title: string, type: string, image?: string }) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  const computeType = () => {
    if(type === "FAT") {
      return {
        color: "linear-gradient(150deg, rgba(255,243,91,1) 60%, rgba(255,236,71,1) 100%)",
        label: "Matière grasse"
      }
    } else if (type === "FRUIT") {
      return {
        color: "linear-gradient(150deg, rgba(12,112,66,1) 60%, rgba(10,92,54,1) 100%)",
        label: "Fruit"
      }
    } else if (type === "DAIRY") {
      return {
        color: "linear-gradient(150deg, rgba(135,206,250,1) 60%, rgba(118,182,222,1) 100%)",
        label: "Produit laitier"
      }
    } else if (type === "CEREAL") {
      return {
        color: "linear-gradient(150deg, rgba(126,71,62,1) 60%, rgba(112,63,54,1) 100%)",
        label: "Céréale"
      }
    } else {
      return {
        color: "grey",
        label: ""
      }
    }
  }

  const realType = computeType()

  return (
    <div 
      className={"card" + (selected ? " card-selected" : "")}
      style={{background: realType.color}}
      onClick={handleClick}
    >
      {selected && <div className="tick">
        <Tick />
      </div>}
      <img src={image} />
      <div className="card-content">
        <div>{title}</div>
        <div>({realType.label})</div>
      </div>
    </div>
  )
}

export default Card
