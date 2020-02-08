import React, { useState } from 'react';
import ParticleImage, { forces, Array2D, RGBA, ParticleOptions, Vector } from 'react-particle-image'
import ReactResizeDetector from 'react-resize-detector';
import Sidebar from './Sidebar'
import Hamburger from './Hamburger'
import ArrowButton from './ArrowButton'
import Controls, { Values as ControlsValues} from './Controls'
import { pad } from './utils'
import styles from './App.module.css'

const REACT_LOGO_URL = 'logo512.png'
const COFFEE_URL = 'coffee.png'
const COLOR_WHEEL_URL = 'color-wheel.jpeg'

const defaultScale = Math.min(Math.max(window.innerWidth / 1300, .5), .85)

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
      radius: () => (Math.random()*1.4 + .5) * defaultScale,
      mass: () => 40,
      filter: ({x, y, image}: ParticleOptionParams) => {
          const pixel = image.get(x, y)
          return pixel.b > 50
      },
      color: () => '#61dafb',
      friction: () => .15
  },
  [COFFEE_URL]: {
    radius: () => (Math.random()*1.4 + .5) * defaultScale,
    mass: () => 80,
    filter: ({x, y, image}: ParticleOptionParams) => {
        const pixel = image.get(x, y)
        const magnitude = (pixel.r + pixel.g + pixel.b) / 3 / 255 * pixel.a / 255
        return magnitude < .9
    },
    color: ({x, y, image}: ParticleOptionParams) => {
      return 'white'
    },
    friction: () => .15
  },
  [COLOR_WHEEL_URL]: {
    radius: ({x, y, image}: ParticleOptionParams) => {
      const center = new Vector(image.getWidth() / 2, image.getHeight() / 2) 
      return (center.subtract(new Vector(x, y)).getMagnitude() / 200 + .1) * defaultScale
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
  const [params, setParams] = useState<ControlsValues>({entropy: 20, scale: defaultScale, numParticles: 4500})

  const setParam = (key: string, val: any) => {
    setParams(prev => ({...prev, [key]: val}))
  }

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
    <div className={styles.content} onScroll={e => {e.stopPropagation(); e.preventDefault()}}>
      <div className={styles.header}>
        <p className={styles.title}>PARTICLE IMAGE</p>
        <Hamburger className={styles.hamburger} onClick={() => setSidebarOpen(prev => !prev)} open={sidebarOpen}/>
      </div>
      <Sidebar open={sidebarOpen}>
        <div className={styles.sidebar}>
          <Controls values={params} onChange={setParam}/>
        </div>
      </Sidebar>
      <ReactResizeDetector handleWidth handleHeight>
        {({ width, height }: Dimensions) => {
          if (width && height)  {
            return (
              <ParticleImage key={`${params.numParticles}`} backgroundColor="rgb(31, 31, 31)" src={src} maxParticles={params.numParticles} height={height} width={width} particleOptions={particleOptionsMap[src]} scale={params.scale} entropy={params.entropy} interactiveForce={(x: number, y: number) => forces.whiteHole(x, y)}/>
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
