var child_process = require("child_process");


function openUrl(url, port){

    cmd = '';

    switch (process.platform) {
        case 'wind32':
            cmd = 'start';
            break;

        case 'linux':
            cmd = 'xdg-open';
            break;

        case 'darwin':
            cmd = 'open';
            break;
    }

    child_process.exec(cmd + ' http://' + url + ':' + port);
}
module.exports = {openUrl}