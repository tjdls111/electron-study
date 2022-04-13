const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");
const path = require("path");
const { SEND_CLOSE, SEND_MAX, SEND_MIN } = require("./constants");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // 디폴트 타이틀바 제거
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  // 메뉴바
  // const template = [
  //   {
  //     label: "File",
  //     submenu: [
  //       {
  //         label: "Open",
  //         click: function () {
  //           console.log("Clicked Menu open");
  //         },
  //       },
  //       { type: "separator" },
  //       { role: "toggleDevTools" },
  //       {
  //         label: "안내",
  //         click: function () {
  //           shell.openExternal("https://www.electronjs.org/docs/api");
  //         },
  //       },
  //     ],
  //   },
  // ];
  // const menu = Menu.buildFromTemplate(template);
  // Menu.setApplicationMenu(menu);
  ipcMain.on(SEND_MIN, (event, arg) => {
    win.minimize();
  });

  ipcMain.on(SEND_MAX, (event, arg) => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });

  ipcMain.on(SEND_CLOSE, (event, arg) => {
    win.close();
  });
  win.loadURL("http://localhost:3000");
}
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
