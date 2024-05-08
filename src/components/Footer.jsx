// import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  const gitHubUrl = "https://github.com/BhargaviBonam"

  return (
    <div id="footer" className="footer">
        <span>by <a href={gitHubUrl}></a> Bhargavi- {year}</span>
    </div>
  )
}

export default Footer