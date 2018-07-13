<template>
    <b-row>
    <b-container>
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#FFFFFF"
                    :interval="5000"
                    img-width="1024"
                    img-height="300"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >
            <!-- Text slides with image -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
                <b-button to="/shopping" variant="primary"><h2>Make shopping with us..</h2></b-button></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"  >
                <b-button to="/shopping" variant="primary"><h2>More about trading with us..</h2></b-button>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
                <img slot="img" class="d-block img-fluid w-100" width="1024" height="300"
                     src="https://picsum.photos/1024/480/?image=55" alt="image slot">
            </b-carousel-slide>


        </b-carousel>
    </b-container>
    <b-container >

    </b-container>
     <b-col md="12">
         <span>Footer</span>
     </b-col>
    </b-row>
</template>

<script>
    export default {
        data() { return {
               name: "homePage",
               slide: 0
               }
        },
        computed : {
            loading() {return this.$store.getters.loading}
        },
        created () {
          if (this.$route.query['loginError']) {
              this.$store.dispatch('setError','Please log in to access this page.')
          }
        },
        methods :{
            onSlideStart (){},
            onSlideEnd(){}
        }
    }
</script>

<style scoped>

</style>