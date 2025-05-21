
import {
  app,
  BrowserWindow
} from 'electron';

function CreateWindow(): void {
  _window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      allowRunningInsecureContent: true,
      sandbox: false,
    }
  });
}
