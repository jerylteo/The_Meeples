Vue.component('app-main', {
    template:
    `
    <section class="h-full">
        <app-header @showMenu="showMenu" @closeMenu="closeMenu" @openComp="openComp"></app-header>
        <main class="absolute top-0 left-0 h-full w-full z-10" id="main">
            <div id="overlay" class="transition-opacity bg-black opacity-0 h-full w-full"></div>

            <button @click="mouseClick" id="whitepaperCon" class="compButton absolute" style="top: 20%; left: 32%;"></button>
            <button @click="mouseClick" id="portraitCon" class="compButton absolute" style="top: 58%; left: 32%;"></button>
            <app-portraitCon v-if="component == 'portraitCon'" @closeComp="closeComp"></app-portraitCon>

            <div id="computerCon" class="absolute top-152 left-240 w-72 h-40 flex flex-col items-center justify-center"></div>
            <button @click="mouseClick" id="bookCon" class="compButton absolute" style="top: 69%; left: 52%;"></button>
            <app-bookCon v-if="component == 'bookCon'" @closeComp="closeComp"></app-bookCon>
            
            <button @click="mouseClick" id="mapCon" class="compButton absolute" style="top: 74%; left: 63%"></button>
            <app-mapCon v-if="component == 'mapCon'" @closeComp="closeComp"></app-mapCon>
            
            <button @click="mouseClick" id="machineCon" class="compButton absolute" style="top: 23%; left: 85.5%;"></button>
            <app-machineCon v-if="component == 'machineCon'" @closeComp="closeComp"></app-machineCon>
            
            <button @click="mouseClick" id="piggybankCon" class="compButton absolute" style="top: 57%; left: 79%;"></button>
            <app-piggybankCon v-if="component == 'piggybankCon'" @closeComp="closeComp"></app-piggybankCon>
            
            <button @click="mouseClick" id="faqCon" class="compButton absolute" style="top: 52%; left: 90%;"></button>
            <app-faqCon v-if="component == 'faqCon'" @closeComp="closeComp"></app-faqCon>
            
            <button @click="mouseClick" id="wheelCon" class="compButton absolute" style="top: 70%; left: 81.5%;"></button>
            <app-wheelCon v-if="component == 'wheelCon'" @closeComp="closeComp"></app-wheelCon>
            
            <button @click="mouseClick" id="chestCon" class="compButton absolute" style="top: 75%; left: 90.5%;"></button>
            <app-chestCon v-if="component == 'chestCon'" @closeComp="closeComp"></app-chestCon>

            <app-footer @openComp="openComp"></app-footer>
        </main>
        <audio ref="audio" src="Resources/sounds/mixkit-positive-interface-click-1112.wav"></audio>
    </section>
    `,
    data() {
        return {
            overlay: this.$refs.overlay,
            comp: ""
        }
    },
    computed: {
        component: {
            get: function() {
                return this.comp;
            },
            set: function(x) {
                this.comp = x;
            }
        }
    },
    methods: {
        showMenu() {
            overlay.classList.add("opacity-50")
        },
        closeMenu() {
            overlay.classList.remove("opacity-50")
        },
        mouseClick(e) {
            // Popup!
            this.play();
            targetId = e.currentTarget.id;
            this.component = targetId;
            console.log(this.component)
        },
        closeComp() {
            this.component = "";
        },
        openComp(comp) {
            this.component = comp;
        },
        play() {
            this.$refs.audio.play();
        }
    },
    mounted() {
        this.$refs.audio.volume = 0.2;
    }
})
