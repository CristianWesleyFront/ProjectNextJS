interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="flex flex-1 justify-center align-center">{children}</div>
}
