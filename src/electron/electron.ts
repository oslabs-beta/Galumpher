const { app, BrowserWindow } = require('electron');
const path = require('path');

const localHost = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'http://localhost:3333';


app.on('ready', () => {
  // once electron has started up, create a window.
  const window = new BrowserWindow({ width: 1000, height: 800 });

  // hide the default menu bar that comes with the browser window
  window.setMenuBarVisibility(false);

  // load a website to display
  window.loadURL(localHost);
});