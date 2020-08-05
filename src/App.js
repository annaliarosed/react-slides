import React, {useState, useEffect} from 'react'
import './App.css'

const slides = [
    {
        text: "1", 
        color: "#fe8e79",
        key: '1'
    },
    {
        text: "2",
        color: "#fd7860", 
        key: '2'  
    },
    {
        text: "3",
        color: "#fd6347",
        key: '3'
    }
  ]

const App = () => {
    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    
    useEffect(() => {
            window.addEventListener('keydown', listener)
        return () => {
            window.removeEventListener('keydown', listener)
        }
    }, [activeSlideIndex])
    
    const nextSlide = () => {
        if (activeSlideIndex + 1 < slides.length) {
            setActiveSlideIndex(prevState => prevState + 1)
        }   else {
            setActiveSlideIndex(slides.length - slides.length)
        }
    }
    
    const prevSlide = () => {
        if (activeSlideIndex > 0) {
            setActiveSlideIndex(prevState => prevState - 1)
        } else {
            setActiveSlideIndex(slides.length - 1)
        }
    }
    
    const listener = (e) => {
        if (e.keyCode === RIGHT_ARROW) {
            nextSlide()
        } else if (e.keyCode === LEFT_ARROW) {
            prevSlide()
        }
    }
    
   return (
    <div 
      className="wrapper" 
      style={{backgroundColor: slides[activeSlideIndex].color}}
    >
      {slides.map((slide, index) => {
          return <div
                      key={slide.key}
                      className={activeSlideIndex === index ? "active-slide" : "idle-slide"}  
                  >
                      {slide.text}
                  </div>
      })}  
      <div className="arrow-wrapper">
          <span onClick={prevSlide}>🡨</span>
          <span onClick={nextSlide}>🡪</span>
      </div>
      <footer className="buttons">
          {slides.map((slide, index) => {
            return <button 
                  className={activeSlideIndex === index ? "active-button" : 'idle-button'}
                  key={slide.key}
                  onClick={() => setActiveSlideIndex(index)}
              />
          })}
      </footer>
    </div>    
  )
}

export default App
