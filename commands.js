var fs = require('fs');

module.exports = {
  pwd: function() {
    process.stdin.write(process.env.PWD);
    process.stdout.write('\nprompt > ');
  },

  ls: function() {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        });
        process.stdout.write('\nprompt > ');
    });
  },

  cat: function(fileName){
    fs.readFile("./"+fileName, function(err, data){
        if (err) throw err;
        process.stdout.write(data.toString().trim());
    });
  },

  head: function(fileName){
    fs.readFile("./"+fileName, function(err, data){
        if (err) throw err;
        var fullFile = data.toString().trim();
        var firstFiveLines = fullFile.split('\n').slice(0,6).join('\n');
        process.stdout.write(firstFiveLines);
    });
  },

 tail: function(fileName){
    fs.readFile("./"+fileName, function(err, data){
        if (err) throw err;
        var fullFile = data.toString().trim();
        var lastFiveLines = fullFile.split('\n').slice(-5).join('\n');
        process.stdout.write(lastFiveLines);
    });
 }

}