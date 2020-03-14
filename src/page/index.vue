<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper :options="swiperOption">
                    <swiper-slide class="swiper-slider" v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>

                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>

                </swiper>

            </div>
            <div class="ads-box"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from "../components/ServiceBar";
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from  'vue-awesome-swiper'
    import img1 from '../../public/imgs/slider/slide-1.jpg'
    import img2 from '../../public/imgs/slider/slide-2.jpg'
    export default {
        name: "index",
        components:{
           ServiceBar,
           swiper,
           swiperSlide
        },
       data(){
           return {
              swiperOption:{
                 autoplay:true,
                 loop:true,
                 effect:'cube',
                 cubeEffect:{
                    slideShadows:true,
                    shadow:true,
                    shadowOffset:100,
                    shadowScale:0.6
                 },
                 pagination:{
                    el:'.swiper-pagination'
                 },
                 navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                 }


              },
              slideList:[
                 {
                    id:1,
                    img:img1
                 },
                 {
                    id:1,
                    img:img2
                 },
                 {
                    id:1,
                    img:img1
                 },
                 {
                    id:1,
                    img:img1
                 }
              ]
           }
       }
    }
</script>

<style lang="scss" scoped>
    .index{
        .swiper-box {
            .swiper-container{
                height: 451px;
                .swiper-slider{
                    width: 100%;
                }
                img{
                    width: 100%;
                    height: 100%;

                }


            }
        }
    }

</style>
