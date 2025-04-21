const MenuItem = ({ image, title, description, price }) => {
  return (
    <div className="menu-item">
      <img src={image} alt={title} className="menu-item-image" />
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{title}</h3>
          <span className="menu-item-price">${price}</span>
        </div>
        <p className="menu-item-description">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
