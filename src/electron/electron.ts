const { app, BrowserWindow } = require('electron');

let localHost = 'localhost:3333';
if (process.env.NODE_ENV === 'development') localHost = 'localhost:8080';


app.on('ready', () => {
  // once electron has started up, create a window.
  const window = new BrowserWindow({ width: 800, height: 600 });

  // hide the default menu bar that comes with the browser window
  window.setMenuBarVisibility(false);

  // load a website to display
  window.loadURL('http://localhost:8080');
});