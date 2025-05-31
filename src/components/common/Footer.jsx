const Footer = () => {
  return (
    <footer class="mt-6 bg-[#2c2a2c] py-6 text-white md:mt-12">
      <div class="wrapper flex flex-col items-center justify-between space-y-4 px-4 text-center md:flex-row md:space-y-0 md:text-left">
        <div>
          <h4 class="text-lg font-semibold">Green & Clean Services</h4>
          <p class="text-sm">
            Reliable lawn mowing services in your neighborhood.
          </p>
        </div>
        <div class="text-sm">
          <p>📍 Decatur, Georgia. US</p>
          <p>📞 (470)-727-5797</p>
          {/* <p>✉️ info@greencleanservices.com</p> */}
        </div>
        <div class="text-sm">
          <p>&copy; 2025 Green & Clean Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
