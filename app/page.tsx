import { ProductCard } from "@/components/productCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import ProductSkeleton from "./ProductSkeleton";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined}>
const pageSize = 2;

async function Products({page}:{page:number}) {
  const skip = (page - 1 ) * pageSize;

  const products= await prisma.product.findMany({
      take: pageSize,
      skip:skip
    });

   await new Promise((resolve)=> setTimeout(resolve, 3000));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map((product)=>(
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

export default async function Home( props: {searchParams: SearchParams}) {
  const searchParams = await props.searchParams;
  
  const page = Number(searchParams.page) || 1;

  const total = await prisma.product.count();
  const totalPages = Math.ceil(total / pageSize);


  
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      
      <Suspense key={page} fallback={<ProductSkeleton />}>
        <Products page={page} />
      </Suspense>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${page - 1}`} />
          </PaginationItem>

          {
            Array.from({length:totalPages}, (_, i) =>(
              <PaginationItem key={i}>
                <PaginationLink href={`?page=${i + 1}`}
                  className={page === i + 1 ? "active": ""}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))
          }

          
          <PaginationItem>
            <PaginationNext href={`?page=${page + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
