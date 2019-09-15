import React from 'react';
import {
  View,
  asset,
  AmbientLight,
  PointLight,
  Animated
} from 'react-360';

import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class Cloud extends React.Component {
    rotateY = new Animated.Value(0);
  render() {
    this.rotateY.setValue(0);
    Animated.timing(this.rotateY, {toValue:360, duration: 20000}).start();
    return (
      <View>
        <AmbientLight intensity={0.5}/>
         <PointLight
          style={{
            color: 'purple',
            transform: [
              {translate: [0, 3, -1]}
            ]
          }}
          />
        
        <AnimatedEntity
        source={{ obj: asset('sun.obj'),
        mtl: asset('sun.mtl'),

        }}

        lit={true}
        style={{
          color: "#FFF",
          transform: [
            {translate: [2, 6 ,0]},
            {rotateY:this.rotateY},
            {scale: 0.5}
          ]
        }}
        />
        {/* <Text>It's a Sunny day!</Text> */}
      </View>
    );
  }
};

