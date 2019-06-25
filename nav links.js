var indexpage = "<a href='aboutme.html' class='about'>About</a><nav id='main'><a href='illustrations.html'>Illustration</a><a href='code.html'>Coding</a><a href='writing.html'>Writing</a><a href='digitalcreations.html'>Digital Content</a><a href='misc.html'>Misc.</a></nav>";

var side = "<a href='index.html'>Home</a><a href='aboutme.html'>About</a><a href='illustrations.html'>Illustration</a><a href='code.html'>Coding</a><a href='writing.html'>Writing</a><a href='misc.html'>Misc.</a>";

if (location.pathname == "/index.html" || location.pathname == "/") {
	document.getElementById('indexpage').innerHTML += indexpage;
} else {
	document.getElementById('sidebar').innerHTML += side;
} 