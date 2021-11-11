<template>
  <main>
    <modal-container :modal='modal' @closeElement='closeModal()'/>
    <section>
      <div :class="changeColor ? 'SearchContainer Active' : 'SearchContainer'">
        <div class="Search-Input">
          <img :src="require('@/assets/desktop/icon-search.svg')"  alt='Search'/>
          <input
          v-model='InputElement' 
          @keyup.enter="searchElement()"
          type='text' 
          placeholder="Filter by title..."
          />
        </div>
        <div
        class="Search-Location"
        >
          <img :src="require('@/assets/desktop/icon-location.svg')"  alt='Locations'/>
          <input
          v-model='location' 
          @keyup.enter="searchElement()"
          type='text' 
          placeholder="Filter by Location..."
          />
        </div>
        <div class="CheckboxSearch">
          <form>
            <input 
            type="checkbox"
            @change="ChangeCheckbox()"
            />
            <label>Full-Time</label>
          </form>
          <button
          @click="searchElement()"
          >Search</button>
        </div>
        <div class="Search-Buttons">
          <img 
          @click="ModalTonggle()"
          :src="require('@/assets/mobile/icon-filter.svg')" 
          alt='Filter'/>
          <div 
          class="ButtonSearch"
          @click="searchElement()"
          >
            <img :src="require('@/assets/desktop/icon-search_white.svg')" alt='Search'/>
          </div>
        </div>
      </div>
    </section>
    <ElementContainer
    :ElementData='elements'
    />
  </main>
</template>

<script>
import ElementContainer from '@/components/Main/ElementContainer'
import { SearchFilter, SearchElement } from '../data/DetailsElements' 
import ModalContainer from '../components/Layout/Modal.vue'

export default ({
    name: 'MainPage',
    data(){
        return{
            InputElement: '',
            checkboxTime: false,
            location:'',
            elements: [],
            modal: false,
            changeColor: false
        }
    },
    components: {
        ElementContainer,
        ModalContainer
    },
    methods: {
      searchElement (){
        this.elements =  SearchFilter(
          this.InputElement.toLowerCase(),
          this.location.toLowerCase(),
          this.checkboxTime
          )
      },
      ModalTonggle(){
        this.modal = true
      },
      closeModal(){
        this.modal = false
      },
      ChangeCheckbox(){
        this.checkboxTime = !this.checkboxTime
      }
    },
    created(){
      this.elements = SearchElement()
      const value = localStorage.getItem('backgroundValue')
      this.changeColor = value
      this.$bus.$on('change-background', (data)=> {
        this.changeColor = data
        })
    },
})
</script>

<style scoped>
section{
  width: 100%;
  position: relative;
  top: -15px;
}
.SearchContainer{
  background: white;
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px;
  justify-content: space-between;
  transition: all .5s ease;
}
.Search-Input,
.Search-Location{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
input{
  width: 80%;
  padding: 10px 5px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  background: none;
}
::placeholder{
    font-size: 1.2rem;
}
.Active{
  background: #19202d;
}
.ButtonSearch{
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: #5964DF;
}
.Search-Buttons{
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
form{
  display: flex;
}
form > input {
  width: 20px;
}
label{
  font-weight: 500;
}
.CheckboxSearch{
  display: none;  
  justify-content: space-between;
  align-items: center;
}
button{
      background: #5964e0;
    border: none;
    padding: 10px 15px;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
    font-weight: 600;
}
.Search-Location{
  display: none;
}
@media (min-width: 800px){
  .SearchContainer{
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 20px;
  }
  .Search-Buttons{
    display: none;
  }
  .Search-Location{
    display: flex;
  }
  .CheckboxSearch{
    display: flex;
  }
}
</style>