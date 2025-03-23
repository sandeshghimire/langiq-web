export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-purple-900/20"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                            Privacy Policy
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
                    <div className="prose prose-lg prose-invert prose-purple max-w-none">
                        <p className="text-gray-300">
                            At LangIQ, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h2 className="font-handwritten text-2xl text-purple-400 mt-8 mb-4">Information We Collect</h2>
                        <p className="text-gray-300">
                            We may collect information about you in a variety of ways. The information we may collect includes:
                        </p>
                        <ul className="space-y-2 text-gray-300 list-disc pl-5 mt-4">
                            <li>Personal Data: Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily provide when registering or contacting us.</li>
                            <li>Derivative Data: Information our servers automatically collect when you access our site, such as your IP address, browser type, operating system, and the pages you have viewed.</li>
                            <li>Financial Data: Financial information such as payment method details that we may collect when you purchase our services.</li>
                            <li>Data From Social Networks: Information from social networking sites, such as name and email address, if you connect to our services through these platforms.</li>
                        </ul>

                        <h2 className="font-handwritten text-2xl text-purple-400 mt-8 mb-4">Use of Your Information</h2>
                        <p className="text-gray-300">
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you to:
                        </p>
                        <ul className="space-y-2 text-gray-300 list-disc pl-5 mt-4">
                            <li>Create and manage your account.</li>
                            <li>Process your transactions and payments.</li>
                            <li>Send you administrative information, such as updates, security alerts, and support messages.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Deliver targeted advertising, newsletters, and other information regarding our services.</li>
                            <li>Compile anonymous statistical data for our own use or for a third party's use.</li>
                            <li>Assist law enforcement and respond to subpoenas.</li>
                            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                        </ul>

                        <h2 className="font-handwritten text-2xl text-purple-400 mt-8 mb-4">Disclosure of Your Information</h2>
                        <p className="text-gray-300">
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                        <ul className="space-y-2 text-gray-300 list-disc pl-5 mt-4">
                            <li>By Law or to Protect Rights: If we believe the release of information is required by law or to protect our rights, property, or safety or that of others.</li>
                            <li>Business Transfers: If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                            <li>Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, and hosting services.</li>
                        </ul>

                        <h2 className="font-handwritten text-2xl text-purple-400 mt-8 mb-4">Security of Your Information</h2>
                        <p className="text-gray-300">
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
                        </p>

                        <h2 className="font-handwritten text-2xl text-purple-400 mt-8 mb-4">Your Rights Regarding Your Data</h2>
                        <p className="text-gray-300">
                            You have certain rights regarding your personal data:
                        </p>
                        <ul className="space-y-2 text-gray-300 list-disc pl-5 mt-4">
                            <li>Right to Access: You have the right to request copies of your personal information.</li>
                            <li>Right to Rectification: You have the right to request that we correct any information you believe is inaccurate or complete any information you believe is incomplete.</li>
                            <li>Right to Erasure: You have the right to request that we erase your personal data, under certain conditions.</li>
                            <li>Right to Restrict Processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                            <li>Right to Data Portability: You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
                        </ul>

                        <h2 className="font-handwritten text-2xl text-purple-400 mt-8 mb-4">Contact Us</h2>
                        <p className="text-gray-300">
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-gray-300 mt-4">
                            LangIQ<br />
                            101 Innovation Drive<br />
                            San Francisco, CA 94105<br />
                            Email: <a href="mailto:privacy@langiq.ai" className="text-purple-400 hover:text-purple-300">privacy@langiq.ai</a><br />
                            Phone: +1 (415) 555-0123
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
