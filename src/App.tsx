import React from 'react';

// Components
/* import Lottie from 'react-lottie-player'; */
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Assets
/* import animationData from './assets/welcome_animation.json'; */

// Style
import './App.css';

interface Props {
  children?: any;
  trigger?: any;
}

function ScrollTrigger(props: Props) {
  const { children, trigger } = props;
  

  return React.cloneElement(children, {
    elevation: trigger ? 4: 0,
    style: {
      minHeight: trigger ? 64 : "100vh",
      transition: trigger ? "0.3s ease-in" : "1s ease-out",      
    }
    
  })
}

export default function App(props: Props) {

  const trigger = useScrollTrigger({
    threshold: 20
  });

  return (
    <div className="app">
      <ScrollTrigger trigger={trigger} {...props}>
        <AppBar className={trigger ? "app-bar" : "bg-intro"}>
          <div className="bg-intro" style={{visibility: trigger ? "hidden" : "visible", minHeight: trigger ? 0 : "100vh", width: trigger ? 0 : "100%"}}>
            {!trigger && 
              <Typography variant="h2" className="bg-intro__title">
                Hello, it's nice to meet you!
              </Typography>
            }
          </div>
          {trigger && 
            <Toolbar>
              <Typography variant="h5" className="app-bar__title">
                Hailey Smith
              </Typography>
              <IconButton edge="end" className="app-bar__menu-icon" aria-label="menu">
                <MenuIcon/>
              </IconButton>
            </Toolbar> 
          }
        </AppBar> 
      </ScrollTrigger>
      <div className="test">
        
      </div>
    </div>
    // header
    // header__nav
    // projects
    // projects__content {3}
    // about-me
    // contact
    // footer
  );
}
