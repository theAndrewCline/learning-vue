new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result: 0
        },
        methods: {
            valueCheck: function() {
                if(this.value >= 37) {
                    this.result = this.value
                    this.value = 0
                }
            },
            startTimer: function() {

            }
        }
    });