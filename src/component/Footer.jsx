import logo from "../img/logo.png";
import { CgInstagram } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="">
      <div>
        <div className="">
          <div className=" ">
            <div className="">
              <div className="footer-logo">
                <div className="footer-img__list">
                  <img src={logo} alt="" />
                </div>
                <div>
                  <ul className="footer-info">
                    <li>Lorem Ipsum is simply dummy</li>
                    <li>Text of the printing and</li>
                    <li>Typesetting industry.</li>
                  </ul>
                </div>
                <div className="footer-social-list">
                  <div className="footer-social-list_item">
                    <CgInstagram />
                    Instagram
                  </div>
                  <div className="footer-social-list_item">
                    <FaTwitter />
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>

            <div className="text-left contact-container text-[#000] lg:col-span-2">
              <div className="text-xl mb-[20px] textSVNGilroy600">
                Địa chỉ Nitea
              </div>
              <p className="text-base text-[#000] textSVNGilroy400  mb-[20px]">
                101 Đống Đa, P. Thạch Thang, Quận Hải Châu,
                Đà Nẵng
              </p>
              <div className="text-xl mb-[20px] textSVNGilroy600 ">
                Địa chỉ Anle Bakery
              </div>
              <p className="text-base text-[#000] textSVNGilroy400  mb-[20px]">
                37 Trần Quốc Toản, P. Phước Ninh, Quận Hải
                Châu, Đà Nẵng
              </p>
              <p className="text-base text-[#000] textSVNGilroy400  mb-[20px]">
                27 Trần Quốc Toản, P. Phước Ninh, Quận Hải
                Châu, Đà Nẵng
              </p>
            </div>
            <div className="text-[#fff] lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between mb-[38px]">
                <div>
                  <div className="text-xl mb-[20px] text-[#000] textSVNGilroy600">
                    Thời gian mở cửa
                  </div>
                  <p className="text-base text-[#000] textSVNGilroy400 mb-[12px]">
                    Hằng ngày
                  </p>
                  <p className="text-base text-[#000] textSVNGilroy400 mb-[12px]">
                    Sáng 6:30 đến tối 21:30
                  </p>
                </div>
                <div>
                  <div className="text-xl mb-[20px] text-[#000] textSVNGilroy600">
                    Liên hệ Nitea
                  </div>
                  <p className="text-base text-[#000] textSVNGilroy400 mb-[12px]">
                    SĐT: 0123456789
                  </p>
                  <p className="text-base text-[#000] textSVNGilroy400 mb-[12px]">
                    niteadanang@gmail.com
                  </p>
                </div>
              </div>
              <div className=" w-[100%]">
                <div className="text-xl mb-[20px] text-[#000] textSVNGilroy600">
                  Nhận thông tin về Nitea
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <div className="flex justify-between bg-headerbackgbtnFooter h-[56px] items-center w-[100%] sm:w-[75%] lg:w-[100%] ">
                    <div className="h-[100%]  w-[100%] text-[#21212180]">
                      <input
                        className="h-[100%] w-[100%] px-[16px]  border-none  outlineinput lg:px-[16px] bg-color "
                        type="text"
                        placeholder="Nhập email của bạn"
                      />
                    </div>
                    <div className="mr-[1px]">
                      <div className="w-[100px] h-[54px] bg-colorBlack flex justify-center items-center">
                        Gửi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-[40px] mb-[11px] text-[16px] text-[#000] textSVNGilroy400 ">
          Copyright © 2023 Nitea. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
