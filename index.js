const fs = require('fs');


/* Funkcja odczytująca zawartość katalogu 'files' i zapisująca ją w nowym pliku 'new-file.txt' */
fs.readdir('./files', 'utf-8', function(err, files){
	if(err) throw err;

	fs.writeFile('./new-file.txt', files.join(', '), function(err){
		if(err) throw err;
		console.log('Zapisano!');
	});
});