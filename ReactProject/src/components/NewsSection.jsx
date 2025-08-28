import NewsCard from "./NewsCard";
import tec_unimar from "../assets/image/noticias/tec_unimar.jpg"
import unimar_tec from "../assets/image/noticias/unimar_tech_summit.jpg"


const news = [
    {
        image: tec_unimar,
        altText: "Unimar Tech Summit",
        title: "Unimar Texh Summit",
        descricao: "Participe do maior encontro de tecnologia e inovação do interior paulista.",
        link: "https://lets.4.events/unimar-tech-summit-2025-C11575E131",
    },
    {
        image: unimar_tec,
        altText: "Parque Tecnológico TecUnimar",
        title: "TecUnimar: Parque Tecnológico",
        descricao: "A Unimar inaugura o primeiro Parque Tecnológico da região",
        link: "https://tec.unimar.br/",
    }
]

function NewsSection () {
    return (
        <section id="noticias">
            <h2>Últimas Notícias</h2>
            <div class="cards">
                {news.map((news) => (
                     <NewsCard 
                     key={news.title}
                     image={news.image}
                     altText={news.altText}
                     descricao={news.descricao}
                     link={news.link}
                     />
                ))}

            </div>
        </section>
    );
}

export default NewsSection;