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

		console.log("Beginning work...")
	}

	stop() {
		clearInterval(this.job)
		this.job = null
	}
}
const cleaner = new Cleaner()
cleaner.start()