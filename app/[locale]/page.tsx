import { Header } from "@/components/layout/header"
import { auth } from "@/lib/auth"
import { ActionButton } from "@/components/home/action-button"
import { FeatureCard } from "@/components/home/feature-card"

export const runtime = "edge"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params
  const session = await auth()

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
        <Header />
        <main className="pt-16">
          <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-2 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-grid-primary" />

            <div className="w-full max-w-3xl mx-auto space-y-12 py-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                  CHEAPER<br/>BROTHERS
                </h1>
                <p className="text-base sm:text-lg text-white/60 tracking-widest uppercase">
                  临时邮箱服务
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
                <FeatureCard
                  title="隐私保护"
                  description="保护您的真实邮箱"
                />
                <FeatureCard
                  title="即时收件"
                  description="实时接收邮件"
                />
                <FeatureCard
                  title="自动过期"
                  description="到期自动失效"
                />
                <FeatureCard
                  title="开放API"
                  description="支持API调用"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <ActionButton isLoggedIn={!!session} />
              </div>
            </div>

            <footer className="absolute bottom-8 text-white/40 text-sm tracking-wider">
              Cheaper Brothers Co.
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}