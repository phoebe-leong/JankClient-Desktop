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
		this.job = setInterval(() => {
			console.clear()
		}, this.interval)

		console.log("Cleaner starting...")
	}

	stop() {
		clearInterval(this.job)
		console.log("Cleaner stopped...")
	}
}
const cleaner = new Cleaner(5000)
//cleaner.start()