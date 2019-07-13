import React from 'react'
import { connect } from 'react-redux'

const CartCounter = ({cart}) => (
    <li>
        <button className='button tiny ghost'>{`Carrito: ${cart.length}`}</button>
    </li>
)

//Mapea el estado global de la app y se le pasa al componente como propiedad
const mapStateToProps = state => (
    {
        cart: state.cart
    }
)

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)