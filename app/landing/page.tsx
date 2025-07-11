'use client'; // Add this at the very top
import { ArrowRight, BarChart3, TrendingUp, BrainCircuit, Zap, Shield, Rocket, TrendingUpIcon, BadgeCheck, Globe, LayoutDashboard, Star, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
            {/* Floating Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-100 rounded-full filter blur-[100px] opacity-20 animate-float-slow"></div>
                <div className="absolute top-1/2 right-20 w-96 h-96 bg-purple-100 rounded-full filter blur-[120px] opacity-20 animate-float-medium"></div>
                <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-100 rounded-full filter blur-[80px] opacity-20 animate-float-fast"></div>
            </div>

            {/* Navigation */}
            <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-50">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 relative">
                        <Image
                            src="/images/applogo.png"
                            alt="Cubelytics Logo"
                            fill
                            className="object-contain scale-150"
                        />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Cubelytics
                    </span>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors hover:-translate-y-0.5">
                        Sign In
                    </Link>
                    <Link
                        href="/dashboard"
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                    >
                        <span className="group-hover:scale-105 transition-transform block">Get Instant Access</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-24 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 text-blue-700 font-medium mb-8 shadow-md hover:shadow-lg transition-shadow">
                        <Zap className="w-4 h-4 mr-2 animate-pulse" />
                        <span>Used by 12,387+ e-commerce businesses</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Stop Burning Cash on Products{" "}
                        </span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                            That Won't Sell
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Cubelytics analyzes your product potential <span className="font-semibold text-gray-800">before you launch</span>, saving you thousands in failed tests and wasted ad spend.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <Link
                            href="/dashboard"
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                <span>Analyze My Product Now</span>
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </Link>
                        <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-xl hover:bg-white transition-all duration-300 font-semibold border border-gray-200 hover:border-gray-300 shadow-lg flex items-center justify-center space-x-2">
                            <PlayCircle className="w-5 h-5 text-blue-600" />
                            <span>See How It Works</span>
                        </button>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { icon: <BadgeCheck className="w-5 h-5 text-green-600" />, text: "89% Accuracy" },
                                { icon: <Globe className="w-5 h-5 text-blue-600" />, text: "50+ Markets" },
                                { icon: <TrendingUpIcon className="w-5 h-5 text-purple-600" />, text: "3M+ Products Analyzed" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center px-4 py-2 bg-gray-50 rounded-lg">
                                    {item.icon}
                                    <span className="ml-2 font-medium text-gray-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="container mx-auto px-6 py-24 relative">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        The <span className="text-blue-600">Secret Weapon</span> of Successful E-commerce Brands
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        What if you could know exactly which products will sell before you even order inventory?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        {[
                            {
                                icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
                                title: "AI-Powered Product Validation",
                                description: "Our neural networks analyze thousands of data points to predict your product's success probability with 89% accuracy."
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
                                title: "Competitor Ad Intelligence",
                                description: "See exactly which ads your competitors are running and how much they're spending to dominate the market."
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-green-600" />,
                                title: "Risk-Free Launch Strategy",
                                description: "Get step-by-step guidance on pricing, targeting, and marketing to maximize your chances of success."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white hover:border-blue-100">
                                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/images/dashboard-preview.png"
                                alt="Cubelytics Dashboard Preview"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                    <Rocket className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">87% Success Rate</div>
                                    <div className="text-sm text-gray-500">For products we recommend</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            <span className="text-blue-600">3 Simple Steps</span> To Smarter Product Launches
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Stop wasting money on products that won't sell. Our AI does the heavy lifting.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {

                                title: "Enter Product Details",
                                description: "Tell us about your product, target market, and competitors",
                                icon: <BrainCircuit className="w-8 h-8 text-blue-600" />
                            },
                            {

                                title: "Get Instant Analysis",
                                description: "Our AI scans millions of data points in seconds",
                                icon: <Zap className="w-8 h-8 text-purple-600" />
                            },
                            {

                                title: "Launch With Confidence",
                                description: "Receive your customized go-to-market strategy",
                                icon: <Rocket className="w-8 h-8 text-indigo-600" />
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="flex items-start mb-6">

                                    <div className="p-3 bg-blue-50 rounded-full">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-6 py-24">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        From <span className="text-blue-600">$0 to $10k+</span> With One Product
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Don't take our word for it. Here's what our users say:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "Cubelytics identified a product that became my best seller. 300% ROI in the first month!",
                            name: "Sarah K.",
                            business: "Shopify Store Owner",
                            stats: "$12,345 in first month"
                        },
                        {
                            quote: "The competitor ad data saved me $5,000 in wasted ad spend. Worth every penny.",
                            name: "Michael T.",
                            business: "Amazon FBA Seller",
                            stats: "87% conversion increase"
                        },
                        {
                            quote: "I went from random guessing to data-driven decisions. My business transformed.",
                            name: "David L.",
                            business: "Dropshipping Entrepreneur",
                            stats: "4.7x more profitable"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.business}</div>
                                    <div className="text-sm font-medium text-blue-600 mt-1">{testimonial.stats}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Launch Your Next Winning Product?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Join thousands of e-commerce entrepreneurs making data-driven decisions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <Link
                            href="/dashboard"
                            className="group relative px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl overflow-hidden text-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <span>Start Free 14-Day Trial</span>
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="absolute inset-0 bg-white/90 hover:bg-white transition-opacity duration-300"></span>
                        </Link>
                        <button className="px-10 py-4 bg-transparent text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold border-2 border-white/30 hover:border-white/50 shadow-lg text-lg">
                            Book Demo
                        </button>
                    </div>
                    <p className="text-sm text-blue-200">
                        No credit card required • Cancel anytime • 24/7 Support
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-3 mb-6 md:mb-0">
                            <div className="w-8 h-8 relative">
                                <Image
                                    src="/images/applogo.png"
                                    alt="Cubelytics Logo"
                                    fill
                                    className="object-contain scale-150"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">Cubelytics</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="#" className="hover:text-white transition-colors">Features</Link>
                            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
                            <Link href="#" className="hover:text-white transition-colors">Case Studies</Link>
                            <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p>© {new Date().getFullYear()} Cubelytics. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}