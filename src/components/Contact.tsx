import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        const templateParams = {
            name, email, message
        }

        try{
            //send email to me 
            await emailjs.send('service_u9uwr47', 'template_514turg', templateParams, 'X4LI41cgdRB_wHeEN');
            //send email to user 
            await emailjs.send('service_u9uwr47', 'template_lz0jfvc', templateParams, 'X4LI41cgdRB_wHeEN');

            setStatus('success');
            formRef.current?.reset();
        }catch (error){
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="p-10 bg-white text-center">
            <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView = {{ opacity: 1, y: 0}}
                transition = {{ duration: 0.6, ease: 'easeOut'}}
                viewport = {{ once: true}}
            >
                <h2 className="text-3xl font-bold mb-4">Contact me</h2>
                <p className="text-lg mb-6">Have a question or want to work together? Send me a message!</p>

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="max-w-md mx-auto bg-gray-100 p-6 rounded shadow-md"
                >

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

                    {status === 'success' && (
                        <p className="mt-4 text-green-600">Message sent successfully!.</p>
                    )}

                    {status === 'error' && (
                        <p className="mt-4 text-red-600">Oops! Something went wrong.</p>
                    )}

                </form>

                <div className="flex justify-center gap-6 flex-wrap text-blue-600 text-lg">
                    <a href="mailto:you@example.com" className="hover:underline">emai@example.com</a>
                    <a href="http://github.com/paras603" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="http://github.com/paras603" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                            
            </motion.div>
        </section>
    );
};

export default Contact;