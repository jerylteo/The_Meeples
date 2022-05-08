Vue.component('app-portraitCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="portraitCon">
        <div @click.prevent.stop class="rounded-lg bg-white h-full w-full overflow-y-scroll">
            <header class="rounded-t-lg h-10 w-full bg-quinary" id="teamHeader"></header>
            <article class="p-8 w-full">
                <h2 class="text-6xl font-extrabold text-center">Team + Vision for <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span> and Meeple's Metro</h2>
                <div class="py-12 px-40 3xl:px-80">
                    <p class="text-4xl font-bold leading-snug">The team aims to make Meeple’s Metro (MM) a chill and fun social hub for NFT lovers. The goal is for holders to resonate with their meeple and live an exciting dream in MM. Meeples will enjoy fun P2E games/minigames, receive quality alpha, mingle with others and participate in social activities/giveaways. </p>
                    <p class="pt-10 text-4xl font-bold leading-snug">The Magic Meeple Machine (MMM) and the wheel of goodies (which are already available) is just the beginning, we will do our best to achieve all stated goals and reach the fullest potential of MM. </p>
                    <p class="pt-10 text-4xl font-bold leading-snug">Meet the wonderful team behind this project:</p>
                </div>
                <div class="py-12 px-40 grid grid-cols-2 xl:grid-cols-3 gap-12">
                    <div v-for="member in members" class="w-full bg-text rounded-lg">
                        <div>
                            <div class="w-full h-96 rounded-lg">
                                <img :src="member.img" class="w-full h-96 object-cover rounded-lg">
                            </div>
                            <div class="p-4">
                                <p class="text-white text-2xl font-bold">{{member.name}}</p>
                                <p class="text-white text-lg font-bold pt-1">{{member.role}}</p>
                                <p class="text-white text-lg font-bold pt-6">{{member.description}}</p>
                                <div class="pt-6" v-if='member.social'>
                                    <p class="text-white text-lg font-bold">Join me at:</p>
                                    <a :href="member.social" target="_blank" class="block text-white text-lg font-bold">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
    `,
    data() {
        return {
            members: [
                {
                    name: 'Darren',
                    role: 'CEO',
                    img: './Resources/members/darren.jpeg',
                    description: "hi friends!! My name is darren (tyche) and I live in one of the smallest countries in the world, Singapore! I’m a big fan of bouldering, journaling and of course, NFTs :)) I would love to get to know every single one of my meeple fam as we collectively strive in the NFT space. Cheers! ❤️"
                },
                {
                    name: 'Jeryl',
                    role: 'Web Developer',
                    img: './Resources/members/jeryl.jpeg',
                    description: "Hey! I love cats.",
                    social: "https://www.instagram.com/jerylteo.si/"
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png',
                    description: ""
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png',
                    description: ""
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png',
                    description: ""
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png',
                    description: ""
                },
            ]
        }
    },
    methods: {
        closeComp() {
            this.$emit('closeComp');
        }
    }
})
