new Vue({
    el: '#app',
    data: {
        proximo: 'PRÓXIMO'
    },
    methods: {
        alterar() {
            this.proximo = window.location.href = '../pages/atendimento2.html'
            //this.proximo = open('../pages/atendimento1.html', '_blank')
            this.proximo = 'PRÓXIMO'
        }
    }
})