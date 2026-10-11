"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { SignButton } from "../auth/sign-button"

interface ActionButtonProps {
  isLoggedIn?: boolean
}

export function ActionButton({ isLoggedIn }: ActionButtonProps) {
  const router = useRouter()
  const locale = useLocale()

  if (isLoggedIn) {
    return (
      <Button 
        size="lg" 
        onClick={() => router.push(`/${locale}/moe`)}
        className="gap-2 bg-white hover:bg-white/90 text-black px-12 h-12 text-sm tracking-widest uppercase"
      >
        进入邮箱
      </Button>
    )
  }

  return <SignButton size="lg" />
}