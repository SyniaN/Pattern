import React, { Component } from 'react';
import style from 'styled-components';
import Tile from './components/Tile';
import { isNullOrUndefined } from 'util';

const Wrapper = style.div`
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
`
class App extends Component {

    constructor() {
        super();
        this.swapSquare = this.swapSquare.bind(this);
        this.selectSquare = this.selectSquare.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
    }

    state = {
        tiles: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        selected: { x: 0, y: 0 }
    }

    swapSquare = (x, y) => {
        const l1 = { x: x, y: y }
        const l2 = { x: this.state.selected.x, y: this.state.selected.y }
        const v1 = this.state.tiles[l1.y][l1.x];
        const v2 = this.state.tiles[l2.y][l2.x];

        const array = [...this.state.tiles];
        array[l1.y][l1.x] = v2;
        array[l2.y][l2.x] = v1;

        this.setState({
            tiles: array,
            selected: undefined
        })
    }

    selectSquare = (x, y) => {
        this.setState({ selected: { x: x, y: y } });
    }

    handleTileClick = (x, y) => {
        if (this.state.selected === undefined) {
            this.selectSquare(x, y);
        } else {
            this.swapSquare(x, y);
        }
    }

    render() {
        return (
            <Wrapper>
                {this.state.tiles.map((row, y) => {
                    return row.map((tile, x) => {
                        const isSelected = !isNullOrUndefined(this.state.selected) && x === this.state.selected.x && y === this.state.selected.y
                        return <Tile onClick={() => this.handleTileClick(x, y)} selected={isSelected}> {tile}</Tile>;
                    })
                })}
            </Wrapper>
        );
    }
}

export default App;
