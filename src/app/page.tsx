'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { CategoryFilter } from '@/components/CategoryFilter'
import { ProductCategory } from '@/types/product'
import { theme } from '@/styles/theme'

const PageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
`

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`

const Logo = styled.h1`
  font-family: ${theme.typography.fontFamily.secondary};
  font-size: ${theme.typography.fontSize.xxxl};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
`

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`

export default function Home () {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null)

  const categories = Array.from(new Set(products.map(product => product.category)))

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products

  return (
    <PageContainer>
      <Header>
        <Logo>Impulsa</Logo>
        <Subtitle>
          Tu aliado financiero para alcanzar tus metas. Descubre nuestros productos
          diseñados para impulsar tu crecimiento económico.
        </Subtitle>
      </Header>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </PageContainer>
  )
}
