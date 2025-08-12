import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export default function Navbar() {
  return (
    <NavigationMenu
      orientation="horizontal"
      className="relative z-10 flex items-center w-screen px-20 py-1 justify-between"
    >
      {/* Left side: Logo and links */}
      <div className="flex gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="src/assets/quantusLogo.svg" alt="Quantus Logo" />
        </div>

        {/* Menu */}
        <NavigationMenuList className="flex list-none items-center mt-2 gap-4 p-1">
          {/* Menu Item 1 */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="relative bg-transparent text-lg font-bold text-gray-400 hover:text-white group flex select-none items-center justify-between gap-[2px] px-3 py-2 outline-none border-none focus:outline-none">
              파운드리
              <CaretDownIcon
                className="text-gray-400 hover:text-white relative top-[1px] transition-transform duration-250 ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-auto min-w-[200px] bg-[#1d1e1e] shadow-lg rounded-md">
              {' '}
              <ul className="m-0 list-none p-4 space-y-2">
                <h6 className="text-white text-xs font-semibold">파운드리</h6>
                <ListItem
                  title="주식 퀀트"
                  href="/item1"
                  className="text-white bg-transparent"
                >
                  <p className="text-xs">주식 퀀트 시작하기</p>
                </ListItem>
                <ListItem title="코인 퀀트" href="/item2">
                  <p className="text-xs">코인 퀀트 시작하기</p>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Menu Item 2 */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="bg-transparent text-lg font-bold text-gray-400 hover:text-white group flex select-none items-center justify-between gap-[2px] px-3 py-2 outline-none border-none focus:outline-none">
              고객지원
              <CaretDownIcon
                className="text-gray-400 hover:text-white relative top-[1px] transition-transform duration-250 ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-auto min-w-[220px] bg-[#1d1e1e] shadow-lg rounded-md">
              {' '}
              <ul className="m-0 list-none p-4 space-y-2">
                <h6 className="text-white text-xs font-semibold">고객지원</h6>
                <ListItem
                  title="공지사항 · 이벤트"
                  href="/item3"
                  className="text-white bg-transparent"
                >
                  <p className="text-xs">퀀터스 소식을 확인해보세요</p>
                </ListItem>
                <ListItem title="카카오톡 고객센터" href="/item4">
                  <p className="text-xs">궁금한 사항을 상담해보세요</p>
                </ListItem>
                <ListItem title="퀀터스 가이드" href="/item5">
                  <p className="text-xs">이용 가이드를 확인해보세요</p>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Menu Item 3 (No dropdown) */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-lg font-bold text-gray-400 hover:text-white px-3 py-2 outline-none border-none focus:outline-none">
              사용권 구매
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          {/* VIP Image */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 bg-transparent border-none focus:outline-none">
              <img
                alt="VIP"
                loading="lazy"
                width="54"
                height="34"
                decoding="async"
                className="cursor-pointer"
                src="src/assets/headerVIP.webp"
              />
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>

      {/* Right side: Login button */}
      <NavigationMenuList className="flex flex-row items-center mt-2">
        <NavigationMenuItem>
          <NavigationMenuLink
            className="bg-white px-5 py-2 text-black font-[800] text-sm rounded-md hover:text-black"
            href="/about"
          >
            Login
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={clsx(
            'block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-[#2a2a2a] focus:shadow-[0_0_0_2px] focus:shadow-white',
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-[5px] font-semibold leading-[1.2] text-white">
                {title}
              </div>
              <p className="leading-[1.4] text-mauve11">{children}</p>
            </div>
            <ChevronRightIcon className="ml-2 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  ),
);
