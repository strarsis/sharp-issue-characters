var sharp = require('sharp');

// ascii -> ascii
sharp('./input/input-1.jpg')
.toFile('./output/output-1.png')
.then(function() {
  console.log('Done 1.1.');
});

// ascii -> special
sharp('./input/input-1.jpg')
.toFile('./output/output-1-ßßß.png')
.then(function() {
  console.log('Done 1.2.');
});

// special -> ascii
sharp('./input/input-2-ßßß.jpg')
.toFile('./output/output-2.png')
.then(function() {
  console.log('Done 2.1.');
});

// special -> special
sharp('./input/input-2-ßßß.jpg')
.toFile('./output/output-2-ßßß.png')
.then(function() {
  console.log('Done 2.2.');
});

// special (folder) -> ascii
sharp('./input-3-ßßß/input-3.jpg')
.toFile('./output/output-3.png')
.then(function() {
  console.log('Done 1.1.');
});

// special (folder) -> special (folder)
sharp('./input-3-ßßß/input-3.jpg')
.toFile('./output-ßßß/output-3.png')
.then(function() {
  console.log('Done 1.2.');
});
