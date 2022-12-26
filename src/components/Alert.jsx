import React, { useEffect, useContext } from 'react'
import { ShopContext } from '../context'

function Alert() {
  const {
    alertName: name = '',
    hendlerCloseAllert = Function.prototype,
  } = useContext(ShopContext)
  useEffect(() => {
    const timerId = setTimeout(hendlerCloseAllert, 3000)
    return () => {
      clearTimeout(timerId)
    }
    //eslint-disable-next-line
  }, [name])
  return (
    <div className="" id="toast-container">
      <div className="toast">{name} addet to the basket</div>
    </div>
  )
}

export { Alert }
