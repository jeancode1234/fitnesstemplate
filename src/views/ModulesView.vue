<template>
   <div>
    <AllmodulesComponent/>
    <PromoComponent/>
    <FooterView/>
   </div>
</template>

<script>
import PromoComponent from '@/components/PromoComponent.vue';
import FooterView from './FooterView.vue';
import AllmodulesComponent from '@/components/AllmodulesComponent.vue';
export default{
    data(){
        return{

        }
    },

    components:{
        AllmodulesComponent,
        FooterView,
        PromoComponent
    }
}
</script>
<style>
#module {
    background-image: linear-gradient(rgba(40, 39, 128, 0.8), rgba(40, 39, 128, 0.8)), url('@/assets/images/background.jpg');
    background-position: center;
    background-size: contain;
    background-repeat: repeat;
}
</style>