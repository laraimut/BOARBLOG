import React from 'react';
import {Animated, View, asset} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


class FlyingPlane extends React.Component{
    translateZ = new Animated.Value(0);

    componentWillReceiveProps(props){
        this.translateZ.setValue(0);
        Animated.timing(this.translateZ, {toValue:-10, duration: 200}).start();
    }

    render(){
        this.translateZ.setValue(0);
        Animated.timing(this.translateZ, {toValue:-100, duration: 20000}).start();
        return(
            <View>
          
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, 0]}]}}
        />
        <AnimatedEntity
          style={{transform: [{translateX:this.translateZ},{translateZ: this.translateZ},{rotateY:130},{scale: 0.02}]}}
          source={{ obj: asset('1357 Hang Glider.obj'),
          mtl: asset('1357 Hang Glider.mtl'),
          }}
        />
            </View>
        );
    }
}

export default FlyingPlane;