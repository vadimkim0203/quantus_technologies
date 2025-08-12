export default function Footer() {
  return (
    <div className="flex flex-col gap-[50px] bg-black h-[390px] w-full px-20 py-12">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-[25px]">
          <div>
            <img
              src="src/assets/quantusLogo.svg"
              alt="Quantus logo"
              className="brightness-80 opacity-50"
            />
          </div>
          {/* Business info container */}
          <div className="flex flex-col text-[#8f8f8f] text-xs font-semibold gap-[12px]">
            <div>
              <p>Company STOA CORP. | Representative Lee Jae-min</p>
            </div>
            <div>
              <p>
                서울특별시 강남구 선릉로 93길 54, 6층 6062호 (역삼동, 일환빌딩)
              </p>
              <p>
                Business Number 245-88-02569 | 통신판매신고
                제2024-서울강남-05978호
              </p>{' '}
              <p>
                사업 제안/제휴 문의 : info@quantus.kr | 070-4193-5192 (퀀터스
                이용관련 문의는 카카오톡 채널을 통해 부탁드립니다.)
              </p>
            </div>
          </div>
          {/* Social Networks container */}
          <div className="flex flex-row gap-2">
            <img
              src="src/assets/footerInstagram.webp"
              alt=""
              width="36"
              height="36"
              className="object-contain"
            />
            <img
              src="src/assets/footerYoutube.webp"
              alt=""
              width="36"
              height="36"
              className="object-contain"
            />
            <img
              src="src/assets/footerThread.svg"
              alt=""
              width="36"
              height="36"
              className="object-contain"
            />
          </div>
        </div>
        <div className="text-[#8f8f8f]">
          <div>
            <ul>
              <li>
                <a href="">
                  <span>카카오톡 고객센터</span>
                  <img src="src/assets/link.svg" alt="" />
                </a>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[#8f8f8f] text-xs font-semibold gap-[12px]">
        <p>© 2023 Quantus Technologies. All rights reserved.</p>
        <p>
          퀀터스에서 제공하는 정보는 단순 투자 참고 사항이며, 제공된 정보에 의한
          투자 결과에 법적인 책임을 지지 않습니다.
        </p>
      </div>
    </div>
  );
}
