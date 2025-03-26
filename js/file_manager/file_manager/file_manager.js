const fs = require("fs");

module.exports.file_manager = (function(){
   return {
		readDirRecursive: function readDirRecursive(dir = './', tab = 1, parent_dir = '.'){
			let arr_fd = fs.readdirSync(dir, {withFileTypes: true});
			let directories = arr_fd.filter((name) => !name.isFile());
			arr_fd = arr_fd.filter((name) => name.isFile());
			
			let s = " ".repeat(tab)
			console.log(s + parent_dir);
			
			s = " ".repeat(tab + 4);
			for(let f of arr_fd)
				console.log(s + "-" + f.name);
			
			if(directories.length > 0)
				for(let d of directories)
					readDirRecursive(dir + "/" + d.name, tab + 8, d.name);
	
		},
		
		findFile: function findFile(name, arr = [], dir = '.'){
			let arr_fd = fs.readdirSync(dir, {withFileTypes: true});
			let directories = arr_fd.filter((n) => !n.isFile());
			
			
			for(let f of arr_fd){
				if(f.name === name){
					arr.push(f);
				}
			}

			if(directories.length > 0)
				for(let d of directories)
					findFile(name,  arr, dir + "/" + d.name);
		},
		
		parsePathFile: function parsePathFile(file){
			return file.path + '/' + file.name
		},
		
		aboutFile: function aboutFile(path){
			console.log(fs.statSync(arr[0].path + '/' + arr[0].name));
		}
		
	};
	
	
})()


