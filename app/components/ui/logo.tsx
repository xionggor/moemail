"use client"

import Link from "next/link"
import { useLocale } from "next-intl"

export function Logo() {
  const locale = useLocale()
  return (
    <Link 
      href={`/${locale}`}
      className="hover:opacity-70 transition-opacity"
    >
      <span className="text-sm font-bold tracking-[0.2em] uppercase">
        Cheaper Brothers
      </span>
    </Link>
  )
}