
var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var input = data.toString().trim(); // remove the newline
  var argArray = input.split(' ');
  var cmd = argArray.shift();
  var arguments = argArray.join(' ');


  if (cmd === 'pwd'){
    commands.pwd();
  }
  if (cmd === 'date') {
    var date = new Date().toString();
    process.stdin.write(date);
  }
  if (cmd === 'ls'){
    commands.ls();
  }

  if (cmd === 'cat'){
    commands.cat(arguments);
  }

  if (cmd === 'head'){
    commands.head(arguments);
  }

  if (cmd === 'tail'){
    commands.tail(arguments);
  }

  process.stdout.write('\nYou typed: ' + cmd + '\n');
  //process.stdout.write('\nprompt > ');

});