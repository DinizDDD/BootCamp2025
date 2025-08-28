function NewsCard ( {image, altText, title, descricao, link, }) {
    return (
        <div class="noticia">
                <img src={image} alt={altText}/>
                <div class="overlay">
                    <h3>{title}</h3>
                    <p>{descricao}</p>
                    <a href={link}>Ver Mais</a>
                </div>
        </div>
    );
}

export default NewsCard;