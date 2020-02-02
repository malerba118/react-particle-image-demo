import React, { useState } from 'react';
import './App.css';
import ParticleImage, { forces, Array2D, RGBA, ParticleOptions } from 'react-particle-image'
import ReactResizeDetector from 'react-resize-detector';

const REACT_LOGO_URL = '/logo512.png'
const GOOGLE_URL = '/google.png'
const COFFEE_URL = '/coffee.png'

const sources = [REACT_LOGO_URL, COFFEE_URL, GOOGLE_URL]

interface ParticleOptionParams {
  x: number; 
  y: number; 
  image: Array2D<RGBA>;
}

type ParticleOptionsMap = {
  [key: string]: ParticleOptions
}

const particleOptionsMap: ParticleOptionsMap = {
    [REACT_LOGO_URL]: {
        radius: () => Math.random()*1.5 + .5,
        mass: () => 40,
        filter: ({x, y, image}: ParticleOptionParams) => {
            const pixel = image.get(x, y)
            return pixel.b > 50
        },
        color: () => '#5DD3F9',
        friction: () => .15
    },
    [GOOGLE_URL]: {
        radius: () => Math.random()*1.5 + .5,
        mass: () => 40,
        filter: ({x, y, image}: ParticleOptionParams) => {
            const pixel = image.get(x, y)
            const magnitude = (pixel.r + pixel.g + pixel.b) / 3 / 255 * pixel.a / 255
            return magnitude > .3
        },
        color: ({x, y, image}: ParticleOptionParams) => {
          const pixel = image.get(x, y)
          return `rgba(${pixel.r}, ${pixel.g}, ${pixel.b}, ${pixel.a})`
        },
        friction: () => .15
    },
    [COFFEE_URL]: {
      radius: () => Math.random()*1.5 + .5,
      mass: () => 80,
      filter: ({x, y, image}: ParticleOptionParams) => {
          const pixel = image.get(x, y)
          const magnitude = (pixel.r + pixel.g + pixel.b) / 3 / 255 * pixel.a / 255
          return magnitude < .9
      },
      color: ({x, y, image}: ParticleOptionParams) => {
        return '#E6E3CC'
      },
      friction: () => .15
  }
}

type BackgroundOptionsMap = {
  [key: string]: string
}

const backgroundOptionsMap: BackgroundOptionsMap = {
  [REACT_LOGO_URL]: '#222',
  [GOOGLE_URL]: '#E6E3CC',
  [COFFEE_URL]: 'rgb(118, 93, 138)'
}

type Dimensions = {
  width: number,
  height: number
}

const App: React.FC = () => {
  const [srcIndex, setSrcIndex] = useState(0)

  const incrementSrcIndex = () => {
    setSrcIndex(prev => (prev + 1) % sources.length)
  }

  const src: string = sources[srcIndex]

  return (
    <div className="App" style={{height: '100vh'}} onClick={incrementSrcIndex}>
      <ReactResizeDetector handleWidth handleHeight>
        {({ width, height }: Dimensions) => {
          if (width && height)  {
            return (
              <ParticleImage style={{transition: 'background-color 1.2s ease-out'}} backgroundColor={backgroundOptionsMap[src]} src={src} maxParticles={5000} height={height} width={width} particleOptions={particleOptionsMap[src]} scale={1.2} entropy={10} interactiveForce={(x: number, y: number) => forces.whiteHole(x, y)}/>
            )
          }
          return <div />
        }}
      </ReactResizeDetector>
    </div>
  );
}

export default App;
