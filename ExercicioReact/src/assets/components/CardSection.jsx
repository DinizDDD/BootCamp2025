import  Cards from "../components/Cards"
import twwiter from "../images/twwiter.png"

const socials = [
    {
        image: twwiter,
        altImage: "TwwiterIMG",
        tittle: "TWWITER",
        text: "lorem", 
    },
]

function CardSection () {
    return(
        <section>
            <div className="Cards">
                <Cards
                
                />
            </div>
        </section>
    )
}

export default CardSection;