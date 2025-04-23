import styled from 'styled-components'
import { FinancialProduct } from '@/types/product'
import Link from 'next/link'
import Image from 'next/image'
import { theme } from '@/styles/theme'

const RiskLevel = styled.div<{ $level: string }>`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  background-color: ${props => {
    switch (props.$level?.toLowerCase()) {
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
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`

const Card = styled.div`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.lg};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }

  &:hover ${RiskLevel} {
    opacity: 1;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${theme.spacing.md};
  background: ${theme.colors.surface};
`

const StyledImage = styled(Image)`
  object-fit: contain;
`

const Title = styled.h3`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`

const Type = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.sm};
  display: block;
`

const Description = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.md};
  flex-grow: 1;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`

const InterestRate = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
`

const CTAButton = styled(Link)`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: ${theme.typography.fontWeight.medium};
  text-align: center;
  transition: background-color 0.2s ease-in-out;
  margin-top: auto;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`

interface ProductCardProps {
  product: FinancialProduct
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <ImageContainer>
        <StyledImage
          src={product.imageUrl || '/placeholder-image.png'}
          alt={product.name || 'Producto Financiero'}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority={false}
          quality={85}
          style={{ objectPosition: 'center' }}
        />
        {product.riskLevel && (
          <RiskLevel $level={product.riskLevel}>
            Riesgo {product.riskLevel}
          </RiskLevel>
        )}
      </ImageContainer>
      <Title>{product.name}</Title>
      <Type>{product.type}</Type>
      <Description>{product.description}</Description>
      <Details>
        {product.interestRate && (
          <InterestRate>{product.interestRate}% TEA</InterestRate>
        )}
      </Details>
      <CTAButton href={`/product/${product.id}`}>
        Ver detalles
      </CTAButton>
    </Card>
  )
}