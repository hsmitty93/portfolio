import React from 'react';

//Material Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';

//Material Icons
import MenuIcon from '@material-ui/icons/Menu';

// Style
import './App.css';

interface Props {
  children?: any;
}

function ScrollTrigger(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 10
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4: 0,
    style: {
      height: trigger ? 64 : 90,
      transition: trigger ? "0.4s ease-in" : "0.4s ease-out",
    }
    
  })
}

export default function App(props: Props) {
  return (
    <div className="app">
      <ScrollTrigger {...props}>
        <AppBar className="app-bar">
          <Toolbar>
            <Typography variant="h5" className="app-bar__title">
              Hailey Smith
            </Typography>
            <IconButton edge="end" className="app-bar__menu-icon" aria-label="menu">
              <MenuIcon/>
            </IconButton>
          </Toolbar>
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
