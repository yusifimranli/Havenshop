    import React, { useContext, useState } from 'react'
    import { DATA } from '../Context/DataContext'
    import { Link, useParams } from 'react-router'
    import { BASKET } from '../Context/BasketContext'

    function DetailHaven() {
        const {haven} = useContext(DATA)
        const {addBasket} = useContext(BASKET)
        const {id}  = useParams()
        const item = haven.find((product) => product.id.toString() === id)

        const [selectedsize, setSelectedsize] = useState(item?.sizes?.[0] || '')

        if (!item) {
            return (
                <p className="p-10 text-center text-white bg-black">
                    Product not found
                </p>
            )
        }
        
          
    return (  
    <section
  className="px-4 md:px-8 mt-6"
  aria-label="Product detail"
>
  <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8 mb-4">

    <div className="w-full lg:sticky top-0 lg:col-span-3">
      <div className="grid grid-cols-2 gap-0.5">

        <div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full aspect-[200/243] object-top object-cover"
          />
        </div>

        <div>
          <img
            src={item.hoverImage}
            alt={item.title}
            className="w-full aspect-[200/243] object-top object-cover"
          />
        </div>

        <div>
          <img
            src={item.leftImage}
            alt={item.title}
            className="w-full aspect-[200/243] object-top object-cover"
          />
        </div>

        <div>
          <img
            src={item.rightImage}
            alt={item.title}
            className="w-full aspect-[200/243] object-top object-cover"
          />
        </div>

      </div>
    </div>

    <div
      className="w-full lg:col-span-2"
      id="product-main"
    >

      <div>
        <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
          {item.brand}
        </h1>

        <p className="text-slate-600 mt-2 text-sm">
          {item.title}
        </p>

        <div className="flex items-center flex-wrap gap-4 mt-6">
          <p className="text-slate-900 font-bold text-2xl md:text-2xl">
            <span className="sr-only">Sale price:</span>
            ${item.price}
          </p>
        </div>
      </div>

      <hr className="my-6 border-slate-300" />
      {item.colorVariants && (
      <fieldset>
        <legend className="text-lg font-semibold text-slate-900">
          Colors
        </legend>

        <div className="flex flex-wrap gap-3 mt-4">
          {item.colorVariants.map((color) => (
            <Link
              key={color.id}
              to={`/haven/${color.id}`}
              className={`w-20 h-20 border-2 ${
                item.id === color.id
                  ? "border-black"
                  : "border-slate-300"
              }`}
            >
              <img
                src={color.image}
                alt="Product color"
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </fieldset>
)}

      <hr className="my-6 border-slate-300" />

      <div>
        <fieldset>
          <legend className="text-lg font-semibold text-slate-900">
            Sizes
          </legend>

          <div className="flex flex-wrap gap-4 mt-4">
            {item.sizes.map((size, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedsize(size)}
                className={`w-12 h-10 text-sm rounded-md cursor-pointer flex items-center justify-center border ${
                  selectedsize === size
                    ? "bg-black text-white border-black"
                    : "text-slate-900 border-slate-300 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </fieldset>

        <hr className="my-6 border-slate-300" />

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => addBasket(item, 1, selectedsize)}
            className="w-full bg-black text-white p-4 px-5 text-xs"
          >
            ADD TO CART
          </button>
        </div>
      </div>

    </div>

  </div>
</section>
    )
    }

    export default DetailHaven
