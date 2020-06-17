import React from 'react';
import { Feather } from '@expo/vector-icons'

import { Container, Header, Title, Card, CardHeader, Avatar, Bold, Description, CardBody, UserName, CardFooter, Details, Value, Divider, Date } from './styles'

import avatar from '../../images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@Gabriel_Leite</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Gabriel Leite</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 16,00</Value>
                        <Divider />

                        <Feather name="lock" color="#fff" />
                        <Date>Há 2 anos</Date>
                    </Details>
                </CardFooter>
            </Card>
        </Container>
    );
}
