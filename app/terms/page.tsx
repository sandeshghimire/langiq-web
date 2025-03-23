export default function TermsOfService() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900/20"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                            Terms of Service
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
                    <div className="prose prose-lg prose-invert prose-blue max-w-none">
                        <p className="text-gray-300">
                            These Terms of Service ("Terms") govern your access to and use of LangIQ's website, products, and services. Please read these Terms carefully, and contact us if you have any questions.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-300">
                            By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">2. Changes to Terms</h2>
                        <p className="text-gray-300">
                            We may modify the Terms at any time. If we do this, we will post the changes on this page and will indicate the date the changes become effective. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">3. Account Registration</h2>
                        <p className="text-gray-300">
                            To access certain features of our Services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">4. Services and Products</h2>
                        <p className="text-gray-300">
                            LangIQ provides AI-related services, tools, and consulting as described on our website. We reserve the right to modify, suspend, or discontinue any part of our Services at any time without notice.
                        </p>
                        <p className="text-gray-300 mt-4">
                            Our AI services and products are provided "as is" and may evolve over time as technology advances and in response to user feedback.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">5. Payment Terms</h2>
                        <p className="text-gray-300">
                            Some of our Services may require payment. By using our paid Services, you agree to pay the fees in full as they become due. All fees are exclusive of taxes, which are your responsibility.
                        </p>
                        <p className="text-gray-300 mt-4">
                            Subscriptions will automatically renew until canceled. You can cancel your subscription at any time, but no refunds will be provided for partial billing periods.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">6. Intellectual Property Rights</h2>
                        <p className="text-gray-300">
                            LangIQ and its licensors own all rights, title, and interest in and to the Services, including all intellectual property rights. You may not copy, modify, distribute, sell, or lease any part of our Services without our permission.
                        </p>
                        <p className="text-gray-300 mt-4">
                            You retain ownership of any content you submit through our Services, but you grant us a worldwide, royalty-free license to use, reproduce, modify, and distribute such content for the purpose of providing and improving our Services.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">7. Limitation of Liability</h2>
                        <p className="text-gray-300">
                            To the maximum extent permitted by law, LangIQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with these Terms or the use of or inability to use the Services.
                        </p>
                        <p className="text-gray-300 mt-4">
                            In no event will our aggregate liability for any claim exceed the greater of $100 or the amount you have paid us in the past twelve months.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">8. Indemnification</h2>
                        <p className="text-gray-300">
                            You agree to indemnify and hold LangIQ and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Services, your violation of these Terms, or your violation of any rights of another.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">9. Governing Law</h2>
                        <p className="text-gray-300">
                            These Terms shall be governed by the laws of the State of California, without regard to its conflict of law provisions. You and LangIQ agree to submit to the personal and exclusive jurisdiction of the courts located within San Francisco County, California.
                        </p>

                        <h2 className="font-handwritten text-2xl text-blue-400 mt-8 mb-4">10. Contact Information</h2>
                        <p className="text-gray-300">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="text-gray-300 mt-4">
                            LangIQ<br />
                            101 Innovation Drive<br />
                            San Francisco, CA 94105<br />
                            Email: <a href="mailto:legal@langiq.ai" className="text-blue-400 hover:text-blue-300">legal@langiq.ai</a><br />
                            Phone: +1 (415) 555-0123
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
