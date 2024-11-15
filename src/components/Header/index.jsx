import { Button } from '../Button'
import logo from '../../assets/dio.png'
import React from 'react'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" />
                { autenticado ?(
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Bucar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ):null}
            </Row>
            <Row>
            { autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/161530317?v=4"/>
            ) : (
            <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"></Button>
                <Button title="Cadastrar"></Button>
            </>
            )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
