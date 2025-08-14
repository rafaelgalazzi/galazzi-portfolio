export default function GridLayout({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">{children}</div>;
}
