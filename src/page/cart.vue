<template>
    <div>
        order
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import OrderHeader from "../components/OrderHeader";
    import NavFooter from "../components/NavFooter";
    export default {
        name: "order",
        components:{
            OrderHeader,
            NavFooter
        }
    }
</script>

<style scoped>

</style>