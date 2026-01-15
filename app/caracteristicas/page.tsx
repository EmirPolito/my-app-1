import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function CaracteristicasPage() {
    const features = [
        {
            icon: "🎨",
            title: "Temas Personalizables",
            description: "Cambia entre modo claro, oscuro y daltónico. Elige entre 6 colores de acento para personalizar tu experiencia."
        },
        {
            icon: "⚡",
            title: "Rendimiento Optimizado",
            description: "Construido con Next.js para tiempos de carga ultrarrápidos y una experiencia de usuario fluida."
        },
        {
            icon: "📱",
            title: "Diseño Responsivo",
            description: "Se adapta perfectamente a cualquier dispositivo: móvil, tablet o escritorio."
        },
        {
            icon: "🔒",
            title: "Seguridad Integrada",
            description: "Protección avanzada con las mejores prácticas de seguridad web modernas."
        },
        {
            icon: "🌍",
            title: "Accesibilidad",
            description: "Diseñado para ser accesible para todos, incluyendo soporte para daltonismo."
        },
        {
            icon: "🚀",
            title: "Fácil Implementación",
            description: "Despliega en minutos con Vercel, Netlify o cualquier plataforma de hosting."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="py-16">
                <div className="container">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-4">
                            Características
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Descubre todas las funcionalidades que hacen de nuestra plataforma la mejor opción para tu proyecto.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="inline-block p-8 rounded-3xl bg-primary/10 border border-primary/20">
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                ¿Listo para empezar?
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Prueba todas las características gratis durante 14 días.
                            </p>
                            <a
                                href="/precios"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity"
                            >
                                Ver Precios →
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
