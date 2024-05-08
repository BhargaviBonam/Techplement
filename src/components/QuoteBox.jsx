import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

const QuoteBox = ({ quote, getQuote }) => {

  const tweetURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
  const encodedQuote = encodeURIComponent(`"${quote.text}" - ${quote.author}`);

  return (
    <>
      <Helmet>
        <title>Random Quotes Generator - Quote Box</title>
        <meta name="description" content={`"${quote.text}" - ${quote.author}`} />
      </Helmet>

      <div id="quote-box">
        <div id="text" className='text'>
          <h3 className='quote' style={{ color: "black" }}>
            {quote.text}
          </h3>
          <p id="author" className='author' style={{color:'gray'}}>- {quote.author}</p>
        </div>
        <div className='tweet'>
          <button id="new-quote" onClick={getQuote} className='btn'><span>New quote</span></button>
          <a
            id="tweet-quote"
            href={tweetURL + encodedQuote}
            target="_blank"
            rel="noopener noreferrer" // Corrected noreferrer to noopener noreferrer
          >
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
          </a>
        </div>
      </div>
    </>
  )
}

export default QuoteBox;

