import { useState } from 'react';

const MENULISTS = [
    'home',
    'post',
    'get',
    'delete'
];


export const Menu = () => {
    return (
    <div>
        {
            MENULISTS.map((list, index) => {
                return  <ul><li key={index}>{list}</li></ul>
            })
        }
    </div>
    )
}