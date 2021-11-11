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
@media (min-width: 900px){
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1000px;
        margin: 30px auto;
    }
}
</style>
