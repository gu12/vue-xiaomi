<template>
    <div class="service">
        <div class="container">
           <ul>
               <li><span class=" icon icon-setting"></span>预约维修服务</li>
               <li><span class=" icon icon-7day"></span>7天无理由退货</li>
               <li><span class=" icon icon-15day"></span>15天无理由包换</li>
               <li><span class=" icon icon-post"></span>满150元包邮</li>
           </ul>
        </div>
    </div>
</template>

<script>
   export default {
      name: "ServiceBar"
   }
</script>

<style lang="scss" scoped>
    @import "./../assets/scss/mixin.scss";
    .service{
        padding: 33px 0;
        color: #666666;
        font-size: 16px;
        li{
            display: inline-block;
            width: 24.9%;
            text-align: center;
            border-right: 1px solid #E5E5E5;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
                margin-right: 8px;
            }


            .icon-setting{
                background:url("../../public/imgs/icon-setting.png") no-repeat center;
            }
            .icon-7day{
                background:url("../../public/imgs/icon-7day.png") no-repeat center;
            }
            .icon-15day{
                background:url("../../public/imgs/icon-15day.png") no-repeat center;
            }
            .icon-post{
                background:url("../../public/imgs/icon-post.png") no-repeat center;
            }
            .icon{
                @include bgImg(20px,20px,contain);
            }

        }
    }

</style>
