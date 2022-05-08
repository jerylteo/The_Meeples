Vue.component('app-chestCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="chestCon">
        <div @click.prevent.stop class="rounded-lg bg-white h-full w-full overflow-y-scroll">
            <header class="rounded-t-lg h-10 w-full bg-tertiary" id="chestHeader"></header>
            <article class="p-8 w-full">
                <h2 class="text-6xl font-extrabold text-center text-tertiary">Why <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span>?</h2>
                <h5 class="text-4xl font-extrabold text-center p-4">Holders will have exclusive access to Meeple’s Metro, which have the following benefits!</h5>
                <div class="py-12 px-40 3xl:px-88 grid grid-cols-1 xl:grid-cols-3 gap-12">
                    <div>
                        <div class="w-full">
                            <img class="object-contain h-40 w-full" src="./Resources/chest1.png" alt="community">
                        </div>
                        <h3 class="text-tertiary text-5xl font-extrabold">community</h3>
                        <ul class="list-disc">
                            <li class="pt-4">Dedicated team of experienced NFT flippers and alpha pass holders will give <span class="text-custom_highlight">exclusive alpha</span> information to the meeple fam.</li>
                            <li class="pt-4">The meeple fam will be a <span class="text-custom_highlight">genuine</span> and <span class="text-custom_highlight">close knitted community</span> that looks out for one another in the NFT space!</li>
                            <li class="pt-4">Your GENESIS collection of the five base nations’ meeples will grant you the <span class="text-custom_highlight">ability to vote</span> and decide what we do in the future (minigames, merch, etc.)</li>
                        </ul>
                    </div>
                    <div>
                        <div class="w-full">
                            <img class="object-contain h-40 w-full" src="./Resources/chest2.png" alt="playtoearn">
                        </div>
                        <h3 class="text-tertiary text-5xl font-extrabold">playtoearn</h3>
                        <ul class="list-disc">
                            <li class="pt-4"><span class="text-custom_highlight">Dedicated</span> 45% of minting funds and 25% of royalties to <span class="text-custom_highlight"></span>give back</li> to the meeple fam.</li>
                            <li class="pt-4"><span class="text-custom_highlight">P2E</span> ecosystem will be built around our native utility token, $MOONIES.</li>
                            <li class="pt-4">Meeple Mania will be a competitive trading <span class="text-custom_highlight">card game</span> with huge <span class="text-custom_highlight">rewards</span> given to the top players each season! Players can also <span class="text-custom_highlight">trade and sell</span> their cards on the secondary market.</li>
                        </ul>
                    </div>
                    <div>
                        <div class="w-full">
                            <img class="object-contain h-40 w-full" src="./Resources/chest3.png" alt="minigames">
                        </div>
                        <h3 class="text-tertiary text-5xl font-extrabold">minigames</h3>
                        <ul class="list-disc">
                            <li class="pt-4">The first minigame will be the “wheel of goodies” which holders can spin <span class="text-custom_highlight">daily</span> to <span class="text-custom_highlight">win prizes</span> (NFTs, WL spots, etc.)</li>
                            <li class="pt-4">More minigames will be added in the future alongside our main project in order to keep holders engaged and <span class="text-custom_highlight">win prizes.</span></li>
                            <li class="pt-4"><span class="text-custom_highlight">NFT</span> giveaways will be done regularly on discord, meeples that know their meeple facts will stand a better chance of winning!</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        closeComp() {
            this.$emit('closeComp');
        }
    }
})
