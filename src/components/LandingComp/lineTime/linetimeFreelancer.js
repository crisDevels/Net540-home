import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
  from {
    opacity: 0;
    filter: blur(5px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
`

const AnimationDiv = styled.div`
  animation: ${fadein} 1s linear;
  margin: 50px 0;
`

const DivWrapper = styled.div`
  max-width: 1200px;
  flex: 1;
  margin: 0 auto;
  display: inherit;
  justify-content: inherit;
  height: inherit;
  flex-wrap: inherit;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  @media screen and (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const NumberContainer = styled.div`
  background: #1daeff;
  position: relative;
  width: 100px;
  height: 100px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, .25);
  border-radius: 50%;
`

const PNumber = styled.div`
  position: absolute;
  left: 0;
  top: -20px;
  font-size: 120px;
  color: #f1f1f1;
  font-weight: 700;
`

const ContainerStep = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 100%;
    display: grid;
    justify-content: center
  }
`

const ContainerLine = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`

const FlexStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 769px) {
    display: block;
    display: grid;
    justify-content: center
  }
`

const AlignCircle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 769px) {
    display: block;
    width: auto;
  }
`

const DivCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c4c4c4;
  @media screen and (max-width: 769px) {
    margin: 10px
  }
`

const GridNock = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(20px, auto);
`

const TitleNock = styled.h3`
  color: #1daeff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`

const DescriptionNock = styled.p`
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`

const Step = (props) => {
  return (
    <ContainerStep>
      <NumberContainer>
        <PNumber>{props.number}</PNumber>
      </NumberContainer>
    </ContainerStep>
  )
}

const Line = () => {
  return (
    <ContainerLine>
      <AlignCircle>
        <DivCircle></DivCircle>
        <DivCircle></DivCircle>
        <DivCircle></DivCircle>
      </AlignCircle>
    </ContainerLine>
  )
}

const Nock = (props) => {
  return (
    <ContainerStep>
      <GridNock>
        <TitleNock>{props.title}</TitleNock>
        <DescriptionNock>{props.description}</DescriptionNock>
      </GridNock>
    </ContainerStep>
  )
}

export const LineTimeFreelancer = () => {
  return (
    <AnimationDiv>
      <DivWrapper>
        <Grid>
          <FlexStep>
            <Step number='1' />
            <Line/>
            <Step number='2' />
            <Line/>
            <Step number='3' />
            <Line/>
            <Step number='4' />
            <Line/>
            <Step number='5' />
          </FlexStep>
          <FlexStep>
            <Nock title='Registrate' description='Completa el formulario y forma parte de la comunidad' />
            <Nock title='Adjunta tu HV' description='Tu hoja de vida genera un 61% más de confianza para los contratantes' />
            <Nock title='Visualizamos tu perfil' description='Nuestro equipo establece los servicios ideales según tu perfil' />
            <Nock title='Evalua propuestas' description='Realizamos la conexión entre clientes y freelancers' />
            <Nock title='Trabaja y cobra' description='Entrega trabajos de alta calidad y sube tu rank' />
          </FlexStep>
        </Grid>
      </DivWrapper>
    </AnimationDiv>
  )
}