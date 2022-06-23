<template>
    <div>

        <input type="text" placeholder="Поиск по типу..." v-model="search" class="form-control-lg ">

        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Mask</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="type in equiptype">
                <td>{{ type.id }}</td>
                <td>{{ type.name }}</td>
                <td>{{ type.mask }}</td>

            </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li
                    :class="{disabled: !pagination.prev_page_url}"
                    class="page-item"
                    @click.prevent="getEquiptype(pagination.prev_page_url)">
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
                    @click.prevent="getEquiptype(pagination.next_page_url)">
                    <a class="page-link" href="#">Следующая страница</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "ShowAllEquipmentTypes",


    data() {
        return {
            equiptype: null,
            pagination: {},
            paginationpage: {},
            search: '',
        }
    },

    mounted() {
        this.getEquiptype()
    },

    methods: {
        getEquiptype(page_url) {
            page_url = page_url || 'api/equipment-type/paginate'
            axios.get(page_url)
                .then(res => {
                    this.equiptype = res.data.data
                    this.makePagination(res.data.links)
                    this.makePaginationPage( res.data.meta)
                })
        },
        makePagination(res){
            let pagination = {
                last_page: res.last,
                prev_page_url: res.prev,
                next_page_url: res.next,

            }
            this.pagination = pagination
        },
        makePaginationPage(res){
            let paginationpage = {
                current_page: res.current_page,
                last_page: res.last_page,


            }
            this.paginationpage = paginationpage
        },
        searchdata(val){
            axios.get('api/equipment-type/search/'+val)
            .then(res => {
                this.equiptype= res.data.data
            })
        }
    },
    watch:{
        search:function (){
            this.searchdata(this.search);
        }
    },
}
</script>

<style scoped>

</style>
