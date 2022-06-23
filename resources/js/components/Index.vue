<template>
    <div>
        <router-link :to="{ name: 'create.type'}">Добавить тип оборудования</router-link>
        <router-link :to="{ name: 'create.equipment'}">Добавить оборудование</router-link>
        <router-link :to="{ name: 'show.equipment.type'}">Показать все типы оборудования</router-link>
        <router-link :to="{ name: 'show.equipment'}">Показать всё оборудование</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'IndexComponent'
}
</script>
