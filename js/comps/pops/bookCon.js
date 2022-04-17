Vue.component('app-bookCon', {
    template:
    `
    <section class="absolute top-0 left-0 px-112 pt-44 pb-60 w-full h-full bg-black/30 z-50" id="pageCon" @click.prevent="closeComp">
        <article class="w-full h-full" @click.prevent.stop>
            <div class="grid grid-cols-2 gap-20 w-full h-full">
                <div class="flex flex-col justify-center text-center">
                    <div>
                        <img src="Resources/The Meeples Coloured Logotype.png" alt="The Meeples">
                    </div>
                    <h3 class="text-4xl font-extrabold">Lore and Story</h3>
                </div>
                <div class="px-4 py-12">
                    <div class="px-8">
                        <p class="text-3xl font-extrabold">ORIGINS</p>
                        <p class="pt-4 font-bold text-lg leading-snug">The meeples used to live on planet Mars. They would go about their normal lives, just like us…</p>
                        <p class="pt-4 font-bold text-lg leading-snug">Surprisingly, NFTs were thriving on Mars too — but disliked by the general population. When the masses discovered that there was a group of NFT loving meeples amongst them, they despised them. The group of meeples were outcasted and ridiculed for “wasting” money on digital art.</p>
                        <p class="pt-4 font-bold text-lg leading-snug">Tired of being treated poorly, a group of 15 meeples, known as the Master Meeples, led a revolution with 5,540 other NFT-loving meeples. All 5,555 of them left their planet in capsules, in search for a better life for themselves, and for future NFT-loving meeples to come.</p>
                        <div class="flex items-center justify-center pt-4">
                            <img src="/Resources/icons/page1.png" alt="Page1">
                        </div>
                        <p class="pt-2 font-bold text-md text-center">1/10</p>
                    </div>
                    <div class="flex justify-end">
                        <button @click="nextPage" class="font-extrabold text-xl">next page ></button>
                    </div>
                </div>
            </div>
        </article>
    </section>
    `,
    data() {
        return {
            currentPage: 0,
            pages: [
                {
                    "content": `
                    <div class="flex flex-col justify-center text-center">
                        <div>
                            <img src="Resources/The Meeples Coloured Logotype.png" alt="The Meeples">
                        </div>
                        <h3 class="text-4xl font-extrabold">Lore and Story</h3>
                    </div>
                    <div class="px-4 py-12">
                        <div class="px-8">
                            <p class="text-3xl font-extrabold">ORIGINS</p>
                            <p class="pt-4 font-bold text-lg leading-snug">The meeples used to live on planet Mars. They would go about their normal lives, just like us…</p>
                            <p class="pt-4 font-bold text-lg leading-snug">Surprisingly, NFTs were thriving on Mars too — but disliked by the general population. When the masses discovered that there was a group of NFT loving meeples amongst them, they despised them. The group of meeples were outcasted and ridiculed for “wasting” money on digital art.</p>
                            <p class="pt-4 font-bold text-lg leading-snug">Tired of being treated poorly, a group of 15 meeples, known as the Master Meeples, led a revolution with 5,540 other NFT-loving meeples. All 5,555 of them left their planet in capsules, in search for a better life for themselves, and for future NFT-loving meeples to come.</p>
                            <div class="flex items-center justify-center pt-4">
                                <img src="/Resources/icons/page1.png" alt="Page1">
                            </div>
                            <p class="pt-2 font-bold text-md text-center">1/10</p>
                        </div>
                        <div class="flex justify-end">
                            <button @click="nextPage" class="font-extrabold text-xl">next page ></button>
                        </div>
                    </div>
                    `
                },
                {
                    "content": `
                    lol
                    `
                }
            ]
        }
    },
    computed: {
        page: {
            get: function() {
                return this.currentPage;
            },
            set: function(x) {
                this.currentPage = x
            }
        }
    },
    methods: {
        nextPage() {
            this.page += 1;
            console.log(this.page)
        },
        closeComp() {
            this.$emit('closeComp');
        }
    }
})
