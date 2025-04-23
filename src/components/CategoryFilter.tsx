import styled from 'styled-components'
import { ProductCategory } from '@/types/product'
import { theme } from '@/styles/theme'

const FilterContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xl};
  overflow-x: auto;
  padding-bottom: ${theme.spacing.sm};
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${props => props.$active ? theme.colors.primary : theme.colors.text.light};
  background-color: ${props => props.$active ? theme.colors.primary : 'transparent'};
  color: ${props => props.$active ? 'white' : theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${props => props.$active ? 'white' : theme.colors.primary};
  }
`

interface CategoryFilterProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory | null;
  onSelectCategory: (category: ProductCategory | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <FilterContainer>
      <FilterButton
        $active={selectedCategory === null}
        onClick={() => onSelectCategory(null)}
      >
        Todos
      </FilterButton>
      {categories.map((category) => (
        <FilterButton
          key={category}
          $active={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </FilterButton>
      ))}
    </FilterContainer>
  )
}