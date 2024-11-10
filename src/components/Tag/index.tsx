import { TagCategoria } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagCategoria>{children}</TagCategoria>

export default Tag
