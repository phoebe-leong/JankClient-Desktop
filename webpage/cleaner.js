class Cleaner {
	constructor(interval) {
		this.jobInterval = interval || 60000
		this.job = null
	}

	get interval() {
		return this.jobInterval
	}

	set interval(ms) {
		this.jobInterval = ms
	}

	start() {
		setInterval(() => {
			console.clear()
		}, this.interval)

		console.log("Cleaner starting...")
	}

	stop() {
		clearInterval(this.job)
		this.job = null

		console.log("Cleaner stopped...")
	}
}
const cleaner = new Cleaner()
cleaner.start()