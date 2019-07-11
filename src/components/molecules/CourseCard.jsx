import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const CourseCard = ({id, title, image, price, teacher}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/courses/${id}`}>
                <img src={image} alt={title}></img>
            </Link>
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

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    teacher: PropTypes.string
}

CourseCard.defaultProps = {
    title: 'No Course',
    image: 'https://topekacivictheatre.com/wp-content/uploads/2019/01/no-image.jpg',
    price: '0',
    teacher: '-'
}

export default CourseCard;