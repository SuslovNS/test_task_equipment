<template>
<div>
    <div>
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
                <input type="text" v-model="serial_number" placeholder="Введите серийный номер" class="form-control">
            </div>
            <div class="mb-3">
                <input type="text" v-model="note" placeholder="Примечание" class="form-control">
            </div>
            <div v-if="errors" v-for="error in errors">
                <div class="m-alert m-alert--outline alert-danger alert-dismissible" role="alert">
                    <span>
                        {{error}}
                    </span>
                </div>
            </div>
            <div class="mb-3">
                <input :disabled="!isDisabled" @click.prevent="store" type="submit" value="Добавить" class="btn btn-primary">
            </div>
            <div class="container">
                    <input type="file" @change="onChange">
                    <input type="submit" @click.prevent="upload" value="Загрузить Json">

            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "CreateEquipment",

    data (){
        return {
            equipment_types_id: null,
            equiptype: null,
            serial_number: null,
            note: null,
            file: '',
            errors: []

        }
    },

    mounted() {
        this.getEquiptype()
    },

    methods: {
        store (){
            axios.post('api/store/equipment', {equipment_types_id: this.equipment_types_id, serial_number:this.serial_number, note:this.note })
                .then( res => {
                    this.$router.push({ name:'show.equipment'})
                })
                .catch((error) => {
                    this.errors = error.response.data.errors.serial_number;
                    console.log(errors);
                })
        },
        getEquiptype() {
            axios.get('/api/equipment-type/')
                .then(res => {
                    this.equiptype = res.data.data
                })

        },
        onChange(e){
            console.log('selected file', e.target.files[0])
            this.file = e.target.files[0];
        },
        upload(){
            let fd = new FormData();
            fd.append('file', this.file);
            axios.post('api/equipment/upload', fd,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(res => {
                    this.$router.push({ name:'show.equipment'})
                    console.log(res.data)
                }).catch(err=>console.log(err))
        },

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
