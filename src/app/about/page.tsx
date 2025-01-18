import React from 'react';
import Image from "next/image";
import {SiOllama} from "react-icons/si";
import {RiMiniProgramLine} from "react-icons/ri";
import {MdFunctions, MdArchitecture} from "react-icons/md";
import {FaGreaterThan} from "react-icons/fa";
import {SiInfracost, SiInformatica} from "react-icons/si";

export default function Home() {
    const titles = [
        "LangIQ : Let's build best AI solutions together",
        "Get in Touch with our Team",
        "Thank you for your interest in LangiQ.ai! We’re here to assist with any questions or inquiries you may have about our AI solutions. Whether you’re seeking more information on our services, need technical support, or are interested in potential collaborations, our team is ready to help. Please contact us through email, phone, or by filling out the form on our website. We look forward to connecting and exploring how we can help you leverage secure, accurate AI applications."
    ];

    const services = [
        "Get in Touch with the LangiQ.ai Team",
        "Why Enterprises in Finance, Professional Services, Manufacturing and More Choose LlamaCloud"
    ];


    const service = [
        "LLM-Powered Applications: Secure, accurate, and tailored AI-driven applications.",
        "AI Pipeline Optimization: Efficient and scalable AI workflow management.",
        "Scalable AI Infrastructure: Robust, cloud-native infrastructure for large-scale AI ",
        "Technical Solutions Development: Custom AI solutions for specific business challenges.",
        "LLM Research & Development: Cutting-edge research to advance large language models."
    ];

    const contact = [
        "LangiQ.ai",
        "Address: 1333 Trailside Ct, San Jose, CA 95138",
        "Phone: (669) 356-1998",
        "Email: info@langiq.ai",
        "Website : https://www.langiq.ai"
    ];

    const cardData = [
        {
            title: "Contact US for AI Solutions",
            service: services[1],
            icon: <SiOllama/>,
            footer: "Footer Button"
        },
        {
            title: "Contact Info ",
            service: services[1],
            icon: <RiMiniProgramLine/>,
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
        <div className="flex flex-col h-full w-full p-4 md:p-10">
            <div
                className="flex justify-center items-center font-serif text-4xl md:text-8xl font-extrabold pb-10 md:py-10">
                {titles[0]}
            </div>

            <div className="flex flex-col py-10  font-serif ">
                <div className="flex text-2xl md:text-4xl font-serif font-extrabold pb-4 text-blue-950 justify-center uppercase">
                    {titles[1]}
                </div>
                <div className="flex text-sm md:text-lg p-20 ">
                    {titles[2]}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-6  p-5 font-serif ">
                <div className="hover:bg-amber-50 p-4">
                    <div className="flex ">
                        <div className="mr-2 border-fuchsia-50"><RiMiniProgramLine size={32}/></div>
                        <div className="mr-2 border-fuchsia-50 font-extrabold text-2xl ">Our Services</div>
                    </div>
                    {service.map((item, index) => (
                        <div key={index} className="">
                            <div className="flex-grow">
                                <li className="px-4">{item}</li>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hover:bg-amber-50 p-4 font-extrabold">
                    <div className="flex ">
                        <div className="mr-2 border-fuchsia-50"><RiMiniProgramLine size={32}/></div>
                        <div className="mr-2 border-fuchsia-50 font-extrabold text-2xl">Contact Info</div>
                    </div>
                    <div className=" px-10">
                        {contact.map((item, index) => (
                            <div key={index} className="">
                                <div className="flex-grow ">
                                    <p className="">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="flex flex-col py-10 md:py-20">
                <div
                    className="flex text-2xl md:text-4xl font-serif font-extrabold pb-4 text-blue-950 justify-center items-center">
                    {tech[0]}
                </div>


                <div className="flex flex-wrap gap-4 md:gap-10 justify-center items-center ">
                    {companyLogos.map((logo, index) => (
                        <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                            <Image src={logo.src}  className=""  alt={`Company ${index + 1}`} width={50} height={50} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}