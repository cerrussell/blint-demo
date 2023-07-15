const createWindowsInstaller = require('electron-winstaller')
    .createWindowsInstaller;
const path = require('path');

function installer() {
    const rootPath = path.join(__dirname, './');
    const outPath = path.join(rootPath, 'out');
        return Promise.resolve({
            authors: 'Caroline Russell',
            appDirectory: path.join(outPath, 'activity-monitor-win32-ia32'),
            exe: 'activity-monitor.exe',
            noMsi: true,
            outputDirectory: path.join(outPath, 'windows-installer'),
            setupExe: 'ActivityMonitorSetup.exe'
        });
}

installer()
    .then(createWindowsInstaller)