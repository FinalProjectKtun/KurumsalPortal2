<template>
    <div class="director pt-10">
        <!-- <DirectorPage /> -->
        <h1 class="director-page-header d-flex justify-center" color="#CD9394">Bilgi Güvenliği Onay Ekranı</h1>
        <DataTable/>
    </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
// import DirectorPage from '@/components/DirectorPage.vue';

export default {
    name: "InfoSecurityView",
    components: {
    // DirectorPage,
    DataTable
},

    data: () => ({

    })
}
</script>

<style>
    .director-page-header {
        color: #B71C1C;
    }
</style>