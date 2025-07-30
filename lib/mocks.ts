export type Product = {
    id: string,
    name: string,
    price: number,
    description: string,
    image: string,
    category: string
}

export const mokeProducts: Product[] = [
    {
        id: "1",
        name: "Wireless Headphones",
        description:"Primium noise-cancelling wireless",
        price: 199.99,
        image: "http://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        category: "Electronics"
    },
    {
        id: "2",
        name: "Smart watch",
        description:"Pro noise-cancelling wireless",
        price: 200.99,
        image: "http://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "Electronics2"
    },
    {
        id: "3",
        name: "Running Shoes",
        description:"Lightweight running shoes",
        price: 89.99,
        image: "http://images.unsplash.com/photo-1542291026-7eec264c27ff",
        category: "Electronics2"
    },
    
    {
        id: "4",
        name: "Ceramic Mug",
        description:"Handcrafted ceramic mug with minimalist design",
        price: 89.99,
        image: "http://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
        category: "Home"
    }
]