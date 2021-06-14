import React from "react";
import logo from "./logo.svg";
import { AppTheme } from "./theme/app-theme";
import { Wrapper, Link, Logo, Header } from "./App.styles";
import { ToggleButton } from "./ToggleModeButton";

function App() {
  return (
    <AppTheme>
      <Wrapper>
        <Header>
          <Logo src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </Header>
        <ToggleButton />
      </Wrapper>
    </AppTheme>
  );
}

export default App;
