// components/Common/Sidebar.tsx

import { useContext, useState } from 'react';
import Link from 'next/link';

import { TokenContext } from '@/src/contexts/TokenContext';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tokenContext = useContext(TokenContext);
  const { token } = tokenContext || {};

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  if (!token) {
    return '';
  }

  return (
    <div>
      {/* 头部的汉堡菜单按钮 */}
      <button className="ml-4 mt-2 focus:outline-none" onClick={toggleSidebar}>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </button>

      {/* 覆盖层 */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSidebar}></div>}

      {/* 左侧导航菜单 */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="mt-8">
          <li className="p-4 hover:bg-gray-700">
            <Link href={`/${token.symbol}/acting`}>
              <span>社区首页</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href={`/${token.symbol}/gov`}>
              <span>治理首页</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href={`/${token.symbol}/my`}>
              <span>我的首页</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href={`/tokens`}>
              <span>所有代币</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href={`/${token.symbol}/launch`}>
              <span>发射平台</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href={`/${token.symbol}/dex/swap`}>
              <span>交易代币</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href={`/${token.symbol}/launch/deposit`}>
              <span>兑换{process.env.NEXT_PUBLIC_FIRST_PARENT_TOKEN_SYMBOL}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
