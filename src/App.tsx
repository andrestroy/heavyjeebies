//import { useEffect, useState } from 'react';
import GameMenu from './GameMenu';
import './App.css';

function App() {


    const startGame = () => {
        console.log('Starting game...');
    };

    const options = () => {
        console.log('Opening options...');
    };

    const exitGame = () => {
        console.log('Exiting game...');
    };

    const menuItems = [
        { label: 'Start Game', onClick: startGame },
        { label: 'Options', onClick: options },
        { label: 'Exit Game', onClick: exitGame },
    ];

   

    return (
        <div>
            <h1>Welcome to My Game</h1>
            <GameMenu items={menuItems} />
        </div>
    );

}

export default App;