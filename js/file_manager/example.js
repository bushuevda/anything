const {file_manager} = require ('./file_manager/file_manager');

arr = [];
file_manager.findFile("aaa.txt", arr, dir = './');

file_manager.aboutFile(file_manager.parsePathFile(arr[0]));
