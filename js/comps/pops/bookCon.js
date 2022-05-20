Vue.component('app-bookCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="portraitCon">
        <div class="rounded-lg bg-custom_lbrown h-full w-full overflow-y-scroll" @click.prevent.stop>
            <header class="rounded-t-lg h-8 w-full bg-custom_brown"></header>
            <div class="py-20">

                <!-- Page 1 -->
                <div class="flex flex-col justify-center text-center p-20">
                    <h3 class="text-4xl font-extrabold">Welcome to the Lore and Story of</h3>
                    <div>
                        <img class="object-contain w-3/4 mx-auto" src="./Resources/The Meeples Coloured Logotype.png" alt="The Meeples">
                    </div>
                </div>
    
                <!-- Page 2 -->
                <header class="h-8 w-full bg-custom_brown"></header>
                <div class="p-20">
                    <p class="text-3xl font-extrabold">ORIGINS</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The meeples used to live on planet Mars,  going about their normal lives just like us…</p>
                    <p class="pt-4 font-bold text-lg leading-snug">Surprisingly, NFTs were thriving on Mars too — but disliked by the general population. When the masses discovered that there was a group of NFT loving meeples amongst them, they despised them. The group of meeples were outcasted and ridiculed for “wasting” money on digital art.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">Tired of being treated poorly, a group of 15 meeples, known as the Master Meeples, led a revolution with 5,540 other NFT-loving meeples.All 5,555 of them left their planet in capsules, in search for a better life for themselves, and for future NFT-loving meeples to come.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">After a long journey, they landed on the ethereum blockchain and that is the story behind <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span> and Meeple’s Metro!</p>
                    <p class="pt-4 font-bold text-lg leading-snug">What happened to the rest of the meeples on mars? Well, when they lost 5,555 of their brightest tech savvy meeples, the planet fell apart. </p>
                    <p class="pt-4 font-bold text-lg leading-snug">Anyways, each meeple belong to one of five nations and live harmoniously at Meeple’s Metro!</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The nations are the Flower, Aqua, Mist, Stone and Fire nations. Each nation has their own unique look and personality. Before we start, lets learn more about the Master Meeples who’ve brought these Meeples onto the ethereum blockchain.</p>
                </div>

                <!-- Page 3 -->
                <header class="h-8 w-full bg-custom_gold flex items-center justify-center overflow-visible">
                    <img class="h-20 object-contain" src="./Resources/icons/page3.png" alt="Page1">
                </header>
                <div class="p-20">
                    <p class="text-3xl font-extrabold">MASTER MEEPLES</p>
                    <p class="pt-4 font-bold text-lg leading-snug">Master Meeples are our  1/1 meeples, each nation has 3 Master Meeples which gives us a total of 15 Master Meeples living in Meeple’s Metro. Master Meeples cannot be obtained through mint and can only be found by playing our  minigame “Wheel of Goodies”.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">Master Meeples are the wisest and most powerful of the bunch, each are leaders in their own way. They hold high positions and are revered in Meeple’s Metro. They hold more power when voting for future plans in Meeple’s Metro, as well as earn more $MOONIES when staked! 
                    </p>
                </div>

                <!-- Page 4 -->
                <header class="h-8 w-full bg-primary flex items-center justify-center overflow-visible">
                    <img class="h-20 object-contain" src="./Resources/icons/page4.png" alt="Page2">
                </header>
                <div class="p-20">
                    <p class="text-3xl font-extrabold text-primary">FLOWER NATION</p>
                    <p class="font-bold text-lg text-primary">outgoing, enthusiastic, optimistic, manipulative</p>
                    <p class="pt-4 font-bold text-lg leading-snug">Flower meeples are a happy-go-lucky bunch, full of optimism and enthusiasm. They love coming up with new ideas, stories, and always find the most creative and wildest solutions to everything. Well, now it must be no shocker that a flower meeple was one of the first 3 master meeples who led the meeple revolution.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The meeples love them at parties; they are positive and cheerful, always spreading joy and warmth to the people around them. But try mentioning anything work related near a flower meeple…</p>
                </div>

                <!-- Page 5 -->
                <header class="h-8 w-full bg-quarternary flex items-center justify-center overflow-visible">
                    <img class="h-20 object-contain" src="./Resources/icons/page5.png" alt="Page3">
                </header>
                <div class="p-20">
                    <p class="text-3xl font-extrabold text-quarternary">AQUA NATION</p>
                    <p class="font-bold text-lg text-quarternary">serious, persistent, thoughtful, narrow-minded</p>
                    <p class="pt-4 font-bold text-lg leading-snug">Aqua meeples are often seen as introverts because of their quiet nature, but do not be fooled. Under the surface, the cogs in their brains are constantly whirling as they analyze every single action and word spoken by you. Watch out! They scrutinize and pick on details about you and their surroundings that no one else would have ever noticed… Till now that is…</p>
                    <p class="pt-4 font-bold text-lg leading-snug">One can often hear other nations gossiping and whispering to each other that the aqua nation operates like a military base; everything in order with not a single meeple out of line.</p>
                </div>

                <!-- Page 6 -->
                <header class="h-8 w-full bg-secondary flex items-center justify-center overflow-visible">
                    <img class="h-20 object-contain" src="./Resources/icons/page6.png" alt="Page4">
                </header>
                <div class="p-20">
                    <p class="text-3xl font-extrabold text-secondary">MIST NATION</p>
                    <p class="font-bold text-lg text-secondary">easygoing, carefree, “lost souls”</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The mist meeples are friends with every nation and are said to be the most adaptive of the bunch — changing their demeanor and personality based on whichever nation they are hanging out with. However, spending too much time with other nations has caused their nation to drift, unraveling the once closely knitted bonds of their nation. You win some and you lose some I guess.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">Although the mist meeples may seem submissive and weak, try picking a fight with them and the next thing you know you will be facing the whole meeple population - a position you definitely don’t want to be in.</p>
                </div>

                <!-- Page 7 -->
                <header class="h-8 w-full bg-tertiary flex items-center justify-center overflow-visible">
                    <img class="h-20 object-contain" src="./Resources/icons/page7.png" alt="Page5">
                </header>
                <div class="p-20">
                    <p class="text-3xl font-extrabold text-tertiary">STONE NATION</p>
                    <p class="font-bold text-lg text-tertiary">supportive, reliable, stubborn, awkward</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The most protected and exclusive nation living in Meeple’ Metro. Stone Meeples are good workers who worked for the collective good of everyone back in mars.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The stone nation exudes stability and security. They are constantly creating long-lasting things, building for the future. Once they have decided to complete a task, consider it done.</p>
                </div>

                <!-- Page 8 -->
                <header class="h-8 w-full bg-quinary flex items-center justify-center overflow-visible">
                    <img class="h-20 object-contain" src="./Resources/icons/page8.png" alt="Page6">
                </header>
                <div class="p-20">
                    <p class="text-3xl font-extrabold text-quinary">FIRE NATION</p>
                    <p class="font-bold text-lg text-quinary">strong-willed, determined, pushy, dominant</p>
                    <p class="pt-4 font-bold text-lg leading-snug">“Only dead fish go with the flow”. Turns out 2 of the first 3 master meeples who led the meeple revolution were fire meeples. They were the ones that pushed to leave Mars in search for a better world, unafraid to make bold decisions. While everyone else hesitates *ahem stone and aqua*, fire meeples take the potentially controversial but often necessary first step to get things done.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">A fire meeple’s determination is unyielding. Once their mind is set on something, there is no stopping them.</p>
                </div>

                <!-- Page 9 -->
                <header class="h-8 w-full bg-custom_brown flex items-center justify-center overflow-visible">
                    <img class="h-20 object-contain" src="./Resources/icons/page2.png" alt="Page7">
                </header>
                <div class="p-20">
                    <p class="text-3xl font-extrabold text-black">Meeple's Metro</p>
                    <p class="font-bold text-lg text-black leading-snug">The state of Meeple’s Metro today and what it is meant to be</p>
                    <p class="pt-4 font-bold text-lg leading-snug">Meeple’s Metro is a utopia and each Master Meeple grabbed a part of the blueprint when they left Mars. The Meeple’s Metro will be the first thing they work on when they arrive on the Ethereum blockchain.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The goal  for the Meeple’s Metro is to be a social clubhouse where meeples can gather to chill, play games, and mingle with one another. A safe space for every meeple to call home and seek solace in.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The Meeple’s Metro will also be a place for all of the meeples to reach their fullest potential as an NFT-collector; giving away NFTs, WL spots and quality alpha. The Master Meeple’s will equip Meeple’s Metro with all the tools needed for our meeple fam to thrive in the NFT space.</p>
                </div>

                <!-- Page 10 -->
                <div class="px-20">
                    <p class="text-3xl font-extrabold text-black">Minting</p>
                    <p class="font-extrabold text-lg text-black leading-snug">breaking the meeple capsules free and the use of the Magic Meeple Machine</p>
                    <p class="pt-4 font-bold text-lg leading-snug">If you’re still reading this, the 15 Master Meeples and 5540 meeples are in dire need of your help.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">When the capsules landed, it wasn't a smooth landing. 5,555 capsules have been scattered and lost in the ethereum block chain.</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The meeples need your help finding their capsules and rescuing them by putting their capsules into the Magic Meeple Machine!</p>
                    <p class="pt-4 font-bold text-lg leading-snug">The future of the meeples and Meeple’s Metro lies in your hands, see you soon!</p>
                </div>

                <!-- Page 11 -->
                <div class="px-20 pt-20 text-center">
                    <h3 class="text-4xl font-extraboldtext-black" style="text-shadow: 0 2px 4px rgba(0,0,0,0.32)">The End</h3>
                    <h3 class="text-4xl font-extraboldtext-black" style="text-shadow: 0 2px 4px rgba(0,0,0,0.32)">Happy Minting</h3>
                    <div class="pt-10">
                        <img class="object-contain w-3/4 mx-auto" src="./Resources/book_end.png" alt="End">
                    </div>
                </div>

            </div>
        </article>
    </section>
    `,
    data() {
        return {
            currentPage: 999,
            maxPage: 10
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
            console.log(this.currentPage)
            this.currentPage+2 <= this.maxPage ? this.currentPage+=2 : this.currentPage = 10;
            console.log(this.currentPage + "\n")
        },
        backPage() {
            console.log(this.currentPage)
            this.currentPage-2 >= 1 ? this.currentPage-=2 : this.currentPage = 0;
            console.log(this.currentPage + "\n")

        },
        closeComp() {
            this.$emit('closeComp');
        }
    }
})
