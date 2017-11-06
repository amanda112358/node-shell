

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === 'pwd') {
    console.log(process.env.PWD);
  }
  if (cmd === 'date') {
    var date = new Date();
    console.log(date);
    }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});