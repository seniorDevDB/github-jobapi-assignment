import React from 'react'
import ReactToggle from 'react-toggle'
import { func, string } from 'prop-types';
import styled from "styled-components"
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Button = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  outline: none;
  background-color: transparent;
`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <Button onClick={toggleTheme}>
        <WbSunnyIcon style={{color: 'white'}}/>
        <ReactToggle
          defaultChecked={theme === 'light'}
          icons={false}
          onChange={toggleTheme} />
        <Brightness3Icon style={{color: 'white'}}/>
      </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;