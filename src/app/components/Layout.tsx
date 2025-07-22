import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <div className="min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
                <Navigation />
                <div className="py-8 px-4">
                    <div className="max-w-4xl mx-auto bg-white">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
