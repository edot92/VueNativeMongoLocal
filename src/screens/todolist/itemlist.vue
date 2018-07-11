<template>
    <nb-container>
        <nb-header>
            <nb-left>

            </nb-left>
            <nb-right>
                <nb-button :onPress="()=>{Simpan()}">
                    <nb-text>
                        Save
                    </nb-text>
                </nb-button>
            </nb-right>
        </nb-header>
        <nb-content>
            <!-- <nb-card v-for="(item,index) in listForm[0].data" :key="item.id">
                <nb-card-item header bordered>
                    <nb-text>No. {{index+1}} {{item.pertanyaan}}</nb-text>
                </nb-card-item>
                <nb-card-item bordered>
                    <nb-body>
                        <nb-text>
                            NativeBase is a free and open source framework that enable developers to build high-quality mobile apps using React Native
                            iOS and Android apps with a fusion of ES6.
                        </nb-text>
                    </nb-body>
                </nb-card-item>
            </nb-card> -->
            <nb-text>
                {{sampleData}}
            </nb-text>
        </nb-content>
    </nb-container>
</template>
<script>
    import React from "react";
    import Store from '../../store/index'
    export default {
        data: function () {
            return {
                sampleData:null,
                listForm:[]
            }
        },
        methods: {
            Simpan() {
                Store.dispatch("mongo/InsertData", this.listForm).then((result) => {
                    alert(JSON.stringify(result))
                    alert((result))
                }).catch((err) => {
                    alert(JSON.stringify(err))
                });
            }
        },
        async mounted() {
            try {
                // await Store.dispatch("mongo/InsertData")
                let resp = await Store.dispatch("mongo/FindData")
                console.log(resp)
                this.sampleData=resp
            } catch (error) {
                alert(JSON.stringify(error))
            }
        },
    };
</script>