const addStyleLinks = async (data) => {
	for (let i = 0; i < data.files.length; i++) {
		var link = document.createElement("link")
			link.rel = "stylesheet"
			link.type = "text/css"
			link.href = data.files[i].path
		document.querySelector("head").appendChild(link)
	}
}

const updateThemeSelectionOptions = async () => {
	var options = []

	// Have to have this here, since we can't just make the fetch result a global variable smh
	const themeData = await fetch("http://127.0.0.1:8080/themes.json")
		.then((data) => data.json())

	for (let i = 0; i < themeData.files.length; i++) {
		options.push(themeData.files[i].name)
	}
	return options
}

window.onload = async () => {
	const themeData = await fetch("http://127.0.0.1:8080/themes.json")
		.then((data) => data.json())
	addStyleLinks(themeData)
}