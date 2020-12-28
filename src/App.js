import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withloadingList from './components/withloadingList';

function App() {
  const ListLoading = withloadingList(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:8080/BOUTIQUE/produits`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      {/* <div>
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
      </div> */}
      <div className='container'>
        <h1>Welcome To Our Shop Your Satisfaction our Reason To be !!!</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Alassane SALL and Aziz BA ONE LOVE !!!
        </div>
      </footer>
    </div>
  );
}
export default App