import React, {useEffect} from 'react'
import Navbar from './navbar'
import arrowIcon from '../assets/icons/down-arrow.svg'
import  { Link } from 'react-router-dom'
import projects from '../assets/projects'
import $ from 'jquery'

const Home = (props) => {
    const weatherAppImg = {
        backgroundImage: `url(${projects[0].image})`,
    }

    const tictactoeImg = {
        backgroundImage: `url(${projects[3].image})`,
    }

    const newsweekImg = {
        backgroundImage: `url(${projects[1].image})`,
    }

    const libraryImg = {
        backgroundImage: `url(${projects[2].image})`,
    }

    useEffect(() => {
        props.getCurrentPath(props.location.pathname)
        $(".arrow-transistion-img").click(function() {
            $('html,body').animate({
                scrollTop: $(".who-i-am").offset().top},
                'slow');
        });
    }, [])
    

    return (
        <div>
            <div className="header-section row">
                <Navbar currentPath={props.currentPath}/>
                <header className="header px-0 col-12">
                    <h1>Hey, I'm a software developer</h1>
                    <h2>I like to build and design things.</h2>
                </header> 
                <div className="arrow-icon px-0 col-12 align-items-end">
                    <img src={arrowIcon} className="arrow-icon-img arrow-transistion-img" alt="" height="30" width="30"/>
                </div>
            </div> 
            <section class="container-fluid projects-home-section">
                <header className="section-header px-0 px-m-1 row">
                    <h4>Things I've Made</h4>
                    <Link to="/projects">View All</Link>
                </header> 
                <div class="row">
                    <div class="card-container px-0 pr-md-2 col-12 col-md-6" >
                        <Link to="/project-info" className="project-info-link">
                            <div id="Weather App" className="project-card card bg-img" style={weatherAppImg} onClick={props.getID}>
                                <div id="Weather App" className="inner-card">
                                    <div className="inner card-title">
                                        <h3>Weather App</h3>
                                    </div>
                                    <span>JS, React</span>
                                </div>
                            </div>
                        </Link>
                        <div className="outer-card">
                            <h3>Weather App</h3>
                            <p>A simple weather app that utilises Javascript to retrieve and manipulate data from the OpenWeatherMap API.</p>
                        </div>
                    </div>
                    <div class="card-container px-0 pl-md-2 col-12 col-md-6">
                        <Link to="/project-info" className="project-info-link">
                            <div id="Tic Tac Toe" className="project-card card bg-img" style={tictactoeImg} onClick={props.getID}>
                                <div id="Tic Tac Toe" className="inner-card">
                                    <div className="inner card-title">
                                        <h3>Tic Tac Toe</h3>
                                    </div>
                                    <span>JS</span>
                                </div>
                            </div>
                        </Link>
                        <div className="outer-card">
                            <h3>Tic Tac Toe</h3>
                            <p>A tic tac toe game built to incorporate intermediate Javascript concepts such as factory functions, modules, IIFE’s and closure.</p>
                        </div>
                    </div>
                    <div class="card-container px-0 pr-md-2 col-12 col-md-6">
                        <Link to="/project-info" className="project-info-link">
                            <div id="Newsweek Clone" className="project-card card bg-img" style={newsweekImg} onClick={props.getID}>
                                <div id="Newsweek Clone" className="inner-card">
                                    <div className="inner card-title">
                                        <h3>Newsweek Clone</h3>
                                    </div>
                                    <span>Bootstrap, Responsive</span>
                                </div>
                            </div>
                            <div className="outer-card">
                                <h3>Newsweek Clone</h3>
                                <p>A fully responsive, bootstrapped, clone of Newsweek’s homepage.</p>
                            </div>
                        </Link>
                    </div>
                    <div class="card-container px-0 pl-md-2 col-12 col-md-6">
                        <Link to="/project-info" className="project-info-link">
                            <div id="Library" className="project-card card bg-img" style={libraryImg} onClick={props.getID}>
                                <div id="Library" className="inner-card">
                                    <div className="inner card-title">
                                        <h3>Library</h3>
                                    </div>
                                    <span>JS</span>
                                </div>
                            </div>
                            <div className="outer-card">
                                <h3>Library</h3>
                                <p>A Library app that takes a look at objects and class constructors.</p>
                            </div>
                        </Link>
                    </div> 
                </div>
            </section>
            <section className="container-fluid profile-section skills">
                <header className="section-header px-0 row">
                    <h4>What I Can Do</h4>
                </header>
                <article className="row">
                    <div className="skills-main col-12 col-md-6 px-0 pr-md-2">
                        <p className="skills-head">Taking an idea and turning it into something tangible is hard, sometimes harrowing. Here are few things I can do to help. </p> 
                    </div>
                    <div className="col-12 col-md-6 px-0 pl-md-2">
                        <div className="skills-item">
                            <h3>Web Development</h3>
                            <p>I can turn designs into responsive websites. I’m currently working with HTML, CSS, Javascript, React and more, but I’m always learning new stuff.</p>
                        </div>
                        <div className="skills-item">
                            <h3>Design</h3>
                            <p>I like to work with Sketch, Illustrator Photoshop and a variety of other tools to communicate visual ideas. </p>
                        </div>
                        <div className="skills-item">
                            <h3>Problem solve</h3>
                            <p>I’m good a presenting creative solutions to abstract problems.</p>
                        </div>
                        <div className="skills-item">
                            <h3>Communicate</h3>
                            <p>I can interpret ideas and a lot of the time, I like to convey my own.</p>
                        </div>
                    </div>
                </article>
            </section>
            <section className="container-fluid profile-section who-i-am">
                <header className="section-header px-0 row">
                    <h4>Who I Am</h4>
                </header>
                <div className="row">
                    <div className="profile-text order-2 order-md-1 px-0 col-12 col-md-6">
                        <div className="profile-head">
                            <h3>My name is Joshua Carew. <br/> </h3>
                            <h3>I'm a budding software developer based in London, UK.</h3>
                        </div> 
                        <p>Got something you'd like to work on?<a href="/"> Get in touch</a></p>
                    </div>
                    <div className="profile-pic order-1 order-md-2 px-0 col-12 col-md-6 d-flex justify-content-center">
                        <div className="profile-pic-outer">
                            <div className="profile-pic-img"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    
}

export default Home 