import * as React from 'react';
import { Component } from 'react';
import Dice from "./Dice";

export interface MainPageProps {
    winnerStatus: string;
}
 
export interface MainPageState {
    
}
 
class MainPage extends React.Component<MainPageProps, MainPageState> {
    constructor(props: MainPageProps) {
        super(props);
        this.state = { winnerStatus: ""  };
    }
    render() { 
        return (<div>
            <p>{this.state.winnerStatus}</p>
            <Dice playerName="Player 1" diceroll={4} />
            <Dice playerName="Player 2" diceroll={2} />
        </div>  );
    }
}
 
export default MainPage;