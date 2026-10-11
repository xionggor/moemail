import { SignButton } from "@/components/auth/sign-button"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { Logo } from "@/components/ui/logo"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto h-full px-4">
        <div className="h-full flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-y-4 gap-x-3 sm:gap-x-4">
            <LanguageSwitcher />
            <SignButton />
          </div>
        </div>
      </div>
    </header>
  )
}