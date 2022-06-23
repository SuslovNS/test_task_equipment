<template>
    <div>
        <input type="text" placeholder="Поиск по cерийному номеру..." v-model="searchsn" class="form-control-lg offset-3">
        <input type="text" placeholder="Поиск по примечанию..." v-model="searchnote" class="form-control-lg offset-4">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">ID типа оборудования</th>
                <th scope="col">Серийный номер</th>
                <th scope="col">Примечание</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="equip in equipment">
                <td>{{ equip.id }}</td>
                <td>{{ equip.equipment_types_id }}</td>
                <td>
                    <router-link :to="{name: 'show.equipment.one', params: {id: equip.id}}"> {{ equip.serial_number }}</router-link>
                </td>
                <td>{{ equip.note }}</td>
                <td><a @click.prevent="deleteEquipment(equip.id)" href="#" class="btn btn-outline-danger">Удалить</a></td>

            </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li
                    :class="{disabled: !pagination.prev_page_url}"
                    class="page-item"
                    @click.prevent="getEquipment(pagination.prev_page_url)">
                    <a class="page-link" href="#">Предыдущая страница</a>
                </li>
                <li class="page-item disabled">
                    <a class="page-link" href="#">
                        Страница {{paginationpage.current_page}} из {{paginationpage.last_page}}
                    </a>
                </li>
                <li
                    :class="{disabled: !pagination.next_page_url}"
                    class="page-item"
                    @click.prevent="getEquipment(pagination.next_page_url)">
                    <a class="page-link" href="#">Следующая страница</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "ShowAllEquipment",

    data() {
        return {
            equipment: null,
            equiptype: null,
            pagination: {},
            paginationpage: {},
            searchsn: '',
            searchnote: '',
        }
    },

    mounted() {
        this.getEquipment();
        this.getEquiptype();

    },


    methods: {
        getEquipment(page_url) {
            page_url = page_url || '/api/equipment'
            axios.get(page_url)
                .then(res => {
                    this.equipment = res.data.data
                    this.makePagination(res.data.links)
                    this.makePaginationPage(res.data.meta)
                })
        },
        getEquiptype() {
            axios.get('/api/equipment-type/')
                .then(res => {
                    this.equiptype = res.data.data
                })
        },
        deleteEquipment(id) {
            axios.delete(`/api/equipment/${id}`)
                .then(res => {
                    this.getEquipment()
                })
        },
        makePagination(res) {
            let pagination = {
                last_page: res.last,
                prev_page_url: res.prev,
                next_page_url: res.next,

            }
            this.pagination = pagination
        },
        makePaginationPage(res) {
            let paginationpage = {
                current_page: res.current_page,
                last_page: res.last_page,


            }
            this.paginationpage = paginationpage
        },
        searchsndata(val) {
            axios.get('api/equipment/search/'+val)
                .then(res => {
                    this.equipment = res.data.data
                })
        },
        searchnotedata(value) {
            axios.get('api/equipment/note/search/'+value)
                .then(res => {
                    this.equipment = res.data.data
                })
        },

    },
    watch: {
        searchsn: function () {
            this.searchsndata(this.searchsn);
        },
        searchnote: function () {
            this.searchnotedata(this.searchnote);
        },
    },


}

</script>

<style scoped>

</style>
