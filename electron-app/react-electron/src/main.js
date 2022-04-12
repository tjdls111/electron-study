const { app, BrowserWindow, Menu, shell } = require("electron");
// include the Node.js 'path' module at the top of your file
const path = require("path");
// modify your existing createWindow() function
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Open",
          click: function () {
            console.log("Clicked Menu open");
          },
        },
        { type: "separator" },
        { role: "toggleDevTools" },
        {
          label: "안내",
          click: function () {
            shell.openExternal("https://www.electronjs.org/docs/api");
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  win.loadURL("http://localhost:3000");
}
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
