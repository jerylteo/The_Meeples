Vue.component('app-main', {
    template:
    `
    <section>
        <app-header></app-header>
        <main class="absolute top-0 left-0">
            <button id="boardCon" class="absolute left-18 top-40">
                <!-- <img src="/Resources/9board.png" alt="board"> -->
                <div id="boardContent" class="p-16 pt-20">
                    <p class="text-lg leading-6 font-extrabold"><span class="text-primary">Th</span><span class="text-secondary">e M</span><span class="text-tertiary">ee</span><span class="text-quarternary">pl</span><span class="text-quinary">es</span>                        is a GENESIS collection of 5,555 fully customizable NFTs that grants you exclusive access to Meeple’s Metro and much more!
                        <br><br>psst, click on some of the items to learn more about the project!</p>
                </div>
            </button>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="whitepaperCon" class="absolute top-48" style="left: 497px"></button>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="portraitCon" class="absolute" style="left: 509px; top: 660px"></button>
            <div @mouseclick="mouseClick" @mouseover="mouseOver" id="computerCon" class="absolute" style="left: 833px; top: 524px">
                <div class="relative">
                    <div class="absolute w-64 flex flex-col items-center" style="left: 128px; top: 125px">
                        <h2 class="text-custom_green text-2xl font-extrabold mb-2">.../5,555 minted</h2>
                        <button class="bg-custom_green text-2xl font-extrabold text-black rounded-3xl w-full py-1">CONNECT</button>
                    </div>
                </div>
            </div>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="bookCon" class="absolute" style="left: 960px; top: 767px"></button>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="mapCon" class="absolute" style="left: 1151px; top: 786px"></button>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="machineCon" class="absolute" style="left: 1549px; top: 280px"></button>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="piggybankCon" class="absolute" style="left: 1478px; top: 645px"></button>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="faqCon" class="absolute" style="left: 1617px; top: 594px"></button>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="wheelCon" class="absolute" style="left: 1538px; top: 790px"></button>
            <button @mouseclick="mouseClick" @mouseover="mouseOver" id="chestCon" class="absolute" style="left: 1693px; top: 852px"></button>
        </main>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        showMenu() {
            console.log("showMenu")
            let navMenu = this.$refs.navMenu;
            navMenu.classList.remove("hidden");
            navMenu.classList.add("showMenu");
        },
        closeMenu() {
            console.log("closeMenu")
        },
        mouseOver(e) {
            // This will be the shadow! - Awaiting element pictures
            // e.target.style.boxShadow = "4px 8px rgba(0,0,0,0.2)"
        },
        mouseClick(e) {
            // Popup!
            console.log(e)
        }
    }
})
