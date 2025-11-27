import React from 'react'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
}

export default function Button({ children, href, onClick, variant = 'primary' }: Props) {
  const cls = variant === 'primary' ? 'btn btn-primary' : 'btn btn-ghost'
  return href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <button className={cls} onClick={onClick}>{children}</button>
  )
}
