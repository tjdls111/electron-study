const {
  app,
  BrowserWindow,
  Menu,
  shell,
  ipcMain,
  mainWindow,
} = require("electron");
const path = require("path");

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
  win.loadURL("http://localhost:3000");
}
ipcMain.on("minimizeApp", () => {
  console.log("mini");
  mainWindow.minimize();
});

ipcMain.on("maximizeApp", () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on("closeApp", () => {
  mainWindow.close();
});
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
