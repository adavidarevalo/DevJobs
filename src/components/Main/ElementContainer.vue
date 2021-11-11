<template>
    <section>
        <div
        class="Container"
        >
            <div class="Container-Element"
            v-for="item in elements"
            :key="item.id"
            >
                <ElementCard :item='item'/>
            </div>
            <p 
            v-show="elements.length === 0"
            class="NotFoundMSG"
            >0 items found</p>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
import ElementCard from "@/components/Main/ElementCard";

export default ({
  name: 'ElementContainer',
  props: ['ElementData'],
  data() {
    return {
      elements: this.ElementData,
    }
  },
  components: {
        ElementCard
    },
  watch: {
    ElementData: {
        immediate: true, 
        handler (val) {
            this.elements = val
            }
        }
    }
})
</script>

<style scoped>
.Container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-block: 50px 20px;
}
.NotFoundMSG{
    grid-column-start: 2;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 2px;
}
@media (min-width: 900px){
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1000px;
        margin: 30px auto;
    }
}
</style>
