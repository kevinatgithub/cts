<template>
  <img :src="'./img/icons/'+path+'.svg'" style="width:14px;" />
</template>

<script>
export default {
  props: ['path','size'],
}
</script>

