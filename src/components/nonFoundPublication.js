import React from 'react'
import styled from 'styled-components'

import ILUnotFOUND from '../images/not-found-ILU.png'

const FlexComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const BlockComponent = styled.div`
  width: 80%;
  text-align: center;
`

const PnotFound = styled.div`
  font-size: 16px;
  color: #757575;
`

export const NotFoundPublication = ({ user='David' }) => {
  return (
    <FlexComponent>
      <BlockComponent>
        <img src={ILUnotFOUND} alt='image see' styled={{width: '100%'}} />
        <PnotFound>{user}, no tenemos publicaciones para tu busqueda, podrías probar con otra palabra.</PnotFound>
      </BlockComponent>
    </FlexComponent>
  )
}