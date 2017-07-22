import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Button extends Component {

  handleClick = () => {
    this.props.onPress(1)
  }

  render() {
    const { title, onPress, style, textColor } = this.props
    const example = 'Changed Title'
    return (
      <TouchableOpacity
        style={style}
        onPress={this.handleClick}>
        <Text
          style={{color:textColor}}
          >{title}
        </Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  style: PropTypes.obj,
  title: PropTypes.string,
  onPress: PropTypes.func,
}

Button.defaultProps = {
  textColor:'#FFF',
  style: {
    padding:5,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#F62459',
    backgroundColor:'#DB0A5B',
    },
  title: 'Increment Button',
  onPress: ()=> alert("Clicked Button"),
}
