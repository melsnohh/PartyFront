<template>
  
    <div class="AuxBoxGif">

        <div v-if="!isLoading">
        <img :src="'/assets/auxbox-gi.gif'" >
        </div>
        

    </div>


</template>

<script>


export default {

   

    created(){

        // http call will go here
        // once call is done
        // isLoading = false;
        
    }




}


</script>

<style>

.AuxBoxGif img{
    width: 400px;
    animation: image 3s infinite;
   
}

.AuxBoxGif{
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
}



 @keyframes image {
    50% {box-shadow: 8px 8px 16px rgb(70, 39, 122);}
 }


 

</style>