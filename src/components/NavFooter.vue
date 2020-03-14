<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="../../public/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link"></div>


    </div>
</template>

<script>
    export default {
        name: "NavFooter"
    }
</script>

<style lang="scss" scoped>
    @import "../resource/scss/config";
    .footer{
        height: 234px;
        border-top: 4px solid #FF6600 ;
        background-color: #333333;
        color:#999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }

        }
    }

</style>