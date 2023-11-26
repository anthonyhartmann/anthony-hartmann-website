import React from 'react'

type SpacerProps = {
    size: number
  }

const Spacer: React.FC<SpacerProps> = (props) => {
    const output = Array(props.size).fill(0).map((num) => (
        <div className="row mb-5"/>
    ))
    return (
      <div>
        {output}
      </div>
    )
}

export default Spacer