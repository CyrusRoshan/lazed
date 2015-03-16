function gitAuth(){
	OAuth.initialize('qfJJ3tq5zo9SJtq_kgKHqTceCtk')
	OAuth.popup('github').done(function(result) {
		console.log(result)
		// do some stuff with result
	})
}