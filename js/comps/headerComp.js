Vue.component('app-header', {
    template:
    `
    <header class="h-18 bg-white relative flex justify-between items-center p-4 z-40">
        <button class="space-y-2" @click.prevent="showMenu">
            <span class="block w-8 h-0.5 bg-gray-800"></span>
            <span class="block w-8 h-0.5 bg-gray-800"></span>
            <span class="block w-5 h-0.5 bg-gray-800"></span>
        </button>
        <div class="flex flex-col pt-12">
            <p class="text-center text-xl font-extrabold">warm welcome to</p>
            <div class="bg-white rounded-xl px-8 pb-4">
                <!-- <img src="/Resources/The Meeples.png" alt="logo"> -->
                <h1 class="text-6xl">
                    <span class="text-primary">Th</span><span class="text-secondary">e M</span><span class="text-tertiary">ee</span><span class="text-quarternary">pl</span><span class="text-quinary">es</span>
                </h1>
            </div>
        </div>
        <div></div>
        <nav class="hidden w-96 bg-white rounded-b-3xl" ref="navMenu" id="navMenu">
            <app-nav @closeMenu="closeMenu"></app-nav>
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
            navMenu.classList.remove("hidden");
            navMenu.classList.add("grid");
        },
        closeMenu() {
            navMenu.classList.remove("grid")
            navMenu.classList.add("hidden")
        }
    }
})
