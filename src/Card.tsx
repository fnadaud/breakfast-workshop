const Card = ({ title, type, image }: { title: string, type: string, image: string }) => {

  const computeType = () => {
    if(type === "FAT") {
      return {
        color: "#F6EB61",
        label: "Matière grasse"
      }
    } else if (type === "FRUIT") {
      return {
        color: "#0A5C36",
        label: "Fruit"
      }
    } else if (type === "DAIRY") {
      return {
        color: "#87CEFA",
        label: "Produit laitier"
      }
    } else if (type === "CEREAL") {
      return {
        color: "#79443B",
        label: "Céréale"
      }
    } else {
      return {
        color: "grey",
        label: ""
      }
    }
  }

  const realType = computeType();

  return (
    <div className="card" style={{backgroundColor: realType.color}}>
      <img src={image} />
      <div>{title}</div>
      <div>({realType.label})</div>
    </div>
  )
}

export default Card
