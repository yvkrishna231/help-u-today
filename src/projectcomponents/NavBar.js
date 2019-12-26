import React from 'react';
import { NavLink } from 'react-router-dom';
import shield from './shield.jpg'

class NavBar extends React.Component {
    render() {
        return (
            <div className='p-0 col-lg-12 col-sm-12 col-12'>
                <nav className="p-1 navbar navbar-expand-sm bg-dark navbar-dark" >
                    <img
                        style={{ borderRadius: '50%' }}
                        className='mr-2 bg-dark'
                        src={shield} alt='basic iamge'
                        height='35px'
                        width='35px' />


                    <NavLink
                        to='/'
                        className='navbar-brand pt-0'
                        activeClassName='highlight'
                    >
                        Help-U-Today
                    </NavLink>

                    <button className='navbar-toggler'>
                        <span className='navbar-toggler-icon' data-toggle='collapse' data-target='#navbarmenu'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarmenu'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink
                                    to='/about'
                                    activeClassName='highlight'
                                    className='nav-link pl-0'>
                                    ABOUT
                            </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/helpcenter'
                                    activeClassName='highlight'
                                    className='nav-link'>
                                    HELP_CENTER
                            </NavLink>
                            </li>

                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <form className='form-inline mr-1'>
                                <input className='form-control mr-1' placeholder='search bar' />
                                <button className='btn btn-outline-info  ml-2 my-sm-0'>SUBMIT</button>
                            </form>
                            <li className='nav-item'>
                                <NavLink
                                    to='/secondpage'
                                    activeClassName='highlight'
                                    className='nav-link p-0 pt-2 ml-2'>
                                    SIGN_IN /
                            </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/thirdpage'
                                    activeClassName='highlight'
                                    className='nav-link p-0 pt-2 ml-2 mr-2'>
                                    LOGIN
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;