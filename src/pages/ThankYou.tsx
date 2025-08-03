const ThankYou: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-10">
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg text-center">
                Your message has been sent successfully. I'll get back to you soon!
            </p>
            <a href="/" className="mt-6 text-blue-600 hover:underline">Back to Home</a>
        </div>
    );
};

export default ThankYou;