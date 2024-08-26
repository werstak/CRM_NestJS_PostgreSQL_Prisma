"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const post1 = await prisma.article.upsert({
        where: { title: 'The best Nestjs developer in the world,Asad' },
        update: {},
        create: {
            title: 'The best Nestjs developer in the world,Asad',
            body: 'Support by reading his articles and giving him feedbacks',
            description: "We are excited to share that today's he is going to realise his new article",
            published: false,
        },
    });
    const post2 = await prisma.article.upsert({
        where: { title: "What is Nestjs? (Q1/22)" },
        update: {},
        create: {
            title: "What is Nestjs? (Q1/22)",
            body: 'We are working hard to make the easiest framework more easy for u.',
            description: 'Learn step by step.',
            published: true,
        },
    });
    console.log({ post1, post2 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map