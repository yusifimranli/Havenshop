import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router';
import CartModal from './pages/CartModal';
import CartBasket from './pages/CartBasket';
import { BASKET } from './Context/BasketContext';
import { DATA } from './Context/DataContext';
function Header() {
  const [openmenu,setOpenmenu] = useState(false)
  const [opencart,setOpencart] = useState(false)
  const {basket} = useContext(BASKET)
  const [opensearch,setOpensearch] = useState(false)
  const { search, setSearch } = useContext(DATA)
  return (
    <>
    <header className="sticky top-0 z-[998] bg-black">
      <div className="container flex items-center justify-between p-7">
          <div className='flex items-center gap-20'>
            <Link  to='/'>
              <svg className='w-25 text-white' viewBox="0 0 458 83" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M72.2 0H65.3L54.5 25V38.5H41.8V25H33.9V58.4L27.4 73.3L9.1 41.7L28.6 7.9H53.2L56.6 0H24.1L0 41.7L24.1 83.4H31L41.8 58.4V44.9H54.5V58.4H62.4V25L68.9 10.1L87.1 41.7L67.6 75.5H43.1L39.7 83.4H72.2L96.3 41.7L72.2 0Z" fill="currentColor"></path><path d="M165.5 8.29999V35.3H140.2V8.29999H124.6V75.1H140.2V48.1H165.5V75.1H181.3V8.29999H165.5Z" fill="currentColor"></path><path d="M308.9 8.29999L291.2 56.2L273.6 8.29999H258.1L282.7 75.1H284.3H298.2H300.1L324.8 8.29999H308.9Z" fill="currentColor"></path><path d="M458.2 8.29999H442.4V50.6L417 8.29999H401.5V75.1H417V34.2L441.5 75.1H442.4H458.2V8.29999Z" fill="currentColor"></path><path d="M336.3 8.29999V75.1H386.4V61.7H352.2V48.1H381V35.3H352.2V21.7H386.4V8.29999H336.3Z" fill="currentColor"></path><path d="M233.9 8.29999H218.4L193.8 75H209.3L214.5 60.9H239.4L244.6 75H260.4L235.7 8.29999H233.9V8.29999ZM234.7 48.1H219.3L227 27.2L234.7 48.1Z" fill="currentColor"></path></g><defs><clipPath id="clip0"><rect width="458" height="83" fill="currentColor"></rect></clipPath></defs></svg>
            </Link>
            <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-[#737373]">
            <li>
              <Link to="/arrivals" className="hover:text-white duration-300">
                NEW ARRIVALS
              </Link>
            </li>
            <li>
              <Link to="/haven" className="hover:text-white duration-300">
                HAVEN
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-white duration-300">
                FEATURES
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-white duration-300">
                NEWS
              </Link>
            </li>
          </ul>
          </div>
          <div className='text-[#737373] flex items-center gap-6 text-xl px-4'>
            <FaSearch onClick={()=>setOpensearch(true)} className="hover:text-white duration-300"/>
            <div className='relative'>
            <FaShoppingBag onClick={()=>setOpencart(true)} className="hover:text-white duration-300"/>
              {basket.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {basket.length}
                </span>
              )}
            </div>
            <FaBars onClick={()=>setOpenmenu(!openmenu)} className='sm:hidden block'/>
          </div>
          <ul
              className={`fixed z-[999] w-70 h-screen bg-white right-0 top-0
              flex flex-col py-20 px-5 sm:hidden gap-6 font-bold text-slate-900
              transition-transform duration-300
              ${openmenu ? 'translate-x-0' : 'translate-x-full'}`}
            >
            <FaXmark onClick={()=>setOpenmenu(!openmenu)} className='text-slate-900 text-2xl absolute top-7 right-7'/>
            <li>
              <Link to="/arrivals" className="hover:text-white duration-300">
                NEW ARRIVALS
              </Link>
            </li>
            <li>
              <Link to="/haven" className="hover:text-white duration-300">
                HAVEN
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-white duration-300">
                FEATURES
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-white duration-300">
                NEWS
              </Link>
            </li>
          </ul>
      </div>
       <CartModal basket={basket} opencart={opencart} setOpencart={setOpencart}/>

       {opensearch && (
        <div className="fixed top-3 right-19 w-72 py-2 border border-[#737373] bg-black z-[1000] flex items-center px-2">
          <input
            autoFocus
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="bg-transparent outline-none text-white w-full text-base"
          />

          <FaXmark
            onClick={() => setOpensearch(false)}
            className="text-[#737373] text-xl cursor-pointer hover:text-white duration-300"
          />
        </div>
      )}
    </header>
    </>
  )
}

export default Header
