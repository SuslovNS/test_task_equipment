<template>
    <div>
        <div v-if="equipment">
            <div>
                Тип оборудования: {{this.equipment.equipment_types_id}}
            </div>
            <div>
                Серйный номер: {{this.equipment.serial_number}}
            </div>
            <div>
                Примечание: {{this.equipment.note}}
            </div>
                <router-link :to="{name:'edit.equipment', params: {id: this.equipment.id}}">Edit</router-link>

        </div>

    </div>
</template>

<script>
export default {
    name: "ShowOneEquipment",

    data (){
        return {
            equipment: null,


        }
    },

    mounted() {
        this.getEquipment();

    },
    methods: {
        getEquipment() {
            axios.get(`/api/equipment/${this.$route.params.id}`)
                .then( res=> {
                    this.equipment = res.data.data
                })
        },

    }
}
</script>

<style scoped>

</style>
