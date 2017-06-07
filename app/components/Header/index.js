/**
 * Created by DALI on 7/06/17.
 */
import React from 'react';
import { Navbar, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import 'public/styles/header.css'

class Header extends React.Component {
    render() {
        return (
            <Navbar className="navbar-fixed-top" id="navbar" inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link className="header-brand" to="/" ><b>Ruby</b>&nbsp;China</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <ul id="nav" className="nav navbar-nav">
                        <li><Link to='/topics'>社区</Link></li>
                        <li><Link to='/wiki'>Wiki</Link></li>
                        <li><Link to='/sites'>酷站</Link></li>
                        <li><Link to='/homeland'>Homeland</Link></li>
                        <li><Link to='/jobs' >招聘</Link></li>
                        <li><a href='https://gems.ruby-china.org' target="_blank">Gems</a></li>
                    </ul>

                </Navbar.Collapse>
            </Navbar>

        )
    };
}

export default Header;
