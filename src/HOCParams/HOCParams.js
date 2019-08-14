import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps =({...args}) => WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent {...args} />
    }
  }
}
