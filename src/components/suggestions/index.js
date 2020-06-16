import React from 'react';

//styles
import { Container, Option, Img, Label } from './styles';
//imgs
import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

const items = [
    {
        key: String(Math.random()),
        img: img1,
        label: 'doações'
    },
    {
        key: String(Math.random()),
        img: img2,
        label: 'doações'
    },
    {
        key: String(Math.random()),
        img: img3,
        label: 'doações'
    },
    {
        key: String(Math.random()),
        img: img4,
        label: 'doações'
    },
    {
        key: String(Math.random()),
        img: img5,
        label: 'doações'
    },
    {
        key: String(Math.random()),
        img: img6,
        label: 'doações'
    },
    {
        key: String(Math.random()),
        img: img7,
        label: 'doações'
    },
]
export default function Suggestions() {
    return (
        <Container horizontal>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img} />
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
    )
}