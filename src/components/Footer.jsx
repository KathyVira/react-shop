import React from 'react'

function Footer() {
  return (
    <>
      <footer className="page-footer purple darken-1">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/KathyVira/react-shop"
              targer="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export { Footer }
