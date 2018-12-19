import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../scss/_header.scss';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,} from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const {title, baseURL, userRole, user, handleNavigation} = this.props;
        return (
            <React.Fragment>
                <Navbar expand="sm" className="header text-white" dark>
                    <div className="container">
                        <NavbarBrand tag={Link} to={baseURL}>
                            {title}
                        </NavbarBrand>

                        <NavbarToggler
                            onClick={event => {
                                this.toggle();
                            }}
                        />

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to={baseURL}>
                                        <i className="fas fa-list" /> View All
                                    </NavLink>
                                </NavItem>
                                {userRole !== null && userRole.displayName === 'DHO' ? '' : <NavItem>
                                    <NavLink tag={Link} to={baseURL + 'submit'} onClick={() => handleNavigation()}>
                                        <i className="fas fa-notes-medical" />{' '}
                                        Reg. New
                                    </NavLink>
                                </NavItem>}
                            </Nav>
                            <Nav>
                                <NavItem>
                                    <div className="nav-text">User</div>
                                    {user !== null
                                        ? user.displayName
                                        : Header.defaultProps.name}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

Header.defaultProps = {
    title: 'DHIS2',
    name: 'Loading Username...',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Header;
