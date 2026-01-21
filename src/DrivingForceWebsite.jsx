import React, { useEffect, useState } from 'react';
import {
    ArrowRight,
    Mail,
    Linkedin,
    ChevronRight,
    Globe,
    TrendingUp,
    Lightbulb,
} from 'lucide-react';

const DrivingForceWebsite = () => {
    // Language (EN/JA)
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved === 'en' || saved === 'ja') setLang(saved);
    }, []);

    const switchLanguage = (nextLang) => {
        setLang(nextLang);
        localStorage.setItem('preferredLanguage', nextLang);
    };

    const t = {
        navContact: lang === 'en' ? 'Contact Us' : 'お問い合わせ',
        heroTitle:
            lang === 'en'
                ? 'The Driving Force for Your Global Business.'
                : '世界ビジネスへの推進力を、\nUAEから。',
        heroLead:
            lang === 'en'
                ? 'Accelerating innovation and trade from UAE to the World.'
                : 'イノベーション、戦略的貿易、そして投資。\nUAE to the World — UAEを拠点に、貴社のグローバル展開を加速させます。',
        heroPrimary: lang === 'en' ? 'Get in Touch' : 'お問い合わせ',
        heroSecondary: lang === 'en' ? "Founder's Vision" : '創業者のビジョン',

        trackRecordKicker: lang === 'en' ? 'Track Record' : '実績',
        trackRecordTitle:
            lang === 'en'
                ? 'Backed by & Collaborated with Industry Leaders'
                : '業界をリードする企業との協業・実績',

        leadershipKicker: lang === 'en' ? 'Leadership' : 'リーダーシップ',
        founderRole: lang === 'en' ? 'Founder / CEO' : '創業者 / CEO',
        viewLinkedIn: lang === 'en' ? 'View LinkedIn' : 'LinkedInを見る',
        readInterviews: lang === 'en' ? 'Read Interviews' : 'インタビューを見る',

        whatWeDoKicker: lang === 'en' ? 'What We Do' : '事業内容',
        expertiseTitle: lang === 'en' ? 'Our Expertise' : '私たちの強み',
        expertiseLead:
            lang === 'en'
                ? 'Comprehensive solutions for global business acceleration'
                : 'グローバル展開を加速するための包括的な支援',

        contactKicker: lang === 'en' ? 'Get In Touch' : 'お問い合わせ',
        contactTitle:
            lang === 'en'
                ? "Let's Build Something Great Together"
                : '共に、素晴らしい未来をつくりましょう',
        contactLead:
            lang === 'en'
                ? "Whether you're looking to expand into new markets, develop innovative solutions, or accelerate your business growth, we're here to help."
                : '新市場への展開、プロダクト開発、事業成長の加速など、目的に応じて最適な形で支援します。',

        formName: lang === 'en' ? 'Name' : 'お名前',
        formEmail: lang === 'en' ? 'Email' : 'メールアドレス',
        formSubject: lang === 'en' ? 'Subject' : '件名',
        formMessage: lang === 'en' ? 'Message' : 'お問い合わせ内容',
        formSend: lang === 'en' ? 'Send Message' : '送信',

        footerTagline:
            lang === 'en'
                ? 'Accelerating Global Business'
                : 'UAEから世界へ、グローバルビジネスを加速させます。',
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(lang === 'en' ? 'Thank you for your message.' : 'お問い合わせありがとうございます。近日中にご連絡いたします。');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const partners = [
        { name: 'Shogakukan', subtitle: 'Exit Partner' },
        { name: 'Tokyo Otaku Mode', subtitle: 'Co-founded' },
        { name: 'CARTA HOLDINGS', subtitle: 'Partner' },
        { name: 'Dentsu', subtitle: 'Collaborator' },
        { name: '500 Global', subtitle: 'Backed By' },
        { name: 'Digital Garage', subtitle: 'Partner' },
    ];

    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: lang === 'en' ? 'Strategic Trading' : '戦略的トレーディング',
            description:
                lang === 'en'
                    ? "Middle East import/export hub & supply chain strategy. Leveraging Dubai's strategic position to connect global markets."
                    : '中東の輸出入拠点・サプライチェーン戦略。ドバイの地政学的優位を活かし、グローバル市場をつなぎます。',
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: lang === 'en' ? 'Digital Innovation' : 'デジタル・イノベーション',
            description:
                lang === 'en'
                    ? 'SaaS development (Readable, Bakuage), AI integration, and product incubation. Building scalable technology solutions.'
                    : 'SaaS開発（Readable / Bakuage）、AI統合、プロダクトのインキュベーション。スケールする技術基盤を構築します。',
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: lang === 'en' ? 'Investment & Consulting' : '投資・コンサルティング',
            description:
                lang === 'en'
                    ? 'New business development, UAE market entry, and venture investment. Strategic guidance for global expansion.'
                    : '新規事業開発、UAE市場参入、ベンチャー投資。グローバル展開のための戦略を伴走します。',
        },
    ];

    // Hero subtle dotted pattern (React版)
    const heroPatternStyle = {
        backgroundColor: '#ffffff',
        backgroundImage:
            'radial-gradient(rgba(30, 58, 138, 0.25) 0.5px, transparent 0.5px), radial-gradient(rgba(30, 58, 138, 0.25) 0.5px, #ffffff 0.5px)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px',
        opacity: 0.10,
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="text-2xl font-bold tracking-tight text-gray-900">
                            DRIVINGFORCE
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                <button
                                    type="button"
                                    onClick={() => switchLanguage('en')}
                                    className={[
                                        'px-3 py-1.5 text-sm font-medium rounded transition-all',
                                        lang === 'en'
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-600 hover:text-gray-900',
                                    ].join(' ')}
                                    aria-pressed={lang === 'en'}
                                >
                                    EN
                                </button>
                                <button
                                    type="button"
                                    onClick={() => switchLanguage('ja')}
                                    className={[
                                        'px-3 py-1.5 text-sm font-medium rounded transition-all',
                                        lang === 'ja'
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-600 hover:text-gray-900',
                                    ].join(' ')}
                                    aria-pressed={lang === 'ja'}
                                >
                                    日本語
                                </button>
                            </div>

                            <a
                                href="#contact"
                                className="px-6 py-2.5 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors text-sm font-medium"
                            >
                                {t.navContact}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 relative overflow-hidden">
                {/* dotted pattern overlay */}
                <div className="absolute inset-0 -z-10" style={heroPatternStyle} />

                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 whitespace-pre-line">
                            {t.heroTitle}
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed whitespace-pre-line">
                            {t.heroLead}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors text-lg font-medium group"
                            >
                                {t.heroPrimary}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors text-lg font-medium"
                            >
                                {t.heroSecondary}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section (SVG Logos) */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">
                            {lang === 'en' ? 'Track Record' : '実績'}
                        </p>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            {lang === 'en'
                                ? 'Backed by & Collaborated with Industry Leaders'
                                : '業界をリードする企業との協業・実績'}
                        </h2>

                        <p className="text-xs text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
                            {lang === 'en' ? (
                                <>
                                    Building businesses with industry leaders. Background in{' '}
                                    <span className="font-semibold text-gray-700">
                                        Top-tier Public Companies
                                    </span>{' '}
                                    within the{' '}
                                    <span className="font-semibold text-gray-700">
                                        Internet Advertising & Media
                                    </span>{' '}
                                    sectors.
                                </>
                            ) : (
                                <>
                                    業界をリードする企業との協業・実績。
                                    <br />
                                    <span className="font-semibold text-gray-700">
                                        インターネット広告・メディア産業のトップティア上場企業
                                    </span>
                                    でのキャリアと、グローバルなExit経験を有しています。
                                </>
                            )}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-12 opacity-90 hover:opacity-100 transition duration-500">
                        {/* Shogakukan (SVG, language switch inside SVG) */}
                        <div className="text-center group transition-transform duration-300 hover:scale-105">
                            <div className="h-14 flex items-center justify-center mb-3">
                                <svg
                                    className="h-11 w-auto"
                                    viewBox="0 0 240 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Shogakukan"
                                >
                                    <rect
                                        x="5"
                                        y="15"
                                        width="230"
                                        height="40"
                                        rx="3"
                                        fill="#0047AB"
                                        opacity="0.95"
                                    />
                                    {lang === 'ja' ? (
                                        <text
                                            x="120"
                                            y="44"
                                            fontFamily="'Noto Sans JP', sans-serif"
                                            fontSize="18"
                                            fontWeight="700"
                                            fill="white"
                                            textAnchor="middle"
                                            letterSpacing="1.5"
                                        >
                                            小学館
                                        </text>
                                    ) : (
                                        <text
                                            x="120"
                                            y="43"
                                            fontFamily="Arial, sans-serif"
                                            fontSize="15"
                                            fontWeight="700"
                                            fill="white"
                                            textAnchor="middle"
                                            letterSpacing="2"
                                        >
                                            SHOGAKUKAN
                                        </text>
                                    )}
                                </svg>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                                {lang === 'en' ? 'Exit Destination' : 'Exit先'}
                            </span>
                        </div>

                        {/* 500 Global */}
                        <div className="text-center group transition-transform duration-300 hover:scale-105">
                            <div className="h-14 flex items-center justify-center mb-3">
                                <svg
                                    className="h-11 w-auto"
                                    viewBox="0 0 200 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="500 Global"
                                >
                                    <defs>
                                        <linearGradient
                                            id="grad500"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="0%"
                                        >
                                            <stop offset="0%" stopColor="#FF6B35" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#F7931E" stopOpacity="1" />
                                        </linearGradient>
                                    </defs>
                                    <text
                                        x="100"
                                        y="45"
                                        fontFamily="Arial, sans-serif"
                                        fontSize="32"
                                        fontWeight="900"
                                        fill="url(#grad500)"
                                        textAnchor="middle"
                                    >
                                        500
                                    </text>
                                    <text
                                        x="100"
                                        y="60"
                                        fontFamily="Arial, sans-serif"
                                        fontSize="14"
                                        fontWeight="600"
                                        fill="#111827"
                                        textAnchor="middle"
                                        letterSpacing="1"
                                    >
                                        GLOBAL
                                    </text>
                                </svg>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                                {lang === 'en' ? 'Investor' : '投資家'}
                            </span>
                        </div>

                        {/* divider (desktop only) */}
                        <div className="hidden lg:block h-20 border-l-2 border-gray-200" />

                        {/* Digital Garage */}
                        <div className="text-center group transition-transform duration-300 hover:scale-105">
                            <div className="h-14 flex items-center justify-center mb-3">
                                <svg
                                    className="h-11 w-auto"
                                    viewBox="0 0 220 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Digital Garage"
                                >
                                    <text
                                        x="110"
                                        y="38"
                                        fontFamily="Arial, sans-serif"
                                        fontSize="20"
                                        fontWeight="700"
                                        fill="#0066CC"
                                        textAnchor="middle"
                                        letterSpacing="0.5"
                                    >
                                        Digital Garage
                                    </text>
                                    <rect
                                        x="20"
                                        y="48"
                                        width="180"
                                        height="2"
                                        fill="#0066CC"
                                        opacity="0.3"
                                    />
                                </svg>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                                {lang === 'en' ? 'Career' : '経歴'}
                            </span>
                        </div>

                        {/* CARTA HOLDINGS */}
                        <div className="text-center group transition-transform duration-300 hover:scale-105">
                            <div className="h-14 flex items-center justify-center mb-3">
                                <svg
                                    className="h-11 w-auto"
                                    viewBox="0 0 230 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="CARTA HOLDINGS"
                                >
                                    <text
                                        x="115"
                                        y="40"
                                        fontFamily="Arial, sans-serif"
                                        fontSize="22"
                                        fontWeight="800"
                                        fill="#111111"
                                        textAnchor="middle"
                                        letterSpacing="2"
                                    >
                                        CARTA
                                    </text>
                                    <text
                                        x="115"
                                        y="55"
                                        fontFamily="Arial, sans-serif"
                                        fontSize="11"
                                        fontWeight="500"
                                        fill="#666666"
                                        textAnchor="middle"
                                        letterSpacing="3"
                                    >
                                        HOLDINGS
                                    </text>
                                </svg>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                                {lang === 'en' ? 'Career' : '経歴'}
                            </span>
                        </div>

                        {/* DENTSU */}
                        <div className="text-center group transition-transform duration-300 hover:scale-105">
                            <div className="h-14 flex items-center justify-center mb-3">
                                <svg
                                    className="h-11 w-auto"
                                    viewBox="0 0 180 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="DENTSU"
                                >
                                    <rect x="10" y="18" width="160" height="34" rx="2" fill="#DC0D17" />
                                    <text
                                        x="90"
                                        y="43"
                                        fontFamily="Arial, sans-serif"
                                        fontSize="22"
                                        fontWeight="900"
                                        fill="white"
                                        textAnchor="middle"
                                        letterSpacing="3"
                                    >
                                        DENTSU
                                    </text>
                                </svg>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                                {lang === 'en' ? 'Career' : '経歴'}
                            </span>
                        </div>
                    </div>
                </div>
            </section>


            {/* About Founder Section */}
            <section id="about" className="py-20 lg:py-32 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                        <p className="text-sm">Professional Photo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">
                                {t.leadershipKicker}
                            </p>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                                Tomo Kamei
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">{t.founderRole}</p>

                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {lang === 'en'
                                    ? 'A serial entrepreneur and investor with a proven track record. Co-founder of Tokyo Otaku Mode (acquired by Shogakukan). Developed and scaled SaaS products like Readable and Bakuage (AI mastering). Combining engineering expertise with global business strategy.'
                                    : '起業家・投資家として豊富な実績を持ち、Tokyo Otaku Modeを共同創業し小学館へのExitを実現。ReadableやBakuage（AI Mastering）などのSaaSを開発・拡大し、技術と事業を横断してグローバル戦略を推進します。'}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-sm hover:bg-gray-900 hover:text-white transition-colors font-medium"
                                >
                                    <Linkedin className="w-5 h-5 mr-2" />
                                    {t.viewLinkedIn}
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors font-medium group"
                                >
                                    {t.readInterviews}
                                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Expertise Section */}
            <section className="py-20 lg:py-32 px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">
                            {t.whatWeDoKicker}
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            {t.expertiseTitle}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t.expertiseLead}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 lg:py-32 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">
                                {t.contactKicker}
                            </p>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                {t.contactTitle}
                            </h2>
                            <p className="text-lg text-gray-600 mb-12 whitespace-pre-line">
                                {t.contactLead}
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xl mb-2">DRIVINGFORCE - FZCO</h3>
                                    <p className="text-gray-600">Dubai Silicon Oasis</p>
                                    <p className="text-gray-600">United Arab Emirates</p>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                                    <span>info@drivingforce.ae</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                        {t.formName} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                        {t.formEmail} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                                        {t.formSubject} *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                        {t.formMessage} *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors text-lg font-medium"
                                >
                                    {t.formSend}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="text-2xl font-bold mb-2">DRIVINGFORCE</div>
                            <p className="text-gray-400">{t.footerTagline}</p>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © 2025 DRIVINGFORCE - FZCO. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DrivingForceWebsite;
