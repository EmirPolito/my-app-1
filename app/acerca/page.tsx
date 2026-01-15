import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function AcercaPage() {
    const team = [
        {
            name: "María González",
            role: "CEO & Fundadora",
            avatar: "👩‍💼"
        },
        {
            name: "Carlos Rodríguez",
            role: "CTO",
            avatar: "👨‍💻"
        },
        {
            name: "Ana Martínez",
            role: "Diseñadora UX",
            avatar: "👩‍🎨"
        },
        {
            name: "Luis Hernández",
            role: "Desarrollador Senior",
            avatar: "👨‍🔧"
        }
    ];

    const stats = [
        { number: "10K+", label: "Usuarios activos" },
        { number: "50+", label: "Países" },
        { number: "99.9%", label: "Uptime" },
        { number: "24/7", label: "Soporte" }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="py-16">
                <div className="container">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-4">
                            Acerca de Nosotros
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Somos un equipo apasionado por crear herramientas que ayuden a las personas a construir proyectos increíbles.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl border border-border bg-card">
                                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <span>🎯</span> Nuestra Misión
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Democratizar el desarrollo web proporcionando herramientas potentes,
                                    accesibles y fáciles de usar que permitan a cualquier persona crear
                                    experiencias digitales excepcionales.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl border border-border bg-card">
                                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <span>👁️</span> Nuestra Visión
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Un mundo donde las barreras técnicas no limiten la creatividad.
                                    Donde cada idea pueda convertirse en realidad sin importar
                                    el nivel de experiencia del creador.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mb-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors"
                                >
                                    <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                            Nuestro Equipo
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                                >
                                    <div className="text-5xl mb-4">{member.avatar}</div>
                                    <h3 className="font-bold text-foreground">{member.name}</h3>
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                            Nuestros Valores
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl border border-border bg-card text-center">
                                <div className="text-3xl mb-3">💡</div>
                                <h3 className="font-bold text-foreground mb-2">Innovación</h3>
                                <p className="text-sm text-muted-foreground">
                                    Siempre buscando nuevas formas de resolver problemas.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border bg-card text-center">
                                <div className="text-3xl mb-3">🤝</div>
                                <h3 className="font-bold text-foreground mb-2">Colaboración</h3>
                                <p className="text-sm text-muted-foreground">
                                    Trabajamos juntos para lograr resultados extraordinarios.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border bg-card text-center">
                                <div className="text-3xl mb-3">♿</div>
                                <h3 className="font-bold text-foreground mb-2">Accesibilidad</h3>
                                <p className="text-sm text-muted-foreground">
                                    Diseñamos para todos, sin excepciones.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center">
                        <div className="inline-block p-8 rounded-3xl bg-primary/10 border border-primary/20">
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                ¿Quieres saber más?
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Estamos aquí para responder todas tus preguntas.
                            </p>
                            <a
                                href="mailto:contacto@myapp.com"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity"
                            >
                                Contáctanos →
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
