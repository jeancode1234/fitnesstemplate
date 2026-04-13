<template>
   
    <div class="w-full ">
       <FormationFbwa/>
       <Footer/>
    </div>
</template>
<script>
import FormationFbwa from './FormationFbwa.vue';
import Footer from './FooterView.vue';

export default{
    data(){
        return{
         isLoading: true,
        }
    },
    mounted(){
        
    },
    components:{
        FormationFbwa,
        Footer,
       
    }
}
</script>
