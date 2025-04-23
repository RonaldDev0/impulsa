'use client'

import { useParams } from 'next/navigation'
import styled from 'styled-components'
import Image from 'next/image'
import { products } from '@/data/products'
import { theme } from '@/styles/theme'
import Link from 'next/link'

const PageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.text.secondary};
  text-decoration: none;
  margin-bottom: ${theme.spacing.lg};
  font-weight: ${theme.typography.fontWeight.medium};

  &:hover {
    color: ${theme.colors.primary};
  }
`

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  background: ${theme.colors.surface};
`

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: ${theme.borderRadius.md};
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.secondary};
  font-size: ${theme.typography.fontSize.xxl};
  color: ${theme.colors.text.primary};
`

const Type = styled.span`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
`

const Description = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
`

const DetailItem = styled.div`
  padding: ${theme.spacing.md};
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.md};
  position: relative;
`

const DetailLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xs};
`

const DetailValue = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.spacing.md} 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};

  &:before {
    content: '✓';
    color: ${theme.colors.success};
  }
`

const RiskLevel = styled.div<{ $level: string }>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  background-color: ${props => {
    switch (props.$level) {
    case 'bajo':
      return theme.colors.success
    case 'medio':
      return theme.colors.warning
    case 'alto':
      return theme.colors.error
    default:
      return theme.colors.text.light
    }
  }};
  color: white;
`

export default function ProductPage () {
  const params = useParams()
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return (
      <PageContainer>
        <p>Producto no encontrado</p>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <BackButton href='/'>
        ← Volver a productos
      </BackButton>

      <ProductContainer>
        <ImageContainer>
          <StyledImage
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />
        </ImageContainer>

        <ProductInfo>
          <Title>{product.name}</Title>
          <Type>{product.type}</Type>
          <Description>{product.description}</Description>

          <DetailsGrid>
            {product.interestRate && (
              <DetailItem>
                <DetailLabel>Tasa de interés</DetailLabel>
                <DetailValue>{product.interestRate}% TEA</DetailValue>
              </DetailItem>
            )}
            {product.riskLevel && (
              <DetailItem>
                <DetailLabel>Nivel de riesgo</DetailLabel>
                <RiskLevel $level={product.riskLevel}>
                  {product.riskLevel.charAt(0).toUpperCase() + product.riskLevel.slice(1)}
                </RiskLevel>
              </DetailItem>
            )}
            {product.minAmount && (
              <DetailItem>
                <DetailLabel>Monto mínimo</DetailLabel>
                <DetailValue>{product.minAmount.toLocaleString()}</DetailValue>
              </DetailItem>
            )}
            {product.maxAmount && (
              <DetailItem>
                <DetailLabel>Monto máximo</DetailLabel>
                <DetailValue>{product.maxAmount.toLocaleString()}</DetailValue>
              </DetailItem>
            )}
            {product.term && (
              <DetailItem>
                <DetailLabel>Plazo</DetailLabel>
                <DetailValue>{product.term}</DetailValue>
              </DetailItem>
            )}
          </DetailsGrid>

          <FeaturesList>
            {product.features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeaturesList>
        </ProductInfo>
      </ProductContainer>
    </PageContainer>
  )
}

