import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type IconName = keyof typeof LucideIcons

export const getIcon = (name: IconName, props?: any): JSX.Element => {
  const Icon = LucideIcons[name] as LucideIcon
  return <Icon {...props} />
}

