import React, { useEffect, useState } from 'react';

const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500); 
    
    return () => clearInterval(interval);
  }, [text]);

  return <h1 className="snippet-lab-title">{displayedText}</h1>;
};

export default AnimatedText;
