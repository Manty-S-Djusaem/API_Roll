import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    color: 'white',
    fontSize: '20px',
};

const HomePage = () => {
    return (
        <div>
            <h2 style={styles}>Выберите кубик для броска:</h2>
            <ul>
                <li><Link to="/d4">d4</Link></li>
                <li><Link to="/d6">d6</Link></li>
                <li><Link to="/d8">d8</Link></li>
                <li><Link to="/d10">d10</Link></li>
                <li><Link to="/d12">d12</Link></li>
                <li><Link to="/d20">d20</Link></li>
                <li><Link to="/d100">d100</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;
