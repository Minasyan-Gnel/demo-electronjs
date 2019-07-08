const {app, BrowserWindow} = require("electron");

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html').then().catch(err => console.log(err));

    win.webContents.openDevTools();

    win.on("close", () => (win = null));
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    (process.platform !== 'darwin') && app.quit();
});

app.on("activate", () => {
    (win === null) && createWindow();
});