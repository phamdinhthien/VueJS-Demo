<template>
    <div class="footer">
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'component-footer',
    data(){
        return{
            msg: "Footer"
        }
    }
}
</script>

<style>
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        font-weight: 600;
        margin: 10px;
    }
</style>