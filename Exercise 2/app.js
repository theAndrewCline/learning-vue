new Vue({
        el: '#exercise',
        data: {
            value: 'Change Me'
        },
        methods: {
            alertClick: function(event) {
                alert('you clicked me')
            },
            updateValue: function(event) {
                console.log(event.target.value)
                this.value = event.target.value
            }
        }
    });