
import { Product } from "@/app/generated/prisma";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";


export function ProductCard({product}:{product: Product}){
    return(
        <Card className="pt-0 overflow-hidden">
            <div className="border border-gray-200 rounded-lg p-4">
                <div className="relative aspect-video">
                    <Image src={product.image} alt={product.name}
                        className="object-cover"
                        fill
                        styles="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <p>{formatPrice(product.price)}</p>
                </CardFooter>
        </Card>
    )
}