import React, { useState } from 'react';
import ParticleImage, { forces, Array2D, RGBA, ParticleOptions, Vector } from 'react-particle-image'
import ReactResizeDetector from 'react-resize-detector';
import Sidebar from './Sidebar'
import Hamburger from './Hamburger'
import ArrowButton from './ArrowButton'
import { pad } from './utils'
import styles from './App.module.css'

const REACT_LOGO_URL = 'logo512.png'
const GOOGLE_URL = 'google.png'
const COFFEE_URL = 'coffee.png'
const COLOR_WHEEL_URL = 'color-wheel.jpeg'

const sources = [REACT_LOGO_URL, COFFEE_URL, COLOR_WHEEL_URL]

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
        color: () => '#61dafb',
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
      return center.subtract(new Vector(x, y)).getMagnitude() / 200 + .1
    },
    mass: () => 50,
    filter: ({x, y, image}: ParticleOptionParams) => {
        const pixel = image.get(x, y)
        const magnitude = (pixel.r + pixel.g + pixel.b) / 3 / 255 * pixel.a / 255
        return magnitude < .8
    },
    color: ({x, y, image}: ParticleOptionParams) => {
      const pixel = image.get(x, y)
      const alpha = (pixel.r + pixel.g + pixel.b) / 3 / 255 * pixel.a
      return `orange`
    },
    friction: () => .23,
    initialVelocity: ({image}) => new Vector((Math.random() - .5)*1000, (Math.random() - 1)*1000)
}
}

type Dimensions = {
  width: number,
  height: number
}

const App: React.FC = () => {
  const [srcIndex, setSrcIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const next = () => {
    setSrcIndex(prev => (prev + 1) % sources.length)
  }

  const prev = () => {
    setSrcIndex(prev => {
      if (prev === 0) {
        return sources.length - 1
      }
      else {
        return (prev - 1) % sources.length
      }
    })
  }

  const src: string = sources[srcIndex]

  return (

    <div className={styles.content} style={{height: '100vh'}}>
      <div className={styles.header}>
        <p className={styles.title}>PARTICLE IMAGE</p>
        <Hamburger className={styles.hamburger} onClick={() => setSidebarOpen(prev => !prev)} open={sidebarOpen}/>
      </div>
      <Sidebar open={sidebarOpen}>
        <div className={styles.sidebar}>
          Coming soon
        </div>
      </Sidebar>
      <ReactResizeDetector handleWidth handleHeight>
        {({ width, height }: Dimensions) => {
          if (width && height)  {
            return (
              <ParticleImage backgroundColor="rgb(31, 31, 31)" src={src} maxParticles={4500} height={height} width={width} particleOptions={particleOptionsMap[src]} scale={.85} entropy={20} interactiveForce={(x: number, y: number) => forces.whiteHole(x, y)}/>
            )
          }
          return <div />
        }}
      </ReactResizeDetector>
      <div className={styles.footer}>
        <p className={styles.imgInfo}>{pad(sources.indexOf(src) + 1, 2)} / {pad(sources.length, 2)}</p>
        <div className={styles.nav}>
          <ArrowButton onClick={prev} className={styles.navArrow} arrowPlacement="left" arrowDirection="left" text="PREV" />
          <ArrowButton onClick={next} className={styles.navArrow} arrowPlacement="right" arrowDirection="right" text="NEXT" />
        </div>
        <a href="https://github.com/malerba118/react-particle-image" target="_blank" className={styles.links}>GITHUB</a>
      </div>
    </div>
  );
}

export default App;
