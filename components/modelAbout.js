import React from 'react';
import {
  View,
  asset,
  AmbientLight,
  PointLight
} from 'react-360';

import Entity from 'Entity';

export default class React3DView extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={0.2}/>
         <PointLight
          style={{
            color: 'purple',
            transform: [
              {translate: [0, 3, -1]}
            ]
          }}
          />
        
        <Entity
        source={{ obj: asset('model.obj'),
        mtl: asset('materials.mtl'),
        }}

        lit={true}
        style={{
          color: "#FFF",
          transform: [
            {translate: [0, -0.4, -1]},
            {scale: 0.5}
          ]
        }}
        />
      </View>
    );
  }
};

