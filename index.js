"use strict";

const {app, BrowserWindow} = require("electron");
const path = require("path");

const createWindow = _ => {
    const mainWindow = new BrowserWindow({
        show: false
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
    mainWindow.maximize();
    mainWindow.show();
};

app.whenReady()
   .then(_ => {
        // create main window.
        createWindow();
        
        app.on('activate', _ => {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (BrowserWindow.getAllWindows().length === 0) createWindow();
        });
    });
  
// Quit when all windows are closed.
app.on('window-all-closed', _ => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
});