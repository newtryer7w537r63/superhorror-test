const { app, BrowserWindow, session } = require('electron');
app.commandLine.appendSwitch('no-sandbox');
app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((wc, perm, cb) =>
    cb(['media', 'mediaKeySystem'].includes(perm)));
  const win = new BrowserWindow({ width: 1100, height: 760, backgroundColor: '#000', autoHideMenuBar: true });
  win.loadFile('index.html');
});
app.on('window-all-closed', () => app.quit());
