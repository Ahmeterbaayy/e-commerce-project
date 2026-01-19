import React from "react";
import shoppingFamily from "../assets/images/contactPage-img/contact-banner.png";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import ArrowIcon from "../assets/images/contactPage-img/icn settings .icn-xl.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="main-container flex w-full flex-col items-start flex-nowrap bg-[#fff] relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[882px] shrink-0 bg-[#fff] relative overflow-hidden">
        {/* Main Content */}
        <div className="flex w-full max-w-[1050px] pt-[40px] md:pt-[112px] pr-0 pb-[40px] md:pb-[112px] pl-0 md:pl-0 flex-col gap-[40px] md:gap-[80px] items-center md:items-start flex-nowrap relative overflow-hidden z-[31] mt-[0] md:mt-[13px] mx-auto md:ml-[180px]">
          <div className="flex flex-col md:flex-row w-full md:w-[1044px] gap-[20px] md:gap-[30px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[32]">
            <div className="flex w-full md:w-[599px] flex-col gap-[20px] md:gap-[35px] items-center md:items-start shrink-0 flex-nowrap relative overflow-hidden z-[33]">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap z-[34]">
                CONTACT US
              </span>
              <span
                className="hidden md:flex w-[378px] h-[160px] justify-start items-start shrink-0 font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-left overflow-hidden z-[35]"
              >
                Get in touch <br />
                today!
              </span>
              <span
                className="flex md:hidden w-full justify-center items-center shrink-0 font-['Montserrat'] text-[32px] font-bold leading-[40px] text-[#252b42] tracking-[0.2px] relative text-center z-[35] mb-2"
              >
                Get in touch<br />today!
              </span>
              <span className="flex w-[376px] h-auto md:h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden z-[36]">
                <span className="hidden md:block">We know how large objects will act, <br />but things on a small scale</span>
                <span className="md:hidden text-center w-full">
                  We know how large <br />
                  objects will act, but things <br />
                  on a small scale just do <br />
                  not act that way
                </span>
              </span>
              <div className="w-[260px] h-[84px] shrink-0 text-[0px] relative overflow-hidden z-[37]">
                <span className="block h-[32px] font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px] relative text-center md:text-left whitespace-nowrap z-[38] mt-0 mr-0 mb-0 ml-0">
                  Phone ; +451 215 215
                </span>
                <span className="block h-[32px] font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px] relative text-center md:text-left whitespace-nowrap z-[39] mt-[20px] mr-0 mb-0 ml-0">
                  Fax : +451 215 215
                </span>
              </div>
              <div className="flex w-[242px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[34px] items-start shrink-0 flex-nowrap relative overflow-hidden z-40">
                <div className="flex gap-6 items-center justify-center md:justify-start w-full">
                  <FaTwitter className="w-8 h-8 text-[#252b42] bg-[#fff]" />
                  <FaFacebookF className="w-8 h-8 text-[#252b42] bg-[#fff]" />
                  <FaInstagram className="w-8 h-8 text-[#252b42] bg-[#fff]" />
                  <FaLinkedinIn className="w-8 h-8 text-[#252b42] bg-[#fff]" />
                </div>
              </div>
              <div className="md:hidden flex w-full justify-center items-center mt-0">
                <img src={shoppingFamily} alt="shopping family" className="max-w-[90vw] w-[256px] h-auto mx-auto rounded-xl object-contain" style={{display:'block', marginTop:'0'}} />
              </div>
            </div>
            <div className="flex w-[415px] h-[280px] pt-0 pr-0 pb-0 pl-0 flex-col items-start shrink-0 flex-nowrap relative overflow-hidden z-[45]" />
          </div>
        </div>
        
        {/* Background Image positioned on the right */}
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[1] md:block hidden">
          <div className="w-full h-[853px] relative z-[2] mt-0 mr-0 mb-0 ml-0">
            <div 
              className="w-[632px] h-[612px] relative z-[3] mt-[20px] mr-0 mb-0 md:ml-[900px]"
              style={{
                backgroundImage: `url(${shoppingFamily})`,
                backgroundSize: 'contain',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                minHeight: '400px'
              }}
            >
              {/* Overlay to hide any watermarks */}
              <div className="absolute bottom-0 right-0 w-[200px] h-[80px] bg-white z-10"></div>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[4]" />
        </div>
      </div>

      {/* Visit Our Office Section */}
      <div className="w-full self-stretch shrink-0 bg-[#fff] relative overflow-hidden z-[46] py-[12px] md:py-[112px]">
        <div className="flex w-full max-w-[1050px] px-4 flex-col gap-[80px] items-center flex-nowrap relative overflow-hidden z-[47] mx-auto">
          <div className="flex w-[633px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[48]">
            <div className="flex w-[625px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[49]">
              <span className="flex w-[132px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-50">
                VISIT OUR OFFICE
              </span>
              <span className="flex w-full max-w-[700px] justify-center items-start shrink-0 font-['Montserrat'] text-[32px] sm:text-[36px] md:text-[40px] font-bold leading-[44px] sm:leading-[48px] md:leading-[50px] text-[#252b42] tracking-[0.2px] relative text-center z-[51]">
                <span className="block sm:hidden">We help small<br />businesses</span>
                <span className="hidden sm:inline">We help small businesses</span>
              </span>
              <span className="flex w-full max-w-[700px] justify-center items-start shrink-0 font-['Montserrat'] text-[32px] sm:text-[36px] md:text-[40px] font-bold leading-[44px] sm:leading-[48px] md:leading-[50px] text-[#252b42] tracking-[0.2px] relative text-center z-[51] mt-[-10px]">
                with big ideas
              </span>
            </div>
          </div>
          
          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row w-full md:w-[985px] items-center shrink-0 flex-nowrap relative z-[52] gap-6 md:gap-0">
            {/* First Card - White */}
            <div className="flex w-full md:w-[327px] flex-col items-start shrink-0 flex-nowrap relative z-[53]">
              <div className="flex w-full md:w-[328px] pt-[50px] pr-[40px] pb-[50px] pl-[40px] flex-col gap-[15px] items-center shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[54]">
                <Phone className="w-[72px] h-[72px] text-[#23a6f0]" />
                <div className="w-[250px] h-[48px] shrink-0 text-[0px] relative overflow-hidden z-[56]">
                  <span className="flex w-[250px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[57] mt-0 mr-0 mb-0 ml-0">
                    georgia.young@example.com
                  </span>
                  <span className="flex w-[220px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[58] mt-0 mr-0 mb-0 ml-[15px]">
                    georgia.young@ple.com
                  </span>
                </div>
                <span className="flex w-[100px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap z-[59]">
                  Get Support
                </span>
                <div className="flex w-[189px] pt-[15px] pr-[36px] pb-[15px] pl-[36px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[37px] border-solid border border-[#23a6f0] relative overflow-hidden z-[60]">
                  <span className="flex w-[117px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap z-[61]">
                    Submit Request
                  </span>
                </div>
              </div>
            </div>
            
            {/* Second Card - Dark */}
            <div className="flex w-full md:w-[329px] flex-col items-start shrink-0 flex-nowrap relative z-[62]">
              <div className="flex w-full md:w-[328px] pt-[80px] pr-[40px] pb-[80px] pl-[40px] flex-col gap-[15px] items-center shrink-0 flex-nowrap bg-[#252b42] relative overflow-hidden z-[63]">
                <MapPin className="w-[72px] h-[72px] text-[#23a6f0]" />
                <div className="w-[250px] h-[48px] shrink-0 text-[0px] relative overflow-hidden z-[65]">
                  <span className="flex w-[250px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[66] mt-0 mr-0 mb-0 ml-0">
                    georgia.young@example.com
                  </span>
                  <span className="flex w-[220px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[67] mt-0 mr-0 mb-0 ml-[15px]">
                    georgia.young@ple.com
                  </span>
                </div>
                <span className="flex w-[100px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#fff] tracking-[0.1px] relative text-center whitespace-nowrap z-[68]">
                  Get Support
                </span>
                <div className="flex w-[189px] pt-[15px] pr-[36px] pb-[15px] pl-[36px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[37px] border-solid border border-[#23a6f0] relative overflow-hidden z-[69]">
                  <span className="flex w-[117px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap z-[70]">
                    Submit Request
                  </span>
                </div>
              </div>
            </div>
            
            {/* Third Card - White */}
            <div className="flex w-full md:w-[329px] flex-col items-start shrink-0 flex-nowrap relative z-[71]">
              <div className="flex w-full md:w-[328px] pt-[50px] pr-[40px] pb-[50px] pl-[40px] flex-col gap-[15px] items-center shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[72]">
                <img src={ArrowIcon} alt="arrow icon" className="w-[72px] h-[72px] object-contain" />
                <div className="w-[250px] h-[48px] shrink-0 text-[0px] relative overflow-hidden z-[74]">
                  <span className="flex w-[250px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[75] mt-0 mr-0 mb-0 ml-0">
                    georgia.young@example.com
                  </span>
                  <span className="flex w-[220px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[76] mt-0 mr-0 mb-0 ml-[15px]">
                    georgia.young@ple.com
                  </span>
                </div>
                <span className="flex w-[100px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap z-[77]">
                  Get Support
                </span>
                <div className="flex w-[189px] pt-[15px] pr-[36px] pb-[15px] pl-[36px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[37px] border-solid border border-[#23a6f0] relative overflow-hidden z-[78]">
                  <span className="flex w-[117px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap z-[79]">
                    Submit Request
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full h-[348px] shrink-0 bg-[#fff] relative overflow-hidden z-[80]">
        <div className="flex w-full max-w-[1050px] h-[348px] pt-[80px] px-4 pb-[80px] flex-col gap-[96px] items-center flex-nowrap absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden z-[81]">
          <div className="flex w-[607px] flex-col gap-[36px] items-center shrink-0 flex-nowrap relative z-[82]">
            <div className="flex w-[272px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[83]">
              <span className="flex w-[239px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap z-[84]">
                WE Can't WAIT TO MEET YOU
              </span>
              <span className="flex w-[272px] h-[80px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[85]">
                Let's Talk
              </span>
              <div className="flex w-[186px] gap-[10px] items-start shrink-0 flex-nowrap relative z-[86]">
                <button
                  className="flex w-[186px] h-[52px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#23a6f0] rounded-[5px] relative overflow-hidden z-[87] hover:bg-[#1a8cd8] transition-colors focus:outline-none"
                  type="button"
                >
                  <span className="flex w-[106px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[88]">
                    Try it free now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}