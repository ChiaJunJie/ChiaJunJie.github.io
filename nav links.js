var indexpage = "<a href='aboutme.html' class='about'>About</a><nav id='main'><a href='illustrations.html'>Illustrations/Imaging</a><a href='code.html'>Coding</a><a href='writing.html'>Writing</a><a href='digitalcreations.html'>Digital Content</a></nav>";

var side = "<a href='index.html'>Home</a><a href='aboutme.html'>About</a><a href='illustrations.html'>Illustrations/Imaging</a><a href='code.html'>Coding</a><a href='writing.html'>Writing</a><a href='digitalcreations.html'>Digital Content</a>";

if (document.getElementById('indexpage')) {
	document.getElementById('indexpage').innerHTML = indexpage;
} 
if (document.getElementById('sidebar')) {
	document.getElementById('sidebar').innerHTML = side;
} 