function Cards ({image, altImage, tittle, text,  }){
    return(
        <div className="card">
            <img src={image} alt={altImage} />
            <h1>{tittle}</h1>
            <p>{text}</p>
        </div>

    )
}

export default Cards;