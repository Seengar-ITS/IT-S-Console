import React from 'react';
import{BrowserRouter,Routes,Route}from'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import NewProject from './pages/NewProject.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import ApiKeysMgr from './pages/ApiKeysMgr.jsx';
import Usage from './pages/Usage.jsx';
import Webhooks from './pages/Webhooks.jsx';
import Nav from './components/Nav.jsx';
export default function App(){return React.createElement(BrowserRouter,null,React.createElement(Nav),React.createElement(Routes,null,
    React.createElement(Route,{path:'/',element:React.createElement(Home)}),
    React.createElement(Route,{path:'/projects',element:React.createElement(Projects)}),
    React.createElement(Route,{path:'/projects/new',element:React.createElement(NewProject)}),
    React.createElement(Route,{path:'/projects/:id',element:React.createElement(ProjectDetail)}),
    React.createElement(Route,{path:'/api-keys',element:React.createElement(ApiKeysMgr)}),
    React.createElement(Route,{path:'/usage',element:React.createElement(Usage)}),
    React.createElement(Route,{path:'/webhooks',element:React.createElement(Webhooks)})
));}