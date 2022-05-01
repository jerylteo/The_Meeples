Vue.component('app-footer', {
    template:
    `
    <footer class="bg-quarternary p-8">
        <div class="flex justify-between items-center w-1/6 mx-auto">
            <button>
                <img src="Resources/icons/discord.png" alt="Discord">
            </button>
            <button>
                <img src="Resources/icons/twitter.png" alt="Twitter">
            </button>
            <button>
                <img src="Resources/icons/instagram.png" alt="Instagram">
            </button>
            <button>
                <img src="Resources/icons/youtube.png" alt="Youtube">
            </button>
        </div>
        <div class="flex justify-between items-center w-1/5 mx-auto pt-6">
            <button class="flex items-center justify-center" @click.prevent="openComp('bookCon')">    
                <p class="font-extrabold text-lg text-text">lore and story</p>
            </button>
            <p>|</p>
            <button class="flex items-center justify-center" @click.prevent="openComp('mapCon')">     
                <p class="font-extrabold text-lg text-text">roadmap</p>
            </button>
            <p>|</p>
            <button class="flex items-center justify-center" @click.prevent="openComp('faqCon')">
                <p class="font-extrabold text-lg text-text">FAQs</p>
            </button>
        </div>
        <div class="text-center pt-2">
            <p class="font-extrabold text-lg text-text">&copy; 2022 The Meeples</p>
        </div>
    </footer>
    `,
    data() {
        return {
            navMenu: this.$refs.navMenu
        }
    },
    methods: {
        openComp(comp) {
            this.$emit('openComp', comp);
        }
    }
})
