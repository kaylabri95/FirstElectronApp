const path = require('path');
const { app, BrowserWindow } = require('electron');

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // closable boolean (optional) macOS Windows - Whether window is closable. This is not implemented on Linux. Default is true.
  });

  mainWindow.loadFile(path.join('index.html'));
};

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

