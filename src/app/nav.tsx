export function Nav() {
    return <nav className="p-6 tracking-widest font-extrabold font-serif">
        <div className="flex container mx-auto gap-4 justify-between uppercase tracking-widest ">
            <div className="">
                <a href="/" className="text-lg ">Home</a>
            </div>
            <div className="flex gap-4 font-serif uppercase text-lg font-extrabold">
                <a href="/services" className="text-lg ">Service</a>
                <a href="/agents" className="text-lg ">Agents</a>
                <a href="/about" className="text-lg ">About</a>
            </div>
        </div>
    </nav>;
}