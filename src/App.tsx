import React, { useState } from 'react';
import ParticleImage, { forces, Array2D, RGBA, ParticleOptions, Vector } from 'react-particle-image'
import ReactResizeDetector from 'react-resize-detector';
import Sidebar from './Sidebar'
import Hamburger from './Hamburger'
import styles from './App.module.css'

const REACT_LOGO_URL = 'logo512.png'
const GOOGLE_URL = 'google.png'
const COFFEE_URL = 'coffee.png'
const COLOR_WHEEL_URL = 'color-wheel.jpeg'

const sources = [REACT_LOGO_URL, COFFEE_URL, GOOGLE_URL, COLOR_WHEEL_URL]

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
  },
  [COLOR_WHEEL_URL]: {
    radius: ({x, y, image}: ParticleOptionParams) => {
      const center = new Vector(image.getWidth() / 2, image.getHeight() / 2) 
      return center.subtract(new Vector(x, y)).getMagnitude() / 200
    },
    mass: () => 50,
    filter: ({x, y, image}: ParticleOptionParams) => {
        const pixel = image.get(x, y)
        const magnitude = (pixel.r + pixel.g + pixel.b) / 3 / 255 * pixel.a / 255
        return magnitude < .9
    },
    color: ({x, y, image}: ParticleOptionParams) => {
      const pixel = image.get(x, y)
      return `rgba(${pixel.r}, ${pixel.g}, ${pixel.b}, ${pixel.a})`
    },
    friction: () => .2,
    initialVelocity: ({image}) => new Vector((Math.random() - .5)*100, (Math.random() - .5)*100)
}
}

type BackgroundOptionsMap = {
  [key: string]: string
}

const backgroundOptionsMap: BackgroundOptionsMap = {
  [REACT_LOGO_URL]: 'rgba(31,31,31,1)',
  [GOOGLE_URL]: '#E6E3CC',
  [COFFEE_URL]: 'rgb(118, 93, 138)',
  [COLOR_WHEEL_URL]: 'rgb(255, 233, 126)'
}

type Dimensions = {
  width: number,
  height: number
}

const App: React.FC = () => {
  const [srcIndex, setSrcIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const incrementSrcIndex = () => {
    setSrcIndex(prev => (prev + 1) % sources.length)
  }

  const src: string = sources[srcIndex]

  return (

    <div className={styles.content} style={{height: '100vh'}}>
      <div className={styles.header}>
        <p className={styles.title}>PARTICLE IMAGE</p>
        <Hamburger className={styles.hamburger} onClick={() => setSidebarOpen(prev => !prev)} open={sidebarOpen}/>
      </div>
      <Sidebar open={sidebarOpen}>
        <div style={{background: 'white', height: '100%'}}>

        </div>
      </Sidebar>
      <ReactResizeDetector handleWidth handleHeight>
        {({ width, height }: Dimensions) => {
          if (width && height)  {
            return (
              <ParticleImage style={{transition: 'background-color 1.2s ease-out'}} backgroundColor={backgroundOptionsMap[src]} src={src} maxParticles={5000} height={height} width={width} particleOptions={particleOptionsMap[src]} scale={.9} entropy={20} interactiveForce={(x: number, y: number) => forces.whiteHole(x, y)}/>
            )
          }
          return <div />
        }}
      </ReactResizeDetector>
      <div className={styles.footer}>
        <p className={styles.imgInfo}>REACT LOGO</p>
        <div className={styles.nav}>
          <span>PREV</span>
          <span>NEXT</span>
        </div>
        <p className={styles.imgInfo}>GITHUB</p>
      </div>
    </div>
  );
}

export default App;
