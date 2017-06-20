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
            <Navbar className="navbar-fixed-top navbar navbar-default" id="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link className="header-brand" to="/" ><b>Ruby</b>&nbsp;<b>China</b></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <ul id="nav" className="nav navbar-nav">
                        <li><Link to='/topics'>community</Link></li>
                        <li><Link to='/wiki'>Wiki</Link></li>
                        <li><Link to='/sites'>Sites</Link></li>
                        <li><Link to='/homeland'>Homeland</Link></li>
                        <li><Link to='/jobs' >Careers</Link></li>
                        <li><a href='https://gems.ruby-china.org' target="_blank">Gems</a></li>
                    </ul>
                    <ul className="nav user-bar navbar-nav navbar-right">
                        <li><Link to='/register'>Login</Link></li>
                        <li><Link to="/login">Sign In</Link></li>
                    </ul>
                    <Navbar.Form pullRight>
                        <div className="header-search">
                            <Link to="/"><Glyphicon glyph="search"/></Link>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                        </div>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>

        )
    };
}

export default Header;
