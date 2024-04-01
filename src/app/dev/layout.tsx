export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-screen w-full overflow-auto">
      {children}
    </main>
  )
}