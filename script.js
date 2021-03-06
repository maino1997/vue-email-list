
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        mailList: [],
        maxMail: 10,
    },
    methods: {
        getRandomMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                const mail = res.data.response;
                // while (this.mailList.length + 1 < this.maxMail) {

                console.log(this.mailList.length);

                if (!this.mailList.includes(mail)) {
                    this.mailList.push(mail);
                }

                if (this.mailList.length < 10) this.getRandomMail();
                // }

            })
        }
    },
    created() {

        this.getRandomMail();
    }
})