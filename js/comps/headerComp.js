Vue.component('app-header', {
    template:
    `
    <header class="h-18 bg-quarternary relative flex overflow-visible justify-between items-center p-4 z-40">
        <button class="flex flex-col justify-between" @click.prevent="showMenu">
            <span class="block w-10 h-2 bg-gray-800 rounded"></span>
            <span class="block w-10 h-2 bg-gray-800 mt-1 rounded"></span>
            <span class="block w-10 h-2 bg-gray-800 mt-1 rounded"></span>
        </button>
        <div class="flex flex-col">
            <div class="rounded-xl pt-8 w-72">
                <img class="w-full h-full object-contain" src="./Resources/The Meeples Coloured Logotype.png" alt="The Meeples">
            </div>
        </div>
        <div></div>
        <nav class="hidden w-96 bg-white rounded-b-3xl" ref="navMenu" id="navMenu">
            <app-nav @closeMenu="closeMenu" @openComp="openComp"></app-nav>
        </nav>
    </header>
    `,
    data() {
        return {
            navMenu: this.$refs.navMenu
        }
    },
    methods: {
        showMenu() {
            this.$emit('showMenu');
            navMenu.classList.remove("hidden");
        },
        closeMenu() {
            this.$emit('closeMenu');
            navMenu.classList.add("hidden");
        },
        openComp(comp) {
            this.closeMenu();
            this.$emit('openComp', comp);
        }
    }
})
