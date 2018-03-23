import React from 'react';
import style from 'styled-components';

const Square = style.div`
    height: 100px;
    width: 100px;
    box-sizing: border-box;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.selected ? "gray" : "transparent"}
`

const Tile = (props) => {
    return (
        <div onClick={props.onClick}>
            <Square selected={props.selected}>
                {props.children}
            </Square>
        </div>
    );
};


export default Tile;