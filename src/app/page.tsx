import React from 'react';
import { SiOllama } from "react-icons/si";
import { RiMiniProgramLine } from "react-icons/ri";
import { MdFunctions, MdArchitecture } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { SiInfracost, SiInformatica } from "react-icons/si";
import Image from "next/image";

export default function Home() {
    const titles = [
        "LangIQ : Secure and accurate LLM solutions for enterprises",
        "Why Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloud"
    ];

    const subtitle = [
        "At LangIQ, we pioneer next-generation enterprise solutions at the intersection of Generative AI and Large Language Models (LLMs). Headquartered in Silicon Valley's San Jose, we leverage our strategic location within the world's leading tech ecosystem to blend breakthrough innovation with practical implementation. Our elite team of AI researchers and engineers architects enterprise-grade systems that transcend traditional boundaries—solutions that don't just automate but augment human capabilities across industries. Through deep expertise in LLM optimization, custom model development, and seamless enterprise integration, we transform how organizations harness artificial intelligence, while our prime location in one of the most dynamic yet sustainable technology hubs enables us to deliver unparalleled value by attracting and retaining world-class talent who shape the future of technology",
        "Accurate and Secure LLM Solution"
    ];

    const services = [
        "LangIQ delivers cutting-edge AI/ML frameworks that transform enterprise operations through sophisticated deep learning architectures and custom model development. Our expert team specializes in designing scalable, production-ready frameworks that seamlessly integrate with existing systems while optimizing for performance and efficiency. We empower organizations to harness the full potential of machine learning through our comprehensive suite of tools, backed by industry-leading expertise in model training, deployment, and maintenance.",
        "LangIQ provides robust, enterprise-grade LLM APIs that unlock advanced language processing capabilities for your business applications. Our scalable API solutions offer seamless integration of state-of-the-art language models, customized to your specific industry needs. With features like real-time processing, enhanced security protocols, and flexible deployment options, we enable organizations to effortlessly incorporate sophisticated language understanding and generation capabilities into their existing workflows while maintaining optimal performance and reliability.",
        "LangIQ excels in advanced prompt engineering, helping enterprises maximize their LLM investments through expertly crafted prompts that deliver precise, consistent results. Our prompt engineering specialists optimize model interactions through systematic testing, refinement, and validation processes. We develop custom prompt libraries and frameworks that ensure reliable outputs, reduce hallucinations, and enhance model performance across diverse use cases, enabling organizations to achieve superior results from their AI implementations.",
        "LangIQ specializes in implementing and optimizing vector databases that power next-generation AI applications. Our vector database solutions enable efficient storage and retrieval of high-dimensional data, making complex semantic search and similarity matching seamless and scalable. Through expert architecture design and optimization techniques, we help organizations manage massive embeddings effectively, enhance query performance, and build robust AI systems that leverage the full potential of semantic data representation.",
        "LangIQ delivers comprehensive MLOps and CI/CD solutions that streamline the entire machine learning lifecycle. Our automated pipelines ensure seamless model development, testing, deployment, and monitoring while maintaining the highest standards of reliability and performance. Through advanced version control, automated testing, and continuous deployment frameworks, we enable organizations to accelerate their AI development cycles, reduce time-to-market, and maintain production-grade ML systems with enterprise-level stability and scalability.",
        "",
        ""

    ];

    const cardData = [
        {
            title: "AI/ML frameworks",
            service: services[0],
            icon: <SiOllama />,
            footer: "Footer Button"
        },
        {
            title: "LLM APIs",
            service: services[1],
            icon: <RiMiniProgramLine />,
            footer: "Footer Button"
        },
        {
            title: "Prompt Engineering",
            service: services[2],
            icon: <MdFunctions />,
            footer: "Footer Button"
        },
        {
            title: "Vector Databases",
            service: services[3],
            icon: <MdArchitecture />,
            footer: "Footer Button"
        },
        {
            title: "MLOps & CI CD",
            service: services[4],
            icon: <FaGreaterThan />,
            footer: "Footer Button"
        },
        {
            title: "Debug complex AI systems",
            service: services[5],
            icon: <SiInfracost />,
            footer: "Footer Button"
        }
    ];

    const tech = [
        "Technology",
        "Why Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloud"
    ];

    const companyLogos = [
        {src: "/images/ollama.png", link: "https://www.ollama.com"},
        {src: "/images/grokio.svg", link: "https://x.ai/"},
        {src: "/images/meta-line-logo.svg", link: "https://www.meta.ai"},
        {src: "/images/openai.svg", link: "https://www.chat.com"},
        {src: "/images/google.svg", link: "https://aistudio.google.com/"},
        {src: "/images/microsot.svg", link: "https://copilot.microsoft.com/"},
        {src: "/images/qwqlogo.png", link: "https://www.qwq.com"},
    ];

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex justify-center items-center font-serif text-4xl md:text-8xl font-extrabold py-10 md:py-20">
                {titles[0]}
            </div>

            <div className="flex flex-col py-5 md:py-10 px-5 md:px-20">
                <div className="flex text-2xl md:text-5xl font-serif text-blue-950 justify-center uppercase font-extrabold pb-5 md:pb-10">
                    {subtitle[1]}
                </div>
                <div className="flex font-serif text-base md:text-lg pb-5 md:pb-10">
                    {subtitle[0]}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full gap-6 px-5 md:px-0">
                {cardData.map((card, index) => (
                    <div key={index} className="border rounded p-6 flex flex-col justify-between hover:bg-amber-50">
                        <div className="flex items-center mb-4">
                            <div className="mr-2 border-fuchsia-50">{React.cloneElement(card.icon, { size: 32 })}</div>
                            <h2 className="text-lg md:text-xl font-bold">{card.title}</h2>
                        </div>
                        <div className="flex-grow">
                            <p>{card.service}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col py-10 md:py-20">
                <div className="flex text-2xl md:text-4xl font-serif font-extrabold pb-4 text-blue-950 justify-center items-center">
                    {tech[0]}
                </div>
                <div className="flex flex-wrap gap-4 md:gap-10 justify-center items-center">
                    {companyLogos.map((logo, index) => (
                        <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                            <Image src={logo.src} alt={`Company ${index + 1}`} width={50} height={32} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}