import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actionCreator';

const CourseCard = ({id, title, image, price, teacher, addCourseToCart, cart, removeCourseFromCart}) => (
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
                {
                    cart.find(a => a === id) 
                        ? <button className="button--ghost-alert button--tiny" onClick={() => removeCourseFromCart(id)}>
                            {'Remover del carrito'}
                          </button>

                        : <button className="button--ghost-alert button--tiny" onClick={() => addCourseToCart(id)}>
                            {
                                (price) + ' USD'
                            }
                         </button>
                }
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

const mapStateToProps = state => ({
    cart: state.cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
    addCourseToCart(id) {
        dispatch(addToCart(id))
    },
    removeCourseFromCart(id) {
        dispatch(removeFromCart(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);