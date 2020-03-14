<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"> <span class="icon-cart"></span> 购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="i in 6">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1937ecb7e9b8e1aee11d6936e19d53c.png" alt="">
                                        </div>
                                        <div class="pro-name">红米K20 Pro</div>
                                        <div class="pro-price">399元起</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="i in 6">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png" alt="">
                                        </div>
                                        <div class="pro-name">小米电视 Pro</div>
                                        <div class="pro-price">399元起</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keywords">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "NavHeader",
        data(){
        	return{
        		username:'jack',
                phoneList:[]
            }
            },
         filters:{
        	currency(val){
        		if(!val) return '0.00'
              return '￥'+val.toFixed(2) + '元'
            }
         },
          mounted() {
        	  this.getProductList()



            },
          methods:{
        	login(){
                    this.$router.push('/login')

            },
        	getProductList(){
        		this.axios.get('/products',{
        			categoryId:'10012'
                }).then((res)=>{
                	if(res.list.length > 6){
                		this.phoneList = res.list.slice(4,10)
                    }
                })

            },
            goToCart(){
        		this.$router.push('/cart')
            }

          }
		}
</script>

<style lang="scss" scoped>
    @import "../resource/scss/base";
    @import "../assets/scss/mixin";
    @import "../resource/scss/config";
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;

            .container {
                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                display: flex;
                justify-content: space-between;

                a {
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }

                .my-cart {
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #ffffff;

                    .icon-cart {
                        display: inline-block;
                        width: 16px;
                        height: 12px;
                        margin-right: 4px;
                        background: url("../../public/imgs/icon-cart-checked.png") no-repeat center;
                        background-size: contain;
                    }
                }
            }
        }

        .nav-header {
            .container {
                position: relative;
                height: 112px;
                @include flex;
                .header-logo {
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;

                    a {
                        display: inline-block;
                        width: 110px;
                        height: 55px;

                        &:before {
                            content: '';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url("../../public/imgs/mi-logo.png") no-repeat center;
                            background-size: 55px;
                            transition: margin .2s;

                        }

                        &:after {
                            content: '';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url("../../public/imgs/mi-home.png") no-repeat center;
                            background-size: 55px;
                        }

                        &:hover:before {
                            margin-left: -55px;
                            transition: margin .2s;
                        }

                    }

                }

                .header-menu {
                    display: inline-block;
                    padding-left: 209px;
                    width: 643px;

                    .item-menu {
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;

                        span {
                            cursor: pointer;
                        }

                        &:hover {
                            color:$colorA;
                            .children{
                                height: 220px;
                                opacity: 1;

                            }

                        }
                        .children{
                            position: absolute;
                            top:112px;
                            left: 0;
                            height: 0;
                            opacity: 0;
                            transition: all .5s;
                            width: 1226px;
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                            z-index: 10;
                            background: #ffffff;
                            .product{
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height: 137px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color:$colorB
                                }
                                .pro-price{
                                    color:$colorA
                                }
                                &:before{
                                    content: '';
                                    position: absolute;
                                    top:28px;
                                    right: 0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                }
                                &:last-child:before{
                                    display: none;

                                }
                            }

                        }

                    }
                }

                .header-search {
                    width: 319px;

                    .wrapper {
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        box-sizing: border-box;
                        border-left: none;
                        display: flex;
                        align-items: center;
                        input{
                            box-sizing: border-box;
                            /*border-right: 1px solid #E0E0E0;*/
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            background: url("../../public/imgs/icon-search.png") no-repeat center;
                            background-size: contain;
                            margin-left: 17px;
                        }

                    }
                }

            }
        }
    }

</style>
