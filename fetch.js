var content = "try again";

function getPrac(name){
	var client = new XMLHttpRequest();
	client.open('GET', 'https://skt7.github.io/wp/' + name + '.html');
	client.onreadystatechange = function() {
		 content = client.responseText;
	}
	client.send();
	return content;
}
