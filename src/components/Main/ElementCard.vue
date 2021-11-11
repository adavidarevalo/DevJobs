<template>
    <router-link :to="{name: 'job', params: {id: item.id}}">
    <div :class="changeColor ? 'card-Container Active' : 'card-Container'">
            <div v-bind:style="{ background: item.logoBackground }"
                class="Card-Logo">
                <img :src='item.logo' :alt='item.title'/>
            </div>
            <p>{{item.postedAt}} · {{item.contract}}</p>
            <h2>{{item.position}}</h2>
            <p>{{item.company}}</p>
            <p>{{item.location}}</p>
    </div>
    </router-link>
</template>

<script>

export default ({
  name: 'ElementCard',
  props: ['item'],
  data(){
      return{
          changeColor: false
      }
  },
  created(){
    const value = localStorage.getItem('backgroundValue')
    this.changeColor = value
    this.$bus.$on('change-background', (data)=> {
        this.changeColor = data
    })
  }
});
</script>

<style scoped>
.card-Container{
    background: white;
    background: white;
    border-radius: 10px;
    width: 245px;
    position: relative;
    padding: 40px 20px 20px ;
    text-align: initial;
    margin: 0 auto;
    margin-block: 20px 50px;
    margin-inline: 20px;
    min-height: 160px;
    transition: all .5s ease;
}
.Active{
    background: #19202d;
}
.Active > h2{
    color: white;
}
.Card-Logo{
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: absolute;
    left: 25px;
    top: -25px;
}
p, h2{
    margin: 0px;
    color: #6e8098;
    font-weight: 500;
}
h2{
    color: black;
    font-size: 1.3rem;
    margin-block: 15px 0px;
    font-weight: 800;
}
p:last-child{
    color: #5964e0;
    font-weight: 900;
    margin-top: 20px;
}
</style>
