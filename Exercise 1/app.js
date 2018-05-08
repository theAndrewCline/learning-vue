new Vue({
	el: '#exercise',
	data: {
		name: 'Andrew',
		age: 24,
		img:
            'http://cdn.skim.gs/images/c_fill,dpr_1.0,f_auto,fl_lossy,h_391,q_auto,w_695/mvjxbd3ialygojs0vzl8/top-10-small-breed-dogs',
        input: 'Dogs are cool'
	},
	methods: {
		randomNumber() {
			return Math.floor(Math.random() * Math.floor(100))
		}
	}
})
