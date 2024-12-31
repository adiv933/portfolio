import WindowCard from "../components/WindowCard";

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <WindowCard title="Contact Me">
                <div className="p-4">
                    <p className="mb-4 text-center">Get in touch through any of the platforms below:</p>
                    <ul className="list-none space-y-4 text-sm">
                        <li className="flex items-center gap-4">
                            <span className="inline-block w-6">📧</span>
                            <a
                                href="mailto:adityav090304@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-green-300"
                            >
                                Gmail: adityav090304@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="inline-block w-6">🔗</span>
                            <a
                                href="https://www.linkedin.com/in/adiver"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-green-300"
                            >
                                LinkedIn: linkedin.com/in/adiver
                            </a>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="inline-block w-6">🐙</span>
                            <a
                                href="https://github.com/adiv933"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-green-300"
                            >
                                GitHub: github.com/adiv933
                            </a>
                        </li>
                    </ul>
                </div>
            </WindowCard>
        </div>
    );
};

export default Contact;
