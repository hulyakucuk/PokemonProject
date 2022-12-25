import React from 'react'
import { MainContainer } from './style'
const Container = (props) => {
  return (
    <MainContainer>
      {props.children}
    </MainContainer>
  )
}

export default Container

