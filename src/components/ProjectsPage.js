import React from 'react'
import Navbar from './navbar'
import arrowIcon from '../assets/icons/down-arrow.svg'

class ProjectsPage extends React.Component {
    componentDidMount(){
        this.props.getCurrentPath(this.props.location.pathname);
    }

    render (){
        return (
            <div className="projects-page-container">
                <Navbar />
                <div className="row">
                    <aside className="projects-total-col pl-3 pt-0 col-12 col-md-2">
                        <header className="p-filter-title">
                            <div className="p-filter">
                                <h1 className="d-md-none">Filter Projects</h1>
                                <h1 className="d-none d-md-block">Projects</h1>
                            </div>
                            <span className="d-md-none">
                                <img src={arrowIcon} className="arrow-icon-dropdown" alt="" height="30" width="30" onClick={this.props.arrowIconClick} />
                            </span>
                        </header>
                        <nav className="p-categories hidden d-md-block">
                            <div className="filter-section">
                                <h4 id="view-all-filter"className="va-tag" onClick={this.props.viewAllEvent}>View All</h4>
                            </div>
                            <div className="filter-section">
                                <h4>Tag</h4> 
                                <ul>
                                    <li onClick={this.props.filterByTagEvent} id="htmlCss" className="f-tag">HTML & CSS</li> 
                                    <li onClick={this.props.filterByTagEvent} id="bootstrap" className="f-tag">Bootstrap</li>
                                    <li onClick={this.props.filterByTagEvent} id="javascript" className="f-tag">Javascript</li>
                                    <li onClick={this.props.filterByTagEvent} id="react" className="f-tag">React / Redux</li>
                                    <li onClick={this.props.filterByTagEvent} id="responsive" className="f-tag">Responsive</li>
                                </ul>
                            </div>
                        </nav>
                    </aside> 
                    <div className="projects col-12 col-md-10">{this.props.renderProjects()}</div>
                </div>
            </div>
        )
    }
}

export default ProjectsPage 

// const ProjectsPage = ({ renderProjects }) =>