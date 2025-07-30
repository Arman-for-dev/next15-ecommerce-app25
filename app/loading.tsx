import React from 'react'
import ProductSkeleton from './ProductSkeleton'

export default function loading() {
  return (
    <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Home</h1>
          <p>Showing 3 Product</p>
          <ProductSkeleton />
        </main>
  )
}
