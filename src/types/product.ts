export enum ProductCategory {
  INVESTMENTS = 'inversiones',
  CREDITS = 'creditos',
  SAVINGS = 'ahorros',
  INSURANCE = 'seguros'
}

export enum RiskLevel {
  LOW = 'bajo',
  MEDIUM = 'medio',
  HIGH = 'alto'
}

export type Currency = 'USD' | 'EUR' | 'PEN'

export interface MonetaryAmount {
  amount: number
  currency: Currency
}

export interface FinancialProduct {
  id: string
  name: string
  type: string
  interestRate?: number
  category: ProductCategory
  riskLevel?: RiskLevel
  description: string
  minAmount?: MonetaryAmount
  maxAmount?: MonetaryAmount
  term?: string
  features: string[]
  imageUrl: string
  createdAt: Date
  updatedAt: Date
}