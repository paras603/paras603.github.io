const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center mt-10">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Paras Mani Rai. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;