exports.action = function (data, callback, config, SARAH) {

    var exec = require('child_process').exec;
    var process = '';
    var PanasonicViera = require('./panasonicviera');

    config = config.modules.panasonic;

    // Create instance of module
    var tv = new PanasonicViera(config.ip);

    switch (data.val) {

        case "shutdownTv":
            tv.send(PanasonicViera.POWER_TOGGLE);
            break;

        case "muteTvOn":
            tv.setMute(true);
            break;

        case "muteTvOff":
            tv.setMute(false);
            break;

        case "volumeMin":
            tv.setVolume(10);
            break;

        case "volumeHalf":
            tv.setVolume(25);
            break;

        case "volumeMax":
            tv.setVolume(50);
            break;

        case "volumeUp":
            tv.send(PanasonicViera.VOLUME_UP);
            break;

        case "volumeDown":
            tv.send(PanasonicViera.VOLUME_DOWN);
            break;

        case "channelUp":
            tv.send(PanasonicViera.CHANNEL_UP);
            break;

        case "channelDown":
            tv.send(PanasonicViera.CHANNEL_DOWN);
            break;

        case "sourceTv":
            tv.send(PanasonicViera.TV);
            break;

        case "sourceInternet":
            tv.send(PanasonicViera.INTERNET);
            break;

        case "sourceSdCard":
            tv.send(PanasonicViera.SD_CARD);
            break;

        case "sourceChange":
            tv.send(PanasonicViera.CHANGE_INPUT);
            break;

        case "d1":
            tv.send(PanasonicViera.D1);
            break;

        case "d2":
            tv.send(PanasonicViera.D2);
            break;

        case "d3":
            tv.send(PanasonicViera.D3);
            break;

        case "d4":
            tv.send(PanasonicViera.D4);
            break;

        case "d5":
            tv.send(PanasonicViera.D5);
            break;

        case "d6":
            tv.send(PanasonicViera.D6);
            break;

        case "d7":
            tv.send(PanasonicViera.D7);
            break;

        case "d8":
            tv.send(PanasonicViera.D8);
            break;

        case "d9":
            tv.send(PanasonicViera.D9);
            break;

        case "d10":
            tv.send(PanasonicViera.D1);
            tv.send(PanasonicViera.D0);
            break;

        case "d11":
            tv.send(PanasonicViera.D1);
            tv.send(PanasonicViera.D1);
            break;

        case "d12":
            tv.send(PanasonicViera.D1);
            tv.send(PanasonicViera.D2);
            break;

        case "d13":
            tv.send(PanasonicViera.D1);
            tv.send(PanasonicViera.D3);
            break;

        case "d14":
            tv.send(PanasonicViera.D1);
            tv.send(PanasonicViera.D4);
            break;

        case "menu":
            tv.send(PanasonicViera.MENU);
            break;

        case "submenu":
            tv.send(PanasonicViera.SUBMENU);
            break;

        case "red":
            tv.send(PanasonicViera.RED);
            break;

        case "green":
            tv.send(PanasonicViera.GREEN);
            break;

        case "yellow":
            tv.send(PanasonicViera.YELLOW);
            break;

        case "blue":
            tv.send(PanasonicViera.BLUE);
            break;

        case "play":
            tv.send(PanasonicViera.PLAY);
            break;

        case "pause":
            tv.send(PanasonicViera.PAUSE);
            break;

        case "stop":
            tv.send(PanasonicViera.STOP);
            break;

        case "rew":
            tv.send(PanasonicViera.REW);
            break;

        case "ff":
            tv.send(PanasonicViera.FF);
            break;

        case "rec":
            tv.send(PanasonicViera.REC);
            break;

        case "sttl":
            tv.send(PanasonicViera.STTL);
            break;

        case "3d":
            tv.send(PanasonicViera._3D);
            break;

        case "guide":
            tv.send(PanasonicViera.GUIDE);
            break;

        case "text":
            tv.send(PanasonicViera.TEXT);
            break;

        case "info":
            tv.send(PanasonicViera.INFO);
            break;

        case "return":
            tv.send(PanasonicViera.RETURN);
            break;

        case "cancel":
            tv.send(PanasonicViera.CANCEL);
            break;

        case "left":
            tv.send(PanasonicViera.LEFT);
            break;

        case "right":
            tv.send(PanasonicViera.RIGHT);
            break;

        case "up":
            tv.send(PanasonicViera.UP);
            break;

        case "down":
            tv.send(PanasonicViera.DOWN);
            break;

        default:
            process = '';
    }

    console.log('Process : ' + process);

    if (process != '') {
        var child = exec(process,
            function (error, stdout, stderr) {
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });

        callback({});
    } else {
        callback({});
    }
}
 