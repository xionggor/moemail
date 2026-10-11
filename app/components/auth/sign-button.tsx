"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SignButtonProps {
  size?: "default" | "lg"
}

export function SignButton({ size = "default" }: SignButtonProps) {
  const router = useRouter()
  const locale = useLocale()
  const { data: session, status } = useSession()
  const t = useTranslations("auth.signButton")
  const loading = status === "loading"

  if (loading) {
    return <div className="h-9" />
  }

  if (!session?.user) {
    return (
      <Button 
        onClick={() => router.push(`/${locale}/login`)} 
        className={cn(
          "gap-2 bg-white hover:bg-white/90 text-black",
          size === "lg" ? "px-12 h-12 text-sm tracking-widest uppercase" : ""
        )} 
        size={size}
      >
        {t("login")}
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-y-4 gap-x-3 sm:gap-x-4">
      <Link 
        href={`/${locale}/profile`}
        className="flex items-center gap-2 hover:opacity-70 transition-opacity"
      >
        {session.user.image && (
          <Image
            src={session.user.image}
            alt={session.user.name || t("userAvatar")}
            width={24}
            height={24}
            className="rounded-full"
          />
        )}
        <span className="hidden sm:inline-block text-sm">{session.user.name}</span>
      </Link>
      <Button 
        onClick={() => signOut({ callbackUrl: `/${locale}` })} 
        variant="outline" 
        className={cn("flex-shrink-0 border-white/20 hover:bg-white/10", size === "lg" ? "px-8" : "")} 
        size={size}
      >
        {t("logout")}
      </Button>
    </div>
  )
}