var sharp = require('sharp');

// ascii -> ascii
sharp('./input/input-1.jpg')
.toFile('./output/output-1.png')
.then(function() {
  console.log('Done 1');
});

// ascii -> special
sharp('./input/input-1.jpg')
.toFile('./output/output-2-���.png')
.then(function() {
  console.log('Done 2');
});

// special -> ascii
sharp('./input/input-2-���.jpg')
.toFile('./output/output-3.png')
.then(function() {
  console.log('Done 3');
});

// special -> special
sharp('./input/input-2-���.jpg')
.toFile('./output/output-3-���.png')
.then(function() {
  console.log('Done 4');
});


// ascii -> special (folder)
sharp('./input/input-1.jpg')
.toFile('./output-3-���/output-5.png')
.then(function() {
  console.log('Done 5');
});

// special (folder) -> ascii
sharp('./input-3-���/input-3.jpg')
.toFile('./output/output-6.png')
.then(function() {
  console.log('Done 6');
});

// special (folder) -> special (folder)
sharp('./input-3-���/input-3.jpg')
.toFile('./output-3-���/output-7.png')
.then(function() {
  console.log('Done 7');
});
