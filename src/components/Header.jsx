import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { Link } from 'react-router';
import CartModal from './pages/CartModal';
import { BASKET } from './Context/BasketContext';
import { DATA } from './Context/DataContext';
function Header() {
  const [openmenu,setOpenmenu] = useState(false)
  const [opencart,setOpencart] = useState(false)
  const {basket} = useContext(BASKET)
  const [opensearch,setOpensearch] = useState(false)
  const { arrival, haven, search, setSearch } = useContext(DATA)
  const allProducts = [
  ...arrival.map(item => ({ ...item, type: "arrival" })),
  ...haven.map(item => ({ ...item, type: "haven" }))
  ]

  const searchResults = allProducts.filter((item) =>
  item.title?.toLowerCase().includes(search.toLowerCase()) ||
  item.brand?.toLowerCase().includes(search.toLowerCase())
)
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
              <NavLink to="/arrivals" className={({ isActive }) =>
                isActive ? "text-white" : "text-[#737373] hover:text-white"}>
                NEW ARRIVALS
              </NavLink>
            </li>
            <li>
              <NavLink to="/haven" className={({ isActive }) =>
                isActive ? "text-white" : "text-[#737373] hover:text-white"}>
                HAVEN
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" className={({ isActive }) =>
                isActive ? "text-white" : "text-[#737373] hover:text-white"}>
                FEATURES
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={({ isActive }) =>
                isActive ? "text-white" : "text-[#737373] hover:text-white"}>
                NEWS
              </NavLink>
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
              <Link to="/arrivals" onClick={() => setMenuOpen(false)} className="hover:text-white duration-300">
                NEW ARRIVALS
              </Link>
            </li>
            <li>
              <Link to="/haven" onClick={() => setMenuOpen(false)} className="hover:text-white duration-300">
                HAVEN
              </Link>
            </li>
            <li>
              <Link to="/features" onClick={() => setMenuOpen(false)} className="hover:text-white duration-300">
                FEATURES
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={() => setMenuOpen(false)} className="hover:text-white duration-300">
                NEWS
              </Link>
            </li>
          </ul>
      </div>
       <CartModal basket={basket} opencart={opencart} setOpencart={setOpencart}/>

       {opensearch && (
  <div className="fixed top-3 right-4 sm:right-10 w-[calc(100%-2rem)] sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-[1000] overflow-hidden">

    <div className="flex items-center px-4 py-3 border-b border-gray-200">

      <FaSearch className="text-gray-400 text-sm mr-3" />

      <input
        autoFocus
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none text-black w-full text-sm placeholder:text-gray-400"
      />

      <FaXmark
        onClick={() => {
          setOpensearch(false)
          setSearch("")
        }}
        className="text-gray-400 text-lg cursor-pointer hover:text-black duration-300"
      />

    </div>

    {search && (
      <div className="max-h-100 overflow-y-auto">

        {searchResults.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-gray-500 text-sm">
              No products found
            </p>
          </div>
        ) : (
          <div className="p-2">

            {searchResults.map((item) => (
              <Link
                key={`${item.brand}-${item.id}`}
                to={
                  item.brand === "haven"
                    ? `/haven/${item.id}`
                    : `/arrivals/${item.id}`
                }
                onClick={() => {
                  setOpensearch(false)
                  setSearch("")
                }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 duration-200"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-16 object-cover rounded-md"
                />

                <div className="flex-1">

                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                    {item.brand}
                  </p>

                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {item.title}
                  </p>

                  <p className="text-sm font-semibold text-black mt-1">
                    ${item.price}
                  </p>

                </div>

              </Link>
            ))}

          </div>
        )}

      </div>
    )}

    {!search && (
      <div className="px-5 py-6">
        <p className="text-xs text-gray-400">
          Search for products from HAVEN and New Arrivals
        </p>
      </div>
    )}

  </div>
)}
    </header>
    </>
  )
}

export default Header
