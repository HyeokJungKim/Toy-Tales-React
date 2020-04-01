import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  console.log(props)
  
  let toysArray = props.toys.map((oneToy) => {

    return <ToyCard
      key={oneToy.name}
      toy={oneToy}
      updateToy={props.updateToy}
      deleteToy={props.deleteToy}
    />
  })
  
  return(
    <div id="toy-collection">
      {toysArray}
    </div>
  );
}

export default ToyContainer;
