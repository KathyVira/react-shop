import React from 'react'

function Header() {
  return (
    <>
      <nav className="purple darken-4">
        <div className="nav-wrapper ">
          <a href="/" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/KathyVira/react-shop"
                targer="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export { Header }
