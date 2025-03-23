export default function CookiePolicy() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-teal-900/20"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                            Cookie Policy
                        </h1>
                        <p className="text-xl text-gray-300 mb-6">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-12 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg prose-invert prose-teal max-w-none">
                        <p className="text-gray-300">
                            This Cookie Policy explains how LangIQ ("we", "us", or "our") uses cookies and similar technologies when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                        </p>

                        <h2 className="font-handwritten text-2xl text-teal-400 mt-8 mb-4">What Are Cookies?</h2>
                        <p className="text-gray-300">
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                        </p>
                        <p className="text-gray-300 mt-4">
                            Cookies set by the website owner (in this case, LangIQ) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                        </p>

                        <h2 className="font-handwritten text-2xl text-teal-400 mt-8 mb-4">Types of Cookies We Use</h2>
                        <p className="text-gray-300">
                            We use the following types of cookies:
                        </p>
                        <ul className="space-y-2 text-gray-300 list-disc pl-5 mt-4">
                            <li>
                                <strong className="text-teal-400">Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                            </li>
                            <li>
                                <strong className="text-teal-400">Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                            </li>
                            <li>
                                <strong className="text-teal-400">Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                            </li>
                            <li>
                                <strong className="text-teal-400">Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                            </li>
                        </ul>

                        <h2 className="font-handwritten text-2xl text-teal-400 mt-8 mb-4">How We Use Cookies</h2>
                        <p className="text-gray-300">
                            We use cookies for the following purposes:
                        </p>
                        <ul className="space-y-2 text-gray-300 list-disc pl-5 mt-4">
                            <li>To authenticate users and prevent fraudulent use of user accounts.</li>
                            <li>To remember information about your preferences and choices when navigating through our site.</li>
                            <li>To understand how you use our website.</li>
                            <li>To personalize your experience.</li>
                            <li>To measure the effectiveness of our site functionality and marketing campaigns.</li>
                        </ul>

                        <h2 className="font-handwritten text-2xl text-teal-400 mt-8 mb-4">Your Choices Regarding Cookies</h2>
                        <p className="text-gray-300">
                            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. Some browsers offer a "Do Not Track" ("DNT") signal whereby you may indicate your preference regarding tracking and cross-site tracking. Although we do not currently employ technology that recognizes DNT signals, we will only process your personal data in accordance with this Cookie Policy.
                        </p>

                        <h2 className="font-handwritten text-2xl text-teal-400 mt-8 mb-4">Cookie Consent</h2>
                        <p className="text-gray-300">
                            When you first visit our website, we will request your consent to use cookies. You can choose to accept all cookies, reject non-essential cookies, or manage your preferences. You can change your cookie preferences at any time by visiting our Cookie Settings page.
                        </p>

                        <h2 className="font-handwritten text-2xl text-teal-400 mt-8 mb-4">Changes to This Cookie Policy</h2>
                        <p className="text-gray-300">
                            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised Cookie Policy on our website. We encourage you to periodically review this page for the latest information on our cookie practices.
                        </p>

                        <h2 className="font-handwritten text-2xl text-teal-400 mt-8 mb-4">Contact Us</h2>
                        <p className="text-gray-300">
                            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                        </p>
                        <p className="text-gray-300 mt-4">
                            LangIQ<br />
                            101 Innovation Drive<br />
                            San Francisco, CA 94105<br />
                            Email: <a href="mailto:privacy@langiq.ai" className="text-teal-400 hover:text-teal-300">privacy@langiq.ai</a><br />
                            Phone: +1 (415) 555-0123
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
