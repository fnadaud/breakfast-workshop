import { useState } from "react"
import Card from "../components/Card"

import appleImage from "../assets/apple.png"
import bananaImage from "../assets/banana.png"
import breadImage from "../assets/bread.png"
import butterImage from "../assets/butter.png"
import crispbreadImage from "../assets/crispbread.png"
import orangeImage from "../assets/orange.png"
import milkImage from "../assets/milk.png"
import ruskImage from "../assets/rusk.png"
import chocolateSpreadImage from "../assets/spread.png"
import yogurtImage from "../assets/yogurt.png"
import Tick from "../components/Tick"

const fruits = [{title: "Banane", image: bananaImage}, {title: "Pomme", image: appleImage}, {title: "Orange", image: orangeImage}]
const fat = [{title: "Beurre", image: butterImage}]
const dairy = [{title: "Yahourt", image: yogurtImage}, {title: "Lait", image: milkImage}]
const cereals = [{title: "Cracotte", image: crispbreadImage}, {title: "Pain", image: breadImage}, {title: "Biscotte", image: ruskImage}]
const sugar = [{title: "Pâte à tartiner", image: chocolateSpreadImage}]

interface CardSelected {
    title: string;
    image: string;
    type: string;
}

const MakeBreakFast = () => {
    const [selection, setSelection] = useState<CardSelected[]>([])

    const handleSelection = (element: CardSelected) => {
        const index = selection.findIndex(item => item.title === element.title)
        if(index === -1) {
            setSelection([...selection, element])
        } else {
            const newSelection = [...selection]
            newSelection.splice(index, 1)
            setSelection(newSelection)
        }
    }

    const hasFruit = !!selection.find(item => item.type === "FRUIT")
    const hasFat = !!selection.find(item => item.type === "FAT")
    const hasSugar = !!selection.find(item => item.type === "SUGAR")
    const hasDairy = !!selection.find(item => item.type === "DAIRY")
    const hasCereal = !!selection.find(item => item.type === "CEREAL")

    return (
        <>
            <h2>
                Compose ton petit déjeuner !
            </h2>
            <div className="subheader">
                <div className="requierements">Il te faut un ingrédient de chaque catégorie : 
                    <div className="category fruit">{hasFruit && <Tick color="#FFF" />}</div>
                    <div className="category fat">{hasFat && <Tick color="#181818" />}</div>
                    <div className="category sugar">{hasSugar && <Tick color="#FFF" />}</div>
                    <div className="category dairy">{hasDairy && <Tick color="#FFF" />}</div>
                    <div className="category cereal">{hasCereal && <Tick color="#FFF" />}</div>
                </div>
                <div className="selection">
                    {selection.length > 0
                        ? selection.map(item => <img key={item.title} className="selected" src={item.image} />)
                        : "Ton petit déjeuner est vide pour le moment."
                    }
                </div>
            </div>
            <div className="cards">
                {fruits.map(item => <Card key={item.title} title={item.title} type="FRUIT" image={item.image} handleSelection={handleSelection} />)}
                {fat.map(item => <Card key={item.title} title={item.title} type="FAT" image={item.image} handleSelection={handleSelection} />)}
                {sugar.map(item => <Card key={item.title} title={item.title} type="SUGAR" image={item.image} handleSelection={handleSelection} />)}
                {dairy.map(item => <Card key={item.title} title={item.title} type="DAIRY" image={item.image} handleSelection={handleSelection} />)}
                {cereals.map(item => <Card key={item.title} title={item.title} type="CEREAL" image={item.image} handleSelection={handleSelection} />)}
            </div>
        </>
    )
}

export default MakeBreakFast