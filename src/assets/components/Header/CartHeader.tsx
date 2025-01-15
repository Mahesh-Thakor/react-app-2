import { useState } from "react";


const CartHeader: React.FC = () => {
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);   
    function toggleCartItems(event:React.MouseEvent){
        event.preventDefault();
        setIsCartVisible(!isCartVisible);
    }

    return (
        <>
            {/* Cart Header Button */}
            <button onClick={toggleCartItems} id="cartHeaderButton" data-dropdown-toggle="CartItemsList" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                <span className="sr-only">
                    Cart
                </span>
                <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
                <svg className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
            </button>
            {/* Cart Header Button */}


            {/* Cart Item Listing */}
            <div id="CartItemsList" className={`fixed right-4 top-20 z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800 transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="grid grid-cols-2">
                    <div>
                    <a href="#" className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iPhone 15</a>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$599</p>
                    </div>

                    <div className="flex items-center justify-end gap-6">
                    <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>

                    <button data-tooltip-target="tooltipRemoveItem1a" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                        <span className="sr-only"> Remove </span>
                        <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div id="tooltipRemoveItem1a" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                        Remove item
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    </div>
                </div>

                <a href="#" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" role="button"> Proceed to Checkout </a>
                </div>
            {/* Cart Item Listing */}
        </>)
}

export default CartHeader;