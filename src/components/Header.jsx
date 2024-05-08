const Header = ({ devQuotesURL }) => {

  return (
    <div className='header'>
        <h1 className="title">Random Developer Quotes</h1>
        <p>Using <a href={devQuotesURL}>Rapid API</a></p>
    </div>
  )
}

export default Header