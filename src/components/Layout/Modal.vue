<template>
    <section v-bind:class="openModal && 'Active'">
        <img 
        class="closeIcon"
        @click="closeModal()"
        :src='require("@/assets/mobile/close.svg")' alt='Close Icons'/>
        <div class="Container-Element">
            <div class="Modal-Location">
                <img :src="require('@/assets/desktop/icon-location.svg')"  alt='Locations'/>
                <input
                v-model='location' 
                type='text' 
                placeholder="Filter by Location..."
                />
            </div>
            <form>
                <input type="checkbox"/>
                <label>Full-Time Only</label>
            </form>    
            <div class="Modal-Search">
                <button>Search</button>
            </div>
        </div>
    </section>
</template>

<script>

export default ({
    name: 'ModalContainer',
    props: ['modal'],
    data(){
        return{
            openModal: this.modal
        }
    },
    watch: {
        modal: {
            immediate: true, 
            handler (val) {
                this.openModal = val
        }
        }
    },
    methods: {
        closeModal(){
            this.$emit('closeElement')
        }
    }
})
</script>


<style scoped>
section{
    background: #282828c2;
    position: fixed !important;
    height: 110vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-110vh);
    transition: all 1s ease;
}
.closeIcon{
    position: absolute;
    top: 5%;
    right: 5%;
    width: 28px;
}
.Active{
    transform: translateY(0px);
    top: 0px;
}
.Container-Element{
    background: white;
    width: 80%;
    border-radius: 5px;
}
.Modal-Location{
    padding: 15px 0px;
    border-bottom: 1px solid #80808094;
    display: flex;
    justify-content: space-around;
}
form{
  display: flex;
  justify-content: center;
  padding-block: 15px;
  border-bottom: 1px solid #80808094;
}
label{
  font-weight: 500;
  text-align: center;
}
.Modal-Search{
    width: 100%;
    padding-block: 15px;

}
input{
    outline: none;
}
button{
    background: #5964e0;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    padding: 6px 15px;
    border-radius: 5px;
    width: 50%;
}
</style>