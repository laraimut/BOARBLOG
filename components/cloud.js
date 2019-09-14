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
        source={{ obj: asset('meRobot.obj'),
        mtl: asset('meRobotmaterials.mtl'),
        }}

        lit={true}
        style={{
          color: "#FFF",
          transform: [
            {translate: [0, -0.6, -0.5]},
            {rotateY:this.rotateY},
            {scale: 0.2}
          ]
        }}
        />
      </View>
    );
  }
};

