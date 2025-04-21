

const Testimonial = (props) => {
    
    return (
        <div className="testimonial-card">
            <div className="testimonial-content">
                <h3 className="testimonial-title">{props.title}</h3>
                <p className="testimonial-text">{props.text}</p>
            </div>
        </div>
    );
}

export default Testimonial;