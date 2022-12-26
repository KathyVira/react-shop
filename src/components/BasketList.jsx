import React, { useContext } from 'react'
import { ShopContext } from '../context'
import { BasketItem } from './BasketItem'

function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } = useContext(
    ShopContext,
  )
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)
  return (
    <div className="collection basket-list ">
      <div className="collection-item basket-head  grid-container">
        <div className="grid-item text-bold">Product name</div>
        <div className="grid-item text-bold"> </div>
        <div className="grid-item text-bold">Quantity </div>
        <div className="grid-item text-bold"> </div>
        <div className="grid-item text-bold">Cost </div>

        <div className="grid-item">
          <i className="material-icons backet-close" onClick={handleBasketShow}>
            close
          </i>
        </div>

        {order.length ? (
          order.map((item) => <BasketItem key={item.id} {...item} />)
        ) : (
          <div className="collection-item active">Cart is empty</div>
        )}
      </div>
      <div className="collection-item active">Total cost: {totalPrice} $</div>
      <div className="collection-item ">
        <button className="secondary-content btn btn-small grid-item">
          Place Order
        </button>
      </div>
    </div>
  )
}

export { BasketList }
