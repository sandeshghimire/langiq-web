import Image from "next/image";

export default function Home() {
    const titles = [
        "langIQ: State of the art AI solution ",
        "State of the art AI solution",
        "Why Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloudWhy Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloudWhy Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloudWhy Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloudWhy Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloudWhy Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloud"
    ];

const services = [
    "We build LLM-powered applications by prioritizing security, accuracy, and user-centric design. Our process begins with robust data collection and preprocessing to ensure quality inputs. We fine-tune state-of-the-art large language models tailored to specific use cases, optimizing them for efficiency and precision. Security is integral—our solutions employ advanced encryption, access controls, and ethical AI practices. Finally, we rigorously test and deploy user-friendly applications, enabling businesses to harness AI safely and effectively.",
    "We optimize AI pipelines by streamlining each stage for performance and scalability. We begin with data preprocessing, ensuring clean and structured inputs. Our models are trained on high-quality datasets, fine-tuned for efficiency. We employ parallel processing and distributed computing to speed up training and inference. Continuous monitoring and adjustments allow for adaptive performance improvements. With a focus on automation, we ensure seamless integration, fast deployment, and secure management, driving optimized AI solutions.",
    "We build scalable AI infrastructure by leveraging cloud-native technologies and distributed computing frameworks. Our architecture is designed to handle large-scale data processing, ensuring high availability and fault tolerance. We utilize containerization and orchestration tools like Kubernetes to manage resources efficiently. By incorporating load balancing and dynamic scaling, our systems adjust to varying workloads. Security and compliance are embedded at every layer, providing robust, scalable infrastructure that supports both AI development and deployment at scale.",
    "We develop technical solutions by identifying specific challenges and tailoring our approach to meet business needs. Our process starts with a deep understanding of the problem, followed by designing innovative, scalable solutions. We integrate cutting-edge technologies, including AI, machine learning, and secure cloud infrastructure. Through agile methodologies, we iterate rapidly, refining prototypes and ensuring high-quality outputs. Our solutions are built with security, performance, and user experience in mind, ensuring both reliability and effectiveness.",
    "Our LLM Research & Development focuses on advancing the capabilities of large language models to drive innovation. We conduct in-depth research into model architectures, fine-tuning techniques, and training methodologies to enhance accuracy and efficiency. By leveraging state-of-the-art algorithms and datasets, we push the boundaries of natural language understanding and generation. Our R&D also emphasizes ethical AI, ensuring fairness, transparency, and security. Through continuous experimentation and testing, we aim to deliver breakthrough solutions that empower industries and users.",
    "We maintain best practices by adhering to industry standards and fostering a culture of continuous improvement. We implement rigorous coding, testing, and review processes to ensure high-quality, secure, and reliable solutions. Our teams follow agile methodologies, ensuring flexibility and responsiveness to evolving needs. We prioritize transparency, documentation, and collaboration, enabling efficient knowledge sharing. Additionally, we stay updated on the latest advancements, integrating cutting-edge technologies and ethical guidelines to ensure optimal performance and compliance."
];

    const cardData = [
        {
            title: "LLM-powered applications",
            service: services[0],
            icon: "/images/google.svg",
            footer: "Footer Button"
        },
        {
            title: "Optimize AI Pipelines ",
            service: services[1],
            icon: "/images/ollama.png",
            footer: "Footer Button"
        },
        {
            title: "Scalable AI Infrastructure",
            service: services[2],
            icon: "/images/ollama.png",
            footer: "Footer Button"
        },
        {
            title: "Develop Technical Solutions",
            service: services[3],
            icon: "/images/ollama.png",
            footer: "Footer Button"
        },
        {
            title: "LLM Research & Development ",
            service: services[4],
            icon: "/images/ollama.png",
            footer: "Footer Button"
        },
        {
            title: "Maintain Best Practices",
            service: services[5],
            icon: "/images/ollama.png",
            footer: "Footer Button"
        }
    ];

    const tech = [
        "Technology",
        "Why Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloud"
    ];

    const companyLogos = [
        {src: "/images/ollama.png", link: "https://www.ollama.com"},
        {src: "/images/grokio.svg", link: "https://www.grokio.com"},
        {src: "/images/meta-line-logo.svg", link: "https://www.meta.ai"},
        {src: "/images/openai.svg", link: "https://www.openai.com"},
        {src: "/images/google.svg", link: "https://www.google.com"},
        {src: "/images/microsot.svg", link: "https://www.microsoft.com"},
        {src: "/images/qwqlogo.png", link: "https://www.qwq.com"},
    ];

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex justify-center items-center font-serif text-8xl font-extrabold py-20">
                {titles[0]}
            </div>

            <div className="flex flex-col py-10  p-20">
                <div className="flex text-5xl font-serif  text-blue-950 justify-center uppercase font-extrabold pb-10 ">
                    {titles[1]}
                </div>
                <div className="flex font-serif text-lg pb-10">
                    {titles[2]}
                </div>

            </div>

            <div className="grid grid-cols-3 w-full h-full gap-6">
                {cardData.map((card, index) => (
                    <div key={index} className="border rounded p-6 flex flex-col justify-between hover:bg-amber-50">
                        <div className="flex items-center mb-4">
                            <Image src={card.icon} alt="Icon" width={24} height={24}
                                   className="mr-2 border-fuchsia-50"/>
                            <h2 className="text-xl font-bold">{card.title}</h2>
                        </div>
                        <div className="flex-grow">
                            <p>{card.service}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex flex-col py-20">
                <div className="flex text-4xl font-serif font-extrabold pb-4 text-blue-950 justify-center items-center">
                    {tech[0]}
                </div>
                <div className="flex gap-10 justify-center items-center">
                    {companyLogos.map((logo, index) => (
                        <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                            <Image src={logo.src} alt={`Company ${index + 1}`} width={50} height={50}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}