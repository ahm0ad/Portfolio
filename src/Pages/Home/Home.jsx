import "./Home.css";
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const sentences  = [
    { text: "CoDe", style: { color: 'red' } },
    { text: "2", style: { color: 'red' } },
    { text: "Go", style: { color: 'red' } },
  ];

  const [sentencesIndex, setSentencesIndex] = useState(0);

  useEffect(()=>{
    const timer = setTimeout(()=> {
      setSentencesIndex((prevIndex)=>(prevIndex + 1)% sentences.length);
    }, 100000000);
    return () => clearTimeout(timer);
  },[sentences.length, sentencesIndex]);

  const props = useSpring({
    opacity: 0,
    transform: 'translateY(100%)',
    from: { opacity: 1, transform: 'translateY(0%)' },
    reset: true,
    onRest: () => setSentencesIndex((prevIndex) => (prevIndex + 1) % sentences.length)
  });

  return (
    <div className="home">
      <animated.h3 className="breaking-text" style={{ ...props, ...sentences[sentencesIndex].style }}>
        {sentences[sentencesIndex].text.split('').map((char, index) => (
          <animated.span key={index}>{char}</animated.span>
        ))}
      </animated.h3>
    </div>
  )
}

export default Home