import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMobileAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import theme from './styles/theme'
import GlobalStyle from './styles/global'
// import AppGrid from './styles/AppGrid'

library.add(faMobileAlt, faEnvelope, fab)

class App extends Component {
  state = {
    appName: 'light',
    navBarFixed: false,
  }
  componentDidMount() {
    this.scrollListener = window.addEventListener('scroll', (e) => {
      // console.log(e)
      // console.log(window.pageYOffset)
      if (e.pageY > 100 || window.pageYOffset > 100) {
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
          <Hero id="home" fixed={this.state.navBarFixed}/> 
          <About id="about"/>
          <Portfolio id="portfolio" />
          <Tech id="tech"/>
          <Contact id="contact" />
          <Footer id="footer" />
        </Fragment>
          
      </ThemeProvider>
    );
  }
}

export default App;
