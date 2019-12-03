import React from 'react';
import {NavLink} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const NavBar = () => {
    return (
        <div>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
            <NavLink to={ROUTES.LOGIN}>Login</NavLink>
            <NavLink to={ROUTES.SIGN_UP}>Sign Up</NavLink>
            <NavLink to={ROUTES.MOVIES}>Movies</NavLink>
        </div>
    );
}

export default NavBar;