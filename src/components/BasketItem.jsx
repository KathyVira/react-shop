import React, { useContext } from 'react'
import { ShopContext } from '../context'

function BasketItem(props) {
  const { id, name, price, quantity } = props
  const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext)

  return (
    <>
      <div className="grid-item">{name}</div>
      <div className="grid-item">
        {' '}
        <i
          className="material-icons basket-remove basket-quantity "
          onClick={() => decQuantity(id)}
        >
          remove
        </i>
      </div>
      <div className="grid-item">{quantity}</div>
      <div className="grid-item">
        <i
          className="material-icons basket-add basket-quantity"
          onClick={() => incQuantity(id)}
        >
          add
        </i>
      </div>
      <div className="grid-item"> {price * quantity} $</div>
      <div className="grid-item">
        <span
          className="secondary-content"
          onClick={() => removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">delete</i>
        </span>
      </div>
    </>
  )
}

export { BasketItem }
