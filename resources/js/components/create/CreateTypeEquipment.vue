<template>
<div>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="Имя" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="mask" placeholder="Маска серийного номера" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="store" type="submit" value="Добавить" class="btn btn-primary">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "CreateTypeEquipment",

    data (){
        return {
            name: null,
            mask: null,
        }
    },

    methods: {
        store (){
            axios.post('api/store/equipment-type', {name: this.name, mask:this.mask})
                .then( res => {
                    this.$router.push({ name:'show.equipment.type'})
                })
        }
    },

    computed: {
        isDisabled () {
            return this.name && this.mask
        }
    }
}
</script>

<style scoped>

</style>
