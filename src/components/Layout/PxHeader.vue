<template>
    <header>
        <img class="ImageBackground"
        :src="require('@/assets/mobile/bg-pattern-header.svg')" alt="Background"/>
        <section>
            <router-link to="/home">
                <img :src="require('@/assets/desktop/logo.svg')" alt="Logo DevJobs"/>
            </router-link>
                <div class="ButtonContainer">
                <img :src="require('@/assets/desktop/icon-sun.svg')" alt='Sun'/>
                <div
                @click="changeBackground()"
                :class=" backgroundElement ? 'ButtonBackground Active' : 'ButtonBackground' "
                >
                    <div
                    class="BallBackground"
                    ></div>
                </div>
                <img :src="require('@/assets/desktop/icon-moon.svg')" alt='Moon'/>
            </div>
        </section>
    </header>
</template>

<script>

export default ({
  name: 'PxHeader',
  data() {
    return {
        backgroundElement: false,
        }
    },
    methods: {
        changeBackground(){
            console.log('Change')
            this.backgroundElement = !this.backgroundElement
            localStorage.setItem('backgroundValue', this.backgroundElement);
            this.$bus.$emit('change-background', this.backgroundElement)
        }
    },
    created(){
        let value = localStorage.getItem('backgroundValue')
        this.backgroundElement = value ? true : false;
        this.$bus.$emit('change-background', this.backgroundElement)
    }
})
</script>


<style scoped>
header{
    background: #5964DF;
    position: relative;
    min-height: 160px;
    max-height: 165px;
    display: flex;
    justify-content: center;
}
section{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    width: 100%;
    top: 0px;
    height: 100%;
    max-width: 1000px;
    animation: fadeInDown 1s both;
}
.ButtonContainer{
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-between;
}
.ButtonBackground{
    background: white;
    width: 50px;
    height: 25px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: unset;
    transition: all .5s ease;
    cursor: pointer;
}

.Active{
    justify-content: end;
    background: #19202d;
}
.BallBackground{
    background: #5964e0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-inline: 3px;
}
.ImageBackground{
    width: 100%;
    max-height: 165px;
}
@media (min-width: 800px){
    header,
    .ImageBackground{
        border-bottom-left-radius: 150px;
    }
}
  @keyframes fadeInDown {
  0% {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  transform: none;
  }
  } 
</style>