import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Container, Header, Title, Card, CardHeader, Avatar, Bold, Description, CardBody, UserName, CardFooter, Details, Value, Divider, Date, Actions, Option, OptionLabel } from './styles'

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

                        <Feather name="lock" color="#fff" size={14} />
                        <Date>Há 2 anos</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons size={14} name="comment-outline" color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign size={14} name="hearto" color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
