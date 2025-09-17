const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-auto py-3 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-blue-600">CollabHub</span>.  
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
