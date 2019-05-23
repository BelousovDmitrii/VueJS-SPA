<template>
    <div :class="'tarif-item tarif-item_id-' + id" >
        <div class="tarif-item__title">{{title}}</div>
        <div class="tarif-item__content" @click="goToTarifMounths(id)">
            <div class="tarif-item__speed">{{speed}} Мбит/с</div>
            <div class="tarif-item__price">{{price_first}} - {{price_last}} Р/мес</div>
            <div class="tarif-item__free-options"  v-if='free_options'>
                <div class="tarif-item__free-option" v-for='(option, index) in free_options' v-bind:key='index'>
                    {{option}}
                </div>
            </div>
        </div>
        <div class="tarif-item__bottom">
            <div class="tarif-item__link"><a v-bind:href="link">Узнать подробнее на sknt.ru</a>
        </div>
        
    </div>
</template>
<script>
export default {
    methods:{
        goToTarifMounths(tarif_id) {
            this.$router.push({name:'TarifsMounthsList',params:{Tid:tarif_id}})
        }
    },
    props:{
        title:String,
        speed: String,
        id:Number,
        tarifs:Array,
        price_first: Number,
        price_last: Number,
        free_options: Array,
        link:String,
    }
}
</script>

