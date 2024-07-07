class Themes {
	constructor() {
		this.fetched = false
		this.themeData = undefined
		this.themeOptions = []
	}

	get isFetched() {
		return this.fetched
	}

	get themeOpts() {
		return this.themeOptions
	}

	async fetchThemes() {
		this.themeData = await fetch("http://127.0.0.1:8080/themes.json")
			.then((data) => data.json())
		this.fetched = true
	}

	async addStyleLinks() {
		for (let i = 0; i < this.themeData.files.length; i++) {
			var link = document.createElement("link")
				link.rel = "stylesheet"
				link.type = "text/css"
				link.href = this.themeData.files[i].path
			document.querySelector("head").appendChild(link)
		}
	}

	async updateSelectionOptions() {
		var options = []
		for (let i = 0; i < this.themeData.files.length; i++) {
			options.push(this.themeData.files[i].name)
		}
		this.themeOptions = options
	}
}
const themes = new Themes()
themes.fetchThemes()

const themeAction = setInterval(() => {
            console.log(themes.isFetched)

            if (themes.isFetched) {
                themes.addStyleLinks()
                themes.updateSelectionOptions()
                clearInterval(themeAction)

                console.log("themeAction done")
            }
        }, 100)
console.log("interval set")