const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL('https://arturom27.github.io/HealthyTarts/index.html')
}

app.whenReady().then(createWindow)
