<template>
    <div class="flex w-full container min-h-screen mx-auto">
        <div class="w-1/2 items-center min-h-full py-24 px-12">
            <div class="w-full flex py-5 items-center">
                <img src="../assets/logo.png" class="h-12"/>
                <div class="flex-grow text-right">
                    <router-link :to="{name: 'SignUp'}">
                        <p class="text-sm font-bold">Don't have an account?
                            <span class="border bg-white shadow-md rounded-sm text-sm p-1 text-primary px-3 border-primary">Sign Up</span>
                        </p>
                    </router-link>
                </div>
            </div>
            <custom-input title="E-Mail Address" v-model="email" placeholder="E-Mail Address"/>

            <custom-input title="Password" placeholder="Password" v-model="password" type="password"/>
            <div class="flex pt-1">
                <p class="text-xs text-gray-500" v-text="'At least 6 characters but longer is better'"/>
                <p class="text-xs font-bold text-blue-700 text-right flex-grow" v-text="'Show Password'"/>
            </div>
            <custom-button text="Sign Up"/>
            <div class="flex items-center text-black px-2">
                <hr class="flex-grow border-black"/>
                <p class="text-center px-5">or</p>
                <hr class="flex-grow border-black"/>
            </div>
            <custom-button text="Sign Up with Google" buttonClass="bg-primary" icon="fa-google"/>

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
        data () {
            return {
                email: '',
                password: ''
            }
        }
    }
</script>
