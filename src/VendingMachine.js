import React from 'react';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './VendingMachine.css';

function VendingMachine() {
    return(
        <div className='vending'>
            <BrowserRouter>
                <Route exact path='/'>
                    <div className='vending'>    
                    <h1>Vending Machine!</h1>
                    <div className='choices'>
                        <li><Link to='/chips'>Chips</Link></li>
                        <li><Link to='/soda'>Soda</Link></li>
                        <li><Link to='/candy'>Candy</Link></li>
                    </div>
                    <div>
                        <img src="https://cdn.w600.comps.canstockphoto.com/vector-cartoon-illustration-of-a-vending-vector-clipart_csp78333806.jpg" />
                    </div>
                    </div>
                    
                </Route>

                    <Route exact path='/chips'>
                        <Chips />
                        <Link to='/'>Home</Link>
                    </Route>

                    <Route exact path='/soda'>
                        <Soda />
                        <Link to='/'>Home</Link>
                    </Route>

                    <Route exact path='/candy'>
                        <Candy />
                        <Link to='/'>Home</Link>
                    </Route>

            </BrowserRouter>
        </div>
    );
}

export default VendingMachine;