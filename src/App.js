import React, { Component } from 'react';
import Footer from './components/Footer';
import projects from './assets/projects'
import { BrowserRouter, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'; 
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage'
import ProjectInfo from './components/ProjectInfo'
import arrowIcon from './assets/icons/down-arrow.svg'
import $ from 'jquery'
import ls from 'local-storage'
let parse = require('html-react-parser'); 

class App extends Component  {
  state = {
    projects: projects, 
    isActive: {
      htmlCss: false,
      bootstrap: false,
      javascript: false,
      react: false,
      responsive: false,  
    },
    projectInfo: null,
    currentPath: null, 
  }
  
  componentDidMount(){
    this.setState({
      projectInfo: ls.get('projectInfo') || null
    })
  }

  getID = (e) => {
    this.setState({
      projectInfo: e.target.id
    })
    ls.set('projectInfo', e.target.id);
  }

 
 	noneActive = (isActive) => {
		for (let project in isActive) {
			if (isActive[project] !== false)
				return false;
		}
		return true;
  }

  viewAllEvent = (e) => {
    let filterTag = document.getElementsByClassName('f-tag');
    let viewAllTag = document.querySelector('.va-tag');
    let isActive = {...this.state.isActive};

    for (let key in isActive) {
      isActive[key] = false; 
    }
    this.setState({
      isActive
    });

    for (let fTag of filterTag) {
      fTag.style.color = "#212529";
    }
    viewAllTag.style.color = "#ff9f1c";
  }

  filterByTagEvent = (e) => {
    let isActive = {...this.state.isActive};
    let filterTag = document.getElementsByClassName('f-tag');
    let viewAllTag = document.querySelector('.va-tag');
    
    for (let tag in this.state.isActive) {
        if (e.target.id === tag){
          if (this.state.isActive[tag]){
          
            e.target.style.color = "#212529"; // set black

            isActive[tag] = false; 
            this.setState({
              isActive, 
            })
              
          } else {

            for (let fTag of filterTag) {
              fTag.style.color = "#212529";
            }

            viewAllTag.style.color = "#212529"
            
            e.target.style.color = "#ff9f1c"; // set orange


            isActive[tag] = true;
            for (let key in this.state.isActive){
              if (this.state.isActive[key]) {
                isActive[key] = false; 
              }
            }
            this.setState({
              isActive, 
            })

          }
        }
    }
  }


  // function to keep a tab highlighted when component is active 
  getCurrentPath = (path) => {
    this.setState({
      currentPath: path
    })
  }
  
  
  arrowIconClick = () => {
    $(".p-categories").slideToggle('fast');
  }
  
  renderProjectInfo = () => {
      for (let project of this.state.projects) {
        if (this.state.projectInfo === project.title){
          return (
            <div className="project-info-container row d-block d-lg-flex">
              <aside className="info-aside col-12 col-lg-3">
                  <header class="p-filter-title">
                    <h1 className="info-title">{project.title}</h1>
                    <span className="d-md-none">
                        <img src={arrowIcon} onClick={this.arrowIconClick} className="arrow-icon-dropdown" alt="" height="30" width="30" />
                    </span>
                  </header>
                  <div class="info-tags p-categories hidden d-md-block">
                      <div class="filter-section">
                        <h4>Link</h4>
                        <a href={project.url} rel="noopener noreferrer" target="_blank">{project.url}</a>
                      </div>
                      <div class="filter-section">
                        <h4>GitHub</h4>
                        <a href={project.github} rel="noopener noreferrer" target="_blank">{project.github}</a>
                      </div>
                      <div class="filter-section">
                        <h4>Tools</h4>
                        <span>{project.tools}</span>
                      </div>
                  </div> 
              </aside>
              <article className="info-main col-12 col-lg-9">
                  <figure>
                    <img className="info-img" src={project.image} alt="" width="100%" height="auto" />
                  </figure>
                  <div className="info-text">{parse(project.longDescription)}</div> 
              </article>
            </div> 
          )
      }
    } 
  }

  renderProjects = () => {

		return this.state.projects.map(project => {

      let projectBgImg = {
        backgroundImage: `url(${project.image})`,
      }
		
			let projectCard = (
				<div className="card-container pl-md-4 pp-card">
          <Link className="project-info-link" to="/project-info"> 
            <div id={project.title} onClick={this.getID} className="project-card card" style={projectBgImg}>
              <div id={project.title} className="inner-card">
                  <div className="inner card-title">
                    <h3>{project.year}</h3>
                  </div>
              </div>
            </div>
          </Link>
					<div className="pp-outer-card">
						<h3>{project.title}</h3>
						<p>{project.shortDescription}</p>
					</div>
				</div>
			)

			if (this.noneActive(this.state.isActive)){
				return projectCard
			} else {
				for(let tag in this.state.isActive){
					if(this.state.isActive[tag] && project.tags.includes(tag)){
						return projectCard
					}
				}
			}	

		})
  }

  

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="container-fluid wrapper">
              <Route 
                exact path="/" 
                render={(props) => <Home  {...props} currentPath={this.state.currentPath} getCurrentPath={this.getCurrentPath} getID={this.getID} />} 
              />
              <Route 
                path="/projects" 
                render={(props) => <ProjectsPage {...props} renderProjects={this.renderProjects} arrowIconClick={this.arrowIconClick} renderProjectsTotal={this.renderProjectsTotal} filterByTagEvent={this.filterByTagEvent} isActive={this.state.isActive} getCurrentPath={this.getCurrentPath} currentPath={this.state.currentPath} viewAllEvent={this.viewAllEvent}/>}
              /> 
              <Route 
                path="/project-info"
                render={(props) => <ProjectInfo {...props} renderProjectInfo={this.renderProjectInfo} />}
              />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  } 
}

export default App;
