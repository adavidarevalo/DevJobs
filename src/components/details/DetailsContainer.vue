<template>
    <section :class="changeColor && 'Change-Color'">
        <div class="Details-Header">
                <div 
                class="Details-header_logo"
                :style="{background: data[0].logoBackground}"
                >
                    <img :src="data[0].logo" alt='ImageElement'/>
                </div>
            <div class="Details-Header_Info">
                <h2>{{data[0].company}}</h2>
                <p>{{data[0].website}}</p>
            </div>
            <div>
                <button class="Button-Site">Company Site</button>
            </div>
        </div>
        <div class="Details-Main">
            <div class="Details-Main_Header">
                <div>
                    <p>{{data[0].postedAt}} · {{data[0].contract}}</p>
                    <h2>{{data[0].position}}</h2>
                    <p>{{data[0].location}}</p>
                </div>
                <div class="Details-Main_Button">
                    <button>Apply Now</button>
                </div>
            </div>
            <p>{{data[0].description}}</p>
            <h3>Requiremenets</h3>
            <p>{{data[0].requirements.content}}</p>
            <ul>
                <li 
                v-for="(item, index) in data[0].requirements.items"
                :key="index"
                ><span>{{item}}</span></li>
            </ul>
            <h3>What You Will Do</h3>
            <p>{{data[0].role.content}}</p>
            <ul>
                <li 
                v-for="(item, index) in data[0].role.items"
                :key="index"
                ><span>{{item}}</span></li>
            </ul>
        </div>
        <div class="Details-Footer">
            <div class="Details-Footer_Container">
                <div class="Details-Footer_Info">
                    <h2>{{data[0].position}}</h2>
                    <p>{{data[0].company}}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    </section>
</template>

<script>
import { SearchElement } from '@/data/DetailsElements'

export default ({
    name: 'DetailsContainer',
    data(){
        return{
            data: [],
            changeColor: false
        }
    },
    created(){
        this.getInformation()
        this.getElement()
        this.$bus.$on('change-background', (data)=> {
             this.getElement()
        })
    },
    methods: {
        getInformation(){
            const id = this.$route.params.id
            this.data = SearchElement(id)
        },
        getElement(){
            let value = localStorage.getItem('backgroundValue')
                this.changeColor = value === "false" ? false : true;
        }
    }
})
</script>

<style scoped>
section{
    display: flex;
    flex-direction: column;
    align-items: center;
}
p{
    line-height: 1.625rem;
    color: #6e8098;
}
.Details-Header{
    background: white;
    width: 90%;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    top: -15px;
    max-width: 900px;
    animation: fadeIn 1s both;
}
.Details-header_logo{
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: absolute;
    top: -25px;
}
.Button-Site{
    background: #eef0fc;
    color: #5964e0;
}
button:hover{
    background: #5964e0e8;
}
.Button-Site:hover{
    background: #bdbdbd;
}
.Details-Main{
    background: white;
    width: 90%;
    border-radius: 5px;
    padding: 30px 15px 20px;
    box-sizing: border-box;
    text-align: initial;
    max-width: 900px;
    animation: fadeIn 1s both 1s;
}


.Details-Main_Header > div > p,
.Details-Main_Header > div > h2{
    margin: 0px;
}
.Details-Main_Header > div > h2{
    font-size: 1.3rem;
    margin-block: 3px;
}
.Details-Main_Header > div > p{
    color: #6e8098;
    font-weight: 600;
}
.Details-Main_Header > div > p:last-child{
    font-weight: bold;
    color: #5964e0;
}
li{
    color: #5964e0;
}
span{
    color: #2c3e50;
}
.Details-Main_Button{
    width: 100%;
    padding-top: 25px;
    display: flex;
    justify-content: center;
}
.Details-Footer{
    background: white;
    padding-block: 20px;
    width: 100%;
    margin-top: 25px;
    animation: fadeIn 1s both 2s;
}
.Details-Footer_Container{
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    max-width: 1000px;
    align-items: center;
}
.Details-Footer_Info{
    display: none;
}
.Details-Footer_Info > h2,
.Details-Footer_Info > p{
    text-align: initial;
    margin: 0px;
}
button{
    background: #5964e0;
    color: white;
    border: none;
    font-size: 1.1rem;
    padding: 7px 15px;
    border-radius: 5px;
    font-weight: 600;
}

.Change-Color > .Details-Header,
.Change-Color > .Details-Main,
.Change-Color > .Details-Footer,
.Change-Color > h2,
.Change-Color > div > ul > li > span,
.Change-Color > div > p {
    transition: all .5s ease;
    background: #19202D;
    color: white;
}
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  } 
@media (min-width: 750px){
    .Details-header_logo{
        position: initial;
        width: 100%;
        height: 100%;
    }
    .Details-Header_Info{
        text-align: initial;
        margin-left: 25px;
    }
    .Details-Header{
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
        padding: 0px;
    }
    .Details-Main_Header{
        display: flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .Details-Main_Button{
        width: auto;
        padding: 0px;
    }
    .Details-Main{
        padding: 40px 30px 40px;
    }
    .Details-Footer_Info{
        display: block;
    }
    .Details-Footer_Container{
        justify-content: space-between;
    }
}

</style>