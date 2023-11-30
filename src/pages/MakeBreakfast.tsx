import Card from "../components/Card"

import appleImage from "../assets/apple.png"
import bananaImage from "../assets/banana.png"
import breadImage from "../assets/bread.png"
import butterImage from "../assets/butter.png"
import crispbreadImage from "../assets/crispbread.png"
import orangeImage from "../assets/orange.png"
import milkImage from "../assets/milk.png"
import ruskImage from "../assets/rusk.png"
import yogurtImage from "../assets/yogurt.png"

const fruits = [{title: "Banane", image: bananaImage}, {title: "Pomme", image: appleImage}, {title: "Orange", image: orangeImage}]
const fat = [{title: "Beurre", image: butterImage}]
const dairy = [{title: "Yahourt", image: yogurtImage}, {title: "Lait", image: milkImage}]
const cereals = [{title: "Cracotte", image: crispbreadImage}, {title: "Pain", image: breadImage}, {title: "Biscotte", image: ruskImage}]

const MakeBreakFast = () => {
    return (
        <>
            <h2>
                Compose ton petit déjeuner !
            </h2>
            <div className="cards">
                {fruits.map(item => <Card key={item.title} title={item.title} type="FRUIT" image={item.image} />)}
                {fat.map(item => <Card key={item.title} title={item.title} type="FAT" image={item.image} />)}
                {dairy.map(item => <Card key={item.title} title={item.title} type="DAIRY" image={item.image} />)}
                {cereals.map(item => <Card key={item.title} title={item.title} type="CEREAL" image={item.image} />)}
            </div>
        </>
    )
}

export default MakeBreakFast