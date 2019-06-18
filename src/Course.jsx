import React from 'react';
import PropTypes from 'prop-types';

const Curso = ({title, image, price, teacher}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title}></img>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">{'Profesor: ' + (teacher)}</div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="www.google.com.ar">{(price) + ' USD'}</a>
            </div>
        </div>
    </article>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    teacher: PropTypes.string
}

Curso.defaultProps = {
    title: 'No Course',
    image: 'https://topekacivictheatre.com/wp-content/uploads/2019/01/no-image.jpg',
    price: '0',
    teacher: '-'
}

export default Curso;