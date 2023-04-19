<template>
    <nav>
        <v-layout>
            <v-app-bar color="white" prominent>
                <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>  -->
                <RouterLink :to="{ name: 'home' }">
                    <v-toolbar-title><v-img src="../assets/alisan-logo.png" :width="150"
                            aspect-ratio="16/9" /></v-toolbar-title>
                </RouterLink>
                <v-spacer></v-spacer>
                <RouterLink :to="{ name: 'director' }">
                    <v-btn variant="text" color="red-darken-4">Yönetici Onay</v-btn>
                </RouterLink>
                <RouterLink :to="{ name: 'infosec' }">
                    <v-btn variant="text" color="red-darken-4">Bilgi Güvenliği Onay</v-btn>
                </RouterLink>
                <RouterLink :to="{ name: 'itdirector' }">
                    <v-btn variant="text" color="red-darken-4">IT Yönetici Onay</v-btn>
                </RouterLink>
            </v-app-bar>
        </v-layout>
    </nav>
</template>

<script>
export default {
    data: () => ({

    }),

    methods: {

    }
}
</script>