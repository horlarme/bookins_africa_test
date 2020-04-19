<template>
    <div class="rounded-md my-6">
        <div class="flex items-center w-full overflow-hidden flex-row-reverse text-white">
            <div class="w-full">
                <input type="submit"
                       class="border border-transparent p-3 w-full pl-10 rounded-md text-md bg-blue-600 cursor-pointer"
                       :value="text"
                       @click="$emit('click')"
                       :class="buttonClass"/>
            </div>
            <div class="fa relative -mr-20" v-if="icon" :class="icon"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
            buttonClass: String,
            icon: {
                type: String,
                default: null
            }
        },
    }
</script>
