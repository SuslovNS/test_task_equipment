<template>
    <div class="w-25">
        <div class="mb-3">
            <select v-model="equipment_types_id">
                <option disabled>Выберите тип оборудования</option>
                <option v-for="type in equiptype" v-bind:value="type.id">
                    {{type.name}}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <input type="text" v-model="serial_number" placeholder="serial_number" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="note" placeholder="note" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="update"  type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "EditEquipment",

    data (){
        return {
            equipment_types_id: null,
            serial_number: null,
            note: null,
            equiptype: null,
        }
    },

    mounted() {
        this.getEquipment();
        this.getEquiptype();
    },

    methods: {
        getEquipment() {
            axios.get(`/api/equipment/${this.$route.params.id}`)
                .then( res=> {
                    this.equipment_types_id = res.data.data.equipment_types_id
                    this.serial_number = res.data.data.serial_number
                    this.note = res.data.data.note
                })
        },
        getEquiptype() {
            axios.get('/api/equipment-type/')
                .then(res => {
                    this.equiptype = res.data.data
                })
        },



        update(){
            axios.patch(`/api/equipment/edit/${this.$route.params.id}`, {equipment_types_id: this.equipment_types_id, serial_number:this.serial_number, note:this.note})
                .then( res => {
                    this.$router.push({name: 'show.equipment.one', params: {id: this.$route.params.id}})
                })
        }
    },
    computed: {
        isDisabled () {
            return this.equipment_types_id && this.serial_number && this.note
        }
    }
}
</script>

<style scoped>

</style>
