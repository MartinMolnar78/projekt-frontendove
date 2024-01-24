<template>
    <body>
        <header>
            <div class="things">
                <div class="wrapper">
                    <div class="logo">
                        <a href=""><img src="../../public/images/logo1.jpg"></a>
                    </div>
                    <div class="navbar">
                        <div class="close-nav"><button>×</button></div>
                        <nav>
                            <ul>
                                <li v-for="link in links" :key="link.path">
                                    <router-link :to="link.path">
                                        {{ link.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </body>
</template>

<style scoped>
@import '../../src/assets/menufoot.css';

</style>

<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    },
    data() {
        return {
            links: [
                { name: 'Introduction', path: '/' },
                { name: 'Studio A', path: '/studio-a' },
                { name: 'Gear', path: '/gear' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contacts', path: '/contacts' }
            ]
        };
    }
};
</script>
