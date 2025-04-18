const HeroImage = ({image, height="300px", children }) => {

    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height,
        width: '100%',
    };
    
    return <section style={divStyle}>{children}</section>;

}

export default HeroImage;