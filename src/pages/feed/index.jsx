import React from "react";
import Card from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighLight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighLight> #RANKING TOP 5 DA SEMANA</TitleHighLight>
            <UserInfo percentual={90} nome="Miguel José Delgado" image="https://avatars.githubusercontent.com/u/161530317?v=4"/>
            <UserInfo percentual={42} nome="Miguel José Delgado" image="https://avatars.githubusercontent.com/u/161530317?v=4"/>
            <UserInfo percentual={35} nome="Miguel José Delgado" image="https://avatars.githubusercontent.com/u/161530317?v=4"/>
            <UserInfo percentual={10} nome="Miguel José Delgado" image="https://avatars.githubusercontent.com/u/161530317?v=4"/>
            <UserInfo percentual={73} nome="Miguel José Delgado" image="https://avatars.githubusercontent.com/u/161530317?v=4"/>
        </Column>        
      </Container>
    </>
  );
};

export default Feed;
