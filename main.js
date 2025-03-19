const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the local HTML file
    win.loadFile(path.join(__dirname, 'index.html'));

    // Optional: Open DevTools for debugging
    // win.webContents.openDevTools();
}

// Create window when Electron is ready
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        // Recreate a window if the app is re-opened (MacOS behavior)
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit the app when all windows are closed (except on MacOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "clock.app", // Change this to whatever you want
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile(path.join(__dirname, 'index.html'));
}
