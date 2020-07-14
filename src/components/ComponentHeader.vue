<template>
    <h3 class="header">
        {{msg}}
    </h3>
</template>

<script>
export default {
    name: 'component-header',
    data(){
        return{
            msg: "HEADER"
        }
    }
}
</script>

<style>
.header{
    text-align: center;
    padding: 10px;
    font-weight: 600;
}
</style>