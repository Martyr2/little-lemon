const Card = ({
    imageSrc,
    title,
    description,
    buttonText,
    onButtonClick,
    className = ""
  }) => {
    return (
      <div className={`card-container ${className}`}>
        <div className="card-image-wrapper">
          <img
            src={imageSrc}
            alt={title}
            className="card-image"
          />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <button className="card-button" onClick={onButtonClick}>{buttonText}</button>
        </div>
      </div>
    );
};

export default Card;