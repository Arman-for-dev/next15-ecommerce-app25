
import { PrismaClient, Product } from "../app/generated/prisma";



const prisma = new PrismaClient();

async function main() {
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const electornics = await prisma.category.create({
        data:{
            name:  "Electronics",
            slug:  "electronics"
        }
    });

    const clothing = await prisma.category.create({
        data:{
            name:  "Clothing",
            slug:  "Clothing"
        }
    });

    const home = await prisma.category.create({
        data:{
            name:  "Home",
            slug:  "home"
        }
    });

    const products: Product[] = [
            {
                id: "1",
                name: "Wireless Headphones",
                slug: "wireless-headphone",
                description:"Primium noise-cancelling wireless",
                price: 199.99,
                image: "http://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                categoryId: electornics.id
            },
            {
                id: "2",
                name: "Smart watch",
                slug: "smart-watch",
                description:"Pro noise-cancelling wireless",
                price: 200,
                image: "http://images.unsplash.com/photo-1523275335684-37898b6baf30",
                categoryId: clothing.id
            },
            {
                id: "3",
                name: "Running Shoes",
                slug: "running-shoes",
                description:"Lightweight running shoes",
                price: 89.99,
                image: "http://images.unsplash.com/photo-1542291026-7eec264c27ff",
                categoryId: home.id
            },
            
            {
                id: "4",
                name: "Ceramic Mug",
                slug: "ceramic-mug",
                description:"Handcrafted ceramic mug with minimalist design",
                price: 50.50,
                image: "http://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
                categoryId: electornics.id
            }
    ];

    for (const product of products){
        await prisma.product.create({
            data: product
        });
    }
}

main().then(async ()=>{
    await prisma.$disconnect();
}).catch(async (e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})