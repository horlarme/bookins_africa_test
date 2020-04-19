<template>
    <div class="flex w-full container min-h-screen mx-auto">
        <div class="w-1/2 items-center min-h-full py-24 px-12">
            <div class="w-full flex py-5 items-center">
                <img src="../assets/logo.png" class="h-12"/>
            </div>
            <h1>Profile</h1>
            <custom-input v-model="email" placeholder="New Email" title="New Email"/>
            <custom-input v-model="firstname" placeholder="First Name" title="First Name"/>
            <custom-input v-model="lastname" placeholder="Last Name" title="Last Name"/>
            <custom-input v-model="phone" placeholder="Phone" title="Phone"/>
            <custom-input v-model="country" placeholder="Country" title="Country"/>
            <custom-input v-model="currency" placeholder="Currency" title="Currency"/>
            <custom-button text="Update Profile" @click="updateDetails"/>

        </div>
        <div class="w-1/2 items-center min-h-full pt-24 bg-primary">
            <div class="w-full py-5 px-12">
                <p class="font-bold text-sm mb-8">Sign up to BookingsAfrica - It's free</p>
                <div class="text-white">
                    <p class="text-sm pt-5">Bookings Africa is the largest platform for creative talents to get booked
                        and
                        paid
                        across Africa.</p>
                    <p class="text-sm pt-5">Over 4,000 talents use BookingsAfrica across Nigeria, Ghana and South Africa
                        to
                        get
                        booked and paid.</p>
                    <p class="text-sm pt-5">Our mission is to unlock the earning potential of talents and catalyse
                        commerce
                        across Africa. We
                        uniquely leverage technology to economically empower and connect African professionals to
                        millions
                        of customers.</p>
                    <p class="text-sm pt-5">Talents love the simplicity and open experience while clients enjoy the ease
                        and
                        security our platform provides them.</p>
                    <p class="text-sm pt-5">Thank you for signing up and we look forward to growing your talent and
                        being a
                        reliable partner to you.</p>
                    <img src="../assets/logo.png" alt="" width="60" class="pt-8"/>
                    <p class="text-sm pt-3">Founder / CEO</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        beforeRouteEnter (to, from, next) {
            if (window.localStorage.getItem('projectUserToken') !== null) {
                next(true)
            } else {
                next({ name: 'SignIn', query: { redirectTo: '/profile' } })
            }
        },
        mounted () {
            //if there was an api to fetch user profile, we would do it here
            const user = JSON.parse(window.localStorage.getItem('projectUser'))
            this.email = user.email
            this.password = user.password
        },
        data () {
            return {
                email: '',
                password: '',
                firstname: 'First',
                lastname: 'Last',
                phone: '09042198239',
                country: 'Nigeria',
                currency: 'NGN'
            }
        },
        methods: {
            updateDetails () {
                this.$axios().post('https://api.sandbox.bookingsafrica.com/v2/account', this.$data)
                    .catch((error) => console.log('handle error', error.response.data))
                    .then(response => response.data)
                    .then(() => {
                        window.localStorage.setItem('projectUser', JSON.stringify(this.$data))
                        alert('You account has been updated successfully.')
                    })
            }
        }
    }
</script>
