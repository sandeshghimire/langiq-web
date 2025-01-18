import React from 'react';
import { RiMiniProgramLine } from "react-icons/ri";
import { MdFunctions } from "react-icons/md";
import { MdArchitecture } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { SiInfracost } from "react-icons/si";
import { SiInformatica } from "react-icons/si";
import Image from "next/image";
export default function Home() {
    const titles = [
        "Agents : Autonomously performing tasks on behalf of a user or another system",
        "Improved customer experience with AI Agents ",
        "An artificial intelligence (AI) agent is a software program that can interact with its environment, collect data, and use the data to perform self-determined tasks to meet predetermined goals. Humans set goals, but an AI agent independently chooses the best actions it needs to perform to achieve those goals. For example, consider a contact center AI agent that wants to resolves customer queries. The agent will automatically ask the customer different questions, look up information in internal documents, and respond with a solution. Based on the customer responses, it determines if it can resolve the query itself or pass it on to a human.",
        "AI agents can encompass a wide range of functionalities beyond natural language processing including decision-making, problem-solving, interacting with external environments and executing actions."
    ];

    const services = [
        "Architecture is the base the agent operates from. The architecture can be a physical structure, a software program, or a combination. For example, a robotic AI agent consists of actuators, sensors, motors, and robotic arms. Meanwhile, an architecture that hosts an AI software agent may use a text prompt, API, and databases to enable autonomous operations.",
        "The agent function describes how the data collected is translated into actions that support the agent’s objective. When designing the agent function, developers consider the type of information, AI capabilities, knowledge base, feedback mechanism, and other technologies required.",
        "An agent program is the implementation of the agent function. It involves developing, training, and deploying the AI agent on the designated architecture. The agent program aligns the agent’s business logic, technical requirements, and performance elements. ",
        "AI agents are autonomous intelligent systems performing specific tasks without human intervention. Organizations use AI agents to achieve specific goals and more efficient business outcomes. Business teams are more productive when they delegate repetitive tasks to AI agents. This way, they can divert their attention to mission-critical or creative activities, adding more value to their organization.",
        "Businesses can use intelligent agents to reduce unnecessary costs arising from process inefficiencies, human errors, and manual processes. You can confidently perform complex tasks because autonomous agents follow a consistent model that adapts to changing environments. ",
        "Advanced intelligent agents use machine learning (ML) to gather and process massive amounts of real-time data. This allows business managers to make better predictions at pace when strategizing their next move. For example, you can use AI agents to analyze product demands in different market segments when running an ad campaign. ",
        "Excellent communication skills for collaborating on technical solutions."
    ];

    const cardData = [
        {
            title: "Architecture",
            service: services[0],
            icon: <MdArchitecture  />,
            footer: "Footer Button"
        },
        {
            title: "Agent function",
            service: services[1],
            icon: <MdFunctions   />,
            footer: "Footer Button"
        },
        {
            title: "Agent Program",
            service: services[2],
            icon: <RiMiniProgramLine  />,
            footer: "Footer Button"
        },
        {
            title: "Improved productivity",
            service: services[3],
            icon: <FaGreaterThan  />,
            footer: "Footer Button"
        },
        {
            title: "Reduced costs",
            service: services[4],
            icon: <SiInfracost  />,
            footer: "Footer Button"
        },
        {
            title: "Informed decision-making",
            service: services[5],
            icon: <SiInformatica  />,
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
        {src: "/images/meta-line-logo.svg", link: "https://www.meta.com"},
        {src: "/images/openai.svg", link: "https://www.openai.com"},
        {src: "/images/google.svg", link: "https://www.google.com"},
        {src: "/images/microsot.svg", link: "https://www.microsoft.com"},
        {src: "/images/qwqlogo.png", link: "https://www.qwq.com"},
    ];

    return (
        <div className="flex flex-col h-full w-full py-20">
            <div className="flex justify-center items-center font-serif text-8xl font-extrabold py-10">
                {titles[0]}
            </div>

            <div className="flex flex-col py-10 ">
                <div className="flex text-4xl font-serif font-extrabold  text-blue-950 justify-center uppercase  ">
                    {titles[1]}
                </div>
                <div className="flex font-serif text-lg pb-10 p-20">
                    {titles[2]}
                </div>
            </div>

            <div className="grid grid-cols-3 w-full h-full gap-6 py-10">
                {cardData.map((card, index) => (
                    <div key={index} className="border rounded p-6 flex flex-col justify-between hover:bg-amber-50">
                        <div className="flex items-center mb-4">
                            <div className="mr-2 border-fuchsia-50">{React.cloneElement(card.icon, {size: 32})}</div>
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