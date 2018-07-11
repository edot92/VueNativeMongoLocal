<template>
    <Root v-if="isReady">
        <!-- <text>
            tes
        </text>
        <view> -->
        <item-list2></item-list2>
        <!-- </view> -->
    </Root>
</template>
<script>
    import { VueNativeBase, Root } from 'native-base'
    import Vue from 'vue-native-core'
    import Store from './src/store/index'

    import ItemList from './src/screens/todolist/itemlist.vue'
    Vue.use(VueNativeBase)

    export default {
        components: {
            Root,
            'item-list2': ItemList
        },
        data() {
            return {
                isReady: false
            }
        },
        async mounted() {
            try {
                // await Store.dispatch("mongo/InsertData")
                let resp = await Store.dispatch("mongo/FindData")
                // console.log(resp)
                this.isReady = true
            } catch (error) {
                alert(JSON.stringify(error))
            }
        },
    }
</script>