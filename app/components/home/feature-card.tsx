interface FeatureCardProps { 
  title: string
  description: string 
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-black hover:bg-white/5 transition-colors">
      <h3 className="text-sm font-bold tracking-widest uppercase mb-2">{title}</h3>
      <p className="text-sm text-white/50">{description}</p>
    </div>
  )
}