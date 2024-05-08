import {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import QuoteBox from './components/QuoteBox'
import Footer from './components/Footer'
import GithubCorner from './components/GithubCorner/GithubCorner'

function App() {
 
  const [quote, setQuote] = useState({ text: '', author: '' })

  const devQuotesURL = 
  'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/Data/quotes.json'

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    fetch(devQuotesURL)
      .then(res => res.json())
      .then(data => {
        const filteredQuotes = data.filter(quote => quote.en.length <= 200)
        const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)]
  
        setQuote({
          text: randomQuote.en,
          author: randomQuote.author
        })
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }
  
  return (
    <div className='main'>
      <Header 
        devQuotesURL={devQuotesURL}
      />
      <QuoteBox 
        quote={quote}
        getQuote={getQuote}
      />
      <Footer />
      <GithubCorner
          targetURL="https://github.com/suongfiori/random-quote-machine"
          color="#fff"
          backgroundColor="rgb(74, 171, 224)"
          position="right"
          size="100px"
          ariaLabel="View source on Github"
        />
    </div>
  )
}

export default App
