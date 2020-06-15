import React from 'react'
import  { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="container-fluid">
            <header className="row f-header">
                <div className="col-12 p-0">
                    <h2>Joshua Carew</h2>
                    <p>I'm a web developer. I'm working on it.</p>
                </div> 
            </header>
            <nav className="row footer-nav">
                <ul className="col-12 col-md-6 pl-0">
                    <li className="footer-head">Menu</li>
                    <li><Link to="/">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                </ul>
                <ul className="col-12 col-md-2 pl-0">
                    <li className="footer-head">Online</li>
                    <li><a href="https://github.com/joshbjorn">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/joshua-carew-72a725157/">LinkedIn</a></li>
                </ul>
                <ul className="col-12 col-md-3 pl-0">
                    <li className="footer-head">Contact</li>
                    <li><a href="mailto: carew.jw@gmail.com" rel="noopener noreferrer" target="_blank">carew.jw@gmail.com</a></li>
                </ul>
            </nav>        
        </footer>
    )
}

export default Footer