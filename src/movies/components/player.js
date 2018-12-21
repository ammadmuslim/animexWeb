import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../assets/css/bootstrap.css';
import '../../assets/css/bootstrap3.css';
import * as actionCreate from '../../redux/actions/getAnime';

class VideoPlayer extends React.Component{
    render(){
    return(
    	<div>
	      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent">
	        <div className="container">
	          <Link className="navbar-brand" to="/movies/details/:id">
	          <b className="glyphicon glyphicon-arrow-left"></b>
	          </Link>
	          <Link className="navbar-brand" to="/">
	          <img src="https://bit.ly/2EC6kKY"/>
	          </Link>
	        </div>
	      </nav>
        <div className="embed-responsive embed-responsive-16by9">
             {console.log('str'+this.urlStr)}
             <iframe allowFullScreen className="embed-responsive-item" src={this.props.match.params.title}></iframe> 
        </div>
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect (mapStateToProps, actionCreate)(VideoPlayer);
