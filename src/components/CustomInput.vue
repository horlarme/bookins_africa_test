<template>
    <div>
        <p class="text-md pt-4 pb-1" v-text="title"/>
        <div class="flex items-center w-full overflow-hidden flex-row-reverse">
            <div class="w-full">
                <input class="border border-gray-300 p-3 w-full pl-10 rounded-md text-md"
                       :value="value"
                       @change="$emit('change', $event.target.value)"
                       v-bind="$attrs"/>
            </div>
            <div class="fa fa-facebook relative -mr-6"/>
        </div>
    </div>
</template>

<script>
    export default {
        model: {
            event: 'change',
            prop: 'value'
        },
        props: {
            title: String,
            value: String
        }
    }
</script>
