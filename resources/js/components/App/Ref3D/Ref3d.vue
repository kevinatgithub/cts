<template>
    <div>
        <a-scene embedded>
            <a-box
                v-for="(b,i) in boxes"
                :key="i"
                :position="b.position"
                rotation="0 50 0"
                :color="b.color"
                width="1.7"
            ></a-box>
        </a-scene>
    </div>
</template>
<script>
export default {
    props : ['compartments'],
    computed : {
        boxes(){
            let boxes = []
            this.compartments.map((c,i)=>{
                let x = 5+i
                boxes.push({
                    name : c.compartment_name,
                    position : "0 "+i+".5"+x+" -3",
                    rotation : "0 -50 0",
                    color : '#c1c1c1',
                    width : '1.5'
                })
            })
            return boxes
        }
    }
}
</script>
<style scoped>
a-scene{
    width:400px;
    height:400px;
}
</style>
