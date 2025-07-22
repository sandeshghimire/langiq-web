export default function Education() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold text-black mb-8 uppercase tracking-wide">Education</h1>

            <div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-medium text-black">PhD in Machine Learning & Artificial Intelligence</h3>
                        <p className="text-gray-600 font-normal">Stanford University</p>
                    </div>
                    <span className="text-gray-500 font-light text-sm">2016 - 2020</span>
                </div>
                <p className="text-gray-700 mt-1 font-normal">Dissertation: "Scaling Transformer Architectures for Domain-Specific Language Understanding"</p>
            </div>
        </div>
    );
}
