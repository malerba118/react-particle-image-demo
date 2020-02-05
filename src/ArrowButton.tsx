import React, { FC, useState, HTMLProps } from "react";
import Arrow from '@elsdoerfer/react-arrow';

interface Props extends HTMLProps<HTMLDivElement> {
    text: string;
    arrowPlacement: 'left' | 'right';
    arrowDirection: 'left' | 'right';
    color?: string;
    width?: number;
}

const ArrowButton: FC<Props> = ({text, arrowPlacement, arrowDirection, color = 'white', width = 80, ...otherProps}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div {...otherProps} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width}}>
     {arrowPlacement === 'left' && (
       <Arrow
        angle={arrowDirection === 'left' ? -90 : 90}
        length={width}
        color={color}
        style={{
          width: hovered ? width : 0,
          transition: 'width .3s'
        }}
      />
     )}
      <span style={{margin: 0}}>{text}</span>
      {arrowPlacement === 'right' && (
        <Arrow
          angle={arrowDirection === 'left' ? -90 : 90}
          length={width}
          color={color}
          style={{
            width: hovered ? width : 0,
            transition: 'width .3s'
          }}
        />
      )}
    </div>
  )
}

export default ArrowButton