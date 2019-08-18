<template>
    <div>
        <b-row>
            <b-col cols=6>
                <b-card v-if="pieData" header="Confirmatory Requests" header-bg-variant="info" header-text-variant="white">
                    <apexchart type=donut width=480 :options="chartOptions" :series="pieData" />
                </b-card>
            </b-col>
            <b-col cols="6">
                <b-row>
                    <b-col cols="6" class="mb-3">
                        <b-card text-variant="white" style="background:rgb(0, 143, 251)">
                            <b-row>
                                <b-col class="text-center align-middle">
                                    <h1>
                                    <i style="font-size:60px;" class="fa fa-truck"></i>
                                    </h1>
                                </b-col>
                                <b-col>
                                    <h2>{{pieData[0]}}</h2>
                                    <p>On Transit</p>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                    <b-col cols="6" class="mb-3">
                        <b-card text-variant="white" style="background:rgb(0, 227, 150)">
                            <b-row>
                                <b-col class="text-center align-middle">
                                    <h1>
                                    <i style="font-size:60px;" class="fa fa-file"></i>
                                    </h1>
                                </b-col>
                                <b-col>
                                    <h2>{{pieData[1]}}</h2>
                                    <p>Received</p>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                    <b-col cols="6" class="mb-3">
                        <b-card text-variant="white" style="background:rgb(254, 176, 25)">
                            <b-row>
                                <b-col class="text-center align-middle">
                                    <h1>
                                    <i style="font-size:60px;" class="fa fa-flask"></i>
                                    </h1>
                                </b-col>
                                <b-col>
                                    <h2>{{pieData[2]}}</h2>
                                    <p>On Process</p>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                    <b-col cols="6" class="mb-3">
                        <b-card text-variant="white" style="background:rgb(255, 69, 96)">
                            <b-row>
                                <b-col class="text-center align-middle">
                                    <h1>
                                    <i style="font-size:60px;" class="fa fa-thumbs-o-down"></i>
                                    </h1>
                                </b-col>
                                <b-col>
                                    <h2>{{pieData[3]}}</h2>
                                    <p>Diclined</p>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pieData: [],
            chartOptions: {
                labels : ["On transit","Received","On Process","Declined"],
                responsive: [{
                    breakpoint: 380,
                    options: {
                        chart: {
                            width: 100
                        },
                        legend: {
                            position: 'bottom',
                        }
                    }
                }],
                animation : true
            }
        }
    },
    mounted(){
        this.loadData()
    },
    methods : {
        async loadData(){
            let req = await this.$store.dispatch('fetchDashboardData',{facility_cd : 'RITM'})
            this.pieData = req.data.pieData
        }
    }
}
</script>