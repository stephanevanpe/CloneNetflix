import React from 'react';
import './styles.css';

import {NavLink } from "react-router-dom";


export default ({black})=>{
    
    return (
					<header className={black ? 'black' : ''}>
						<div className='header--logo'>
							<img src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png' alt='' />
						</div>

						<NavLink to='/' className={'link'}>
							Accueil
						</NavLink>
						<NavLink to='/TVshow' className={'link'}>
							Séries TV
						</NavLink>
						<NavLink to='/Movies' className={'link'}>
							Films
						</NavLink>
						<NavLink to='/RecentlyReleased' className={'link'}>
							Dernièrement Sorti
						</NavLink>
						<NavLink to='#' className={'link'}>
							Ma Liste
						</NavLink>
						<NavLink to='/KIDS' className={'link'}>
							KIDS
						</NavLink>
						<div className='header--user'>
							<img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='Profile' />
						</div>
					</header>
				);
}