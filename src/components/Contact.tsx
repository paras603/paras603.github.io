const Contact: React.FC = () => {
    return (
        <section id="contact" className="p-10 bg-white text-center">
            <h2 className="text-3xl font-bold mb-4">Contact me</h2>
            <p className="text-lg mb-6">Have a question or want to work together? Send me a message!</p>

            <form
                action="https://formsubmit.co/parasmanirai1@gmail.com"
                method="POST"
                className="max-w-md mx-auto bg-gray-100 p-6 rounded shadow-md"
            >
                {/* prevents spam with a honeypot */}
                <input type="text" name="_honey" style={{display: 'none'}} />

                {/* turn off CAPTCHA */}
                <input type="hidden" name="_captcha" value="false"/>
                
                {/* redirect after submission */}
                <input type="hidden" name="_next" value="http://localhost:5173/thank-you"/>

                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded h-32"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                    Send Message
                </button>
            </form>

            <div className="flex justify-center gap-6 flex-wrap text-blue-600 text-lg">
                <a href="mailto:you@example.com" className="hover:underline">emai@example.com</a>
                <a href="http://github.com/paras603" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="http://github.com/paras603" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </section>
    );
};

export default Contact;