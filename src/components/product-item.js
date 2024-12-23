const renderProducts = (targetSelector) => {
    const productList = document.querySelector(targetSelector);

    const products = [
        {
            image: 'https://product.hstatic.net/200000722513/product/-g733-lightspeed-wireless-white-66666_142abc4187744aa7b7fe009d7486696c_5a3256dbfe0746d9a5549eb5e11bf773_grande.png',
            hoverImage:
                'https://product.hstatic.net/200000722513/product/ech-g733-lightspeed-wireless-white-11_b76d45f28f904783b17c794a8bbdcdca_e796d4e40313463c8f928e8e524ee92d_grande.jpg',
            name: 'Tai nghe Logitech G733 LIGHTSPEED Wireless White',
            price: '2.350.000₫',
        },
        {
            image: 'https://product.hstatic.net/200000722513/product/m-razer-blackwidow-v3-mini-hyperspeed_7a9ece3408f142cb9d95b100ff845eda_6cac2ff3ce9249119877ff30108c75cc_grande.png',
            hoverImage:
                'https://product.hstatic.net/200000722513/product/ante_89ad1b29ed6243bf84617f179c5517e5_0827098f3679449e9166ee851662672d_fa6b459cc7e14410a12bd4882010dca0_grande.jpg',
            name: 'Bàn phím Razer Blackwidow V3 Mini HyperSpeed Green Switch',
            price: '2.190.000₫',
        },
        {
            image: 'https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/6/6/chuot-khong-day-attack-shark-x11-undefined-NbC.jpg',
            hoverImage:
                'https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/6/6/chuot-khong-day-attack-shark-x11-undefined-KCv.jpg',
            name: 'Chuột không dây Attack Shark X11',
            price: '599.000₫',
        },
        {
            image: 'https://product.hstatic.net/200000722513/product/1603715876104_c8a610885fec4b17bd681411c5b258f5_3290fcefd26b44e5a79c471f94daefe1_grande.jpg',
            hoverImage:
                'https://product.hstatic.net/200000722513/product/1603715877068_7d1b9f3cf52442619dfc30b7dc8763fc_a666c8f084c844f3af1350cf9965789f_grande.jpg',
            name: 'Tai nghe gaming Rapoo VH520C',
            price: '420.000₫',
        },
    ];

    productList.innerHTML = products
        .map(
            (item) => `
        <div class="group">
            <!-- Product Image -->
            <div class="relative overflow-hidden rounded-xl">
                <a href="#" class="relative block">
                    <img
                        src="${item.image}"
                        alt=""
                        class="object-cover w-full h-full"
                    />
                </a>
                <a
                    href="#"
                    class="absolute top-0 left-0 right-0 z-10 invisible transition-[visible_invisible_opacity] duration-100 ease-linear opacity-0 group-hover:visible group-hover:opacity-100"
                >
                    <img
                        src="${item.hoverImage}"
                        alt=""
                        class="object-cover w-full h-full"
                    />
                </a>
                <!-- Add to cart -->
                <div
                    class="absolute top-auto z-50 invisible w-full text-center transition-all duration-300 ease-linear bottom-12 group-hover:visible group-hover:bottom-5"
                >
                    <button
                        class="w-4/5 py-2 text-base btn btn--outline hover:text-white hover:bg-primary"
                    >
                        Add to Cart
                    </button>
                </div>
                <!-- Actions -->
                <div
                    class="absolute z-50 transition-[right] duration-300 ease-linear top-4 -right-12 group-hover:right-4"
                >
                    <div class="flex flex-col gap-y-3">
                        <button
                            class="p-2 rounded-full btn btn--outline hover:text-white hover:bg-primary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-heart size-5"
                            >
                                <path
                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                                />
                            </svg>
                        </button>
                        <button
                            class="p-2 rounded-full btn btn--outline hover:text-white hover:bg-primary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-eye size-5"
                            >
                                <path
                                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                                />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Product Info -->
            <div class="px-[10px] pt-[15px]">
                <h3 class="mb-[10px]">
                    <a
                        href="#"
                        class="block overflow-hidden font-semibold hover:text-primary text-ellipsis text-nowrap text-text"
                    >
                        ${item.name}
                    </a>
                </h3>
            </div>
            <div
                class="flex items-center justify-center font-bold gap-x-3"
            >
                <span class="text-destructive">${item.price}</span>
            </div>
        </div>`,
        )
        .join('');
};

document.addEventListener('DOMContentLoaded', () => {
    renderProducts('#new-arrivals');
    renderProducts('#featured-products');
    renderProducts('#flash-sales');
});
