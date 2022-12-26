import React, { useEffect } from 'react'

function Alert(props) {
  const { name = '', hendlerCloseAllert = Function.prototype } = props
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
