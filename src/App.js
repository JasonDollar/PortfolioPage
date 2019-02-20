import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components'
// import _ from 'lodash'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import './App.css';
import theme from './styles/theme'
import GlobalStyle from './styles/global'



class App extends Component {
  state = {
    appName: 'light',
    navBarFixed: false,
  }
  componentDidMount() {
    this.scrollListener = window.addEventListener('scroll', (e) => {
      console.log(e)
      if (e.pageY > 120) {
        this.setState({navBarFixed: true})
      } else {
        this.setState({navBarFixed: false})
        
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener(this.scrollListener)
  }
  render() {
    const appTheme = theme[this.state.appName]
    return (
      <ThemeProvider theme={appTheme}>
        <Fragment>
          <GlobalStyle />
          <Hero id="hero" fixed={this.state.navBarFixed}/> 
          <About id="about"/>
          <Portfolio id="portfolio" />
          <Contact id="contact" />
          <Footer id="footer" />
        </Fragment>
          
      </ThemeProvider>
    );
  }
}

export default App;
