export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Landing-specific layout without sidebar/header */}
            {children}
        </div>
    )
}