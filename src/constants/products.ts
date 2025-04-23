import { ProductCategory, RiskLevel } from '@/types/product'

export const PRODUCT_CATEGORIES = [
  {
    id: ProductCategory.INVESTMENTS,
    label: 'Inversiones',
    description: 'Productos de inversión para hacer crecer tu dinero'
  },
  {
    id: ProductCategory.CREDITS,
    label: 'Créditos',
    description: 'Préstamos y líneas de crédito'
  },
  {
    id: ProductCategory.SAVINGS,
    label: 'Ahorros',
    description: 'Cuentas y productos de ahorro'
  },
  {
    id: ProductCategory.INSURANCE,
    label: 'Seguros',
    description: 'Protección para ti y tus seres queridos'
  }
]

export const RISK_LEVELS = [
  {
    id: RiskLevel.LOW,
    label: 'Bajo',
    color: 'success'
  },
  {
    id: RiskLevel.MEDIUM,
    label: 'Medio',
    color: 'warning'
  },
  {
    id: RiskLevel.HIGH,
    label: 'Alto',
    color: 'error'
  }
]

export const DEFAULT_CURRENCY = 'PEN'
export const MIN_INTEREST_RATE = 0
export const MAX_INTEREST_RATE = 100