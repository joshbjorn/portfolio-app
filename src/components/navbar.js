import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        navbarToggler: false, 
    }

    handleClick = () => {
        let body = document.querySelector('body');
        let brandImg = document.querySelector('.brand-img');
        if (this.state.navbarToggler) {
            body.classList.toggle('no-scroll'); 
            brandImg.classList.toggle('slide-left');
            this.setState({
                navbarToggler: false
            }); 
        } else {
            body.classList.toggle('no-scroll');
            brandImg.classList.toggle('slide-left');
            this.setState({
                navbarToggler: true
            });
        }
        
    }

    componentDidMount() {
        let body = document.querySelector('body')
        body.classList.remove('no-scroll');
    }

    render(){
        console.log(this.props.currentPath)
        return (
            <div className="w-100 header-container">
                <header className="w-100 px-0 navbar navbar-light d-flex justify-content-between">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <div className="brand-img" height="44px" width="44px"></div> 
                        Joshua Carew
                    </a> 
                    <nav className="nav-links">
                        <Link 
                            className="about-link d-none d-sm-inline" 
                            to="/"
                            id={this.props.currentPath === "/" ? 'active-tab' : null}
                        >
                            About
                        </Link>
                        <a className="d-none d-sm-inline" a href="mailto:carew.jw@gmail.com" rel="noopener noreferrer" target="_blank">Contact Me</a>
                        <button className="nav-toggler d-sm-none" onClick={this.handleClick}>
                            {
                                this.state.navbarToggler ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53" width="3rem" height="3rem"><defs><style>{`.cls-1{fill:#fff;}.cls-2{fill:#444b54;}`}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M26.5,1.5a25,25,0,1,0,25,25A25,25,0,0,0,26.5,1.5Z"/><path class="cls-2" d="M35.6,19.7,19.5,35.4a1.45,1.45,0,0,1-2.1-.1,1.66,1.66,0,0,1,0-2.1L33.5,17.6a1.45,1.45,0,0,1,2.1.1,1.42,1.42,0,0,1,0,2ZM33.3,35.6,17.6,19.5a1.48,1.48,0,0,1,2.1-2.1l.1.1,15.6,16a1.45,1.45,0,0,1-.1,2.1,1.42,1.42,0,0,1-2,0Z"/></g></g></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53" width="3rem" height="3rem"><defs><style>{`.cls-1{fill:#fff;}.cls-2{fill:#444b54;}`}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M26.5,1.5a25,25,0,1,0,25,25A25,25,0,0,0,26.5,1.5Z"/><path class="cls-2" d="M37.75,20.5H15.25a1.5,1.5,0,0,1,0-3h22.5a1.5,1.5,0,0,1,0,3Zm0,7.5H15.25a1.5,1.5,0,0,1,0-3h22.5a1.5,1.5,0,0,1,0,3Z"/><path class="cls-2" d="M37.75,35.5H15.25a1.5,1.5,0,0,1,0-3h22.5a1.5,1.5,0,0,1,0,3Z"/></g></g></svg>
                                )
                            }
                        </button>
                    </nav>
                </header>
                {
                    this.state.navbarToggler ? (
                        <div className="header-overlay">
                            <nav className="dropdown-nav">
                                <ul>
                                    <li>
                                        <Link 
                                            to="/" 
                                            className="about-link"
                                            id={this.props.currentPath === "/" ? "active-tab" : null}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/projects" 
                                            className="projects-link"
                                            id={this.props.currentPath === "/projects" ? "active-tab" : null}
                                        >
                                            Projects
                                         </Link>
                                    </li>
                                    <li><a href="mailto:carew.jw@gmail.com" rel="noopener noreferrer" target="_blank">Contact Me</a></li>
                                </ul>
                            </nav>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }


}

    

export default Navbar