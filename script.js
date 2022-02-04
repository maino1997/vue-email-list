
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        mailList: []
    },
    methods: {
        getRandomMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                const mail = res.data.response;
                if (!this.mailList.includes(mail)) {
                    this.mailList.push(mail);
                }
            })
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.getRandomMail();
        }
    }
})