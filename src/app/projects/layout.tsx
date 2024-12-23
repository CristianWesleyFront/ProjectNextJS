import HeaderLayout from "@/components/layout/header"

interface DashboardLayoutProps {
  children?: React.ReactNode
}
export default function Layout({
  children,
}: DashboardLayoutProps) {
  return (
    <>
      <HeaderLayout />
      {children}
    </>
  )
}
