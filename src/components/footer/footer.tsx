import Logo from "@/components/logo/logo";
import SocialLinks from "@/components/footer/social-links";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="container p-8">
        <div className="grid lg:grid-cols-6 gap-8">
          {/*left*/}
          <div className="lg:col-span-2">
            <Logo />
            <p className="py-4 pr-4">
              Unlock your business potential with our cutting-edge SaaS solutions.
            </p>
            <SocialLinks />
          </div>
          {/*right*/}
          <div className="lg:col-span-4">
            <div className="md:flex justify-between">
              {/*menu-col-1*/}
              <div className="pb-8 md:pb-0">
                <h3 className="text-lg font-semibold">Company</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Teams
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              {/*menu-col-2*/}
              <div className="pb-8 md:pb-0">
                <h3 className="text-lg font-semibold">Service</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Project
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              {/*menu-col-3*/}
              <div className="pb-8 md:pb-0">
                <h3 className="text-lg font-semibold">Legal</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="text-center text-sm">
          @ 2024 <a href="https://www.webdesignhot.com/">WebDesignHot</a> All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
