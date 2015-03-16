function gitAuth(){
	OAuth.initialize('qfJJ3tq5zo9SJtq_kgKHqTceCtk')
	OAuth.popup('github').done(function(result) {
		result.me().done(function(data) {
			console.log(data);
			//data.alias is the person's username. use data.name for their name.
		})
	})
}