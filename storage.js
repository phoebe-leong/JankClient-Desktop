const fs = require("fs")
const os = require("os")
const pathModule = require("path")

const platform = os.platform

const getPath = (flag) => {
	var path
	if (platform == "win32") {
		path = `C:\\${os.userInfo().username}\\AppData\\JankClient`
	} else if (platform == "darwin") {
		path = `/Users/${os.userInfo().username}/Library/Application Support/JankClient`
	} else if (platform == "linux") {
		path = "~/.jankclient"
	} else {
		return -1
	}

	if (flag == "--theme") {
		if (platform == "win32") {
			path += "\\themes\\"
		} else {
	   		path += '/themes/'
		}
	}
	return path
}

const placeDefaultThemes = async (path) => {
	const filesDir = "./webpage/themes/"
	const files = await fs.promises.readdir(filesDir)

	for (const file of files) {
		try {
			const fileType = await fs.promises.stat(`${filesDir}/${file}`)
			if (fileType.isFile()) {
				if (pathModule.extname(file) == ".css") {
					await fs.copyFileSync(`${filesDir}/${file}`, (platform == 'win32') ? `${path}\\${file}` : `${path}/${file}`)
				}
			}
		} catch (error) {
			console.error(error)
		}
	}
}

const checkStorage = async () => {
	var path = getPath()

	if (path != -1) {
		if (!fs.existsSync(path)) {
			await fs.promises.mkdir(path)
			await fs.promises.mkdir(getPath("--theme"))

			placeDefaultThemes(`${path}/themes`)
		} else {
			if (!fs.existsSync(getPath("--theme"))) {
				await fs.promises.mkdir(getPath("--theme"))

				placeDefaultThemes(getPath("--theme"))
			} else {
				const files = await fs.promises.readdir(getPath("--theme"))

				if (files == "") {
					placeDefaultThemes(getPath("--theme"))
				}
			}
		}
	}
}
checkStorage()

const copyOver = async () => {
	var path = getPath("--theme")

	if (path != -1) {
		const files = await fs.promises.readdir(path)

		for (const file of files) {
			const isFile = (await fs.promises.stat(`${path}${file}`)).isFile()

			if (isFile && pathModule.extname(file) == ".css") {
				fs.copyFileSync(`${path}${file}`, `./webpage/themes/${file}`)
			}
		}
	}
}
copyOver()

const logJSON = async () => {
	const files = await fs.promises.readdir("./webpage/themes")
	var json = {
		files: []
	}

	for (const file of files) {
		const type = await fs.promises.stat(`./webpage/themes/${file}`)
		
		if (type.isFile() && pathModule.extname(file) == ".css") {
			let obj = {}

			obj.name = (pathModule.parse(file).name).split('-')[0]
			obj.path = `./${file}`

			json.files.push(obj)
		}
	}
	fs.writeFileSync("./webpage/themes/themes.json", JSON.stringify(json), "utf-8")
}
logJSON()