document.addEventListener('DOMContentLoaded', () => {
    const header = `
<header class="py-3 transition-all duration-500 ease-in-out bg-white mb-7">
    <div class="container px-4 mx-auto">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <a
                href="./index.html"
                class="inline-block select-none h-[50px] w-[250px] outline-none"
            >
                <img
                    src="./assets/images/Logo.png"
                    alt="Logo"
                    class="object-cover w-full h-full"
                />
            </a>
            <!-- Menu list -->
            <nav>
                <ul class="flex items-center uppercase gap-x-4">
                    <!-- None sub menu -->
                    <li class="relative">
                        <a
                            href="./index.html"
                            class="inline-block px-4 py-3 text-xl font-semibold hover:text-primary"
                            >Home</a
                        >
                    </li>
                    <!-- Has sub menu -->
                    <li class="relative group">
                        <a
                            href="./all-product.html"
                            class="inline-block px-4 py-3 text-xl font-semibold hover:text-primary"
                        >
                            Products
                        </a>
                        <ul
                            class="invisible absolute top-[170%] z-10 w-full min-w-[175px] rounded-card bg-white py-4 font-semibold opacity-0 shadow transition-[opacity_visibility_top] delay-100 duration-200 ease-in group-hover:visible group-hover:top-full group-hover:opacity-100 capitalize"
                        >
                            <li
                                class="relative py-1 px-7 hover:text-primary"
                            >
                                <a href="#">Keyboard</a>
                            </li>
                            <li
                                class="relative py-1 px-7 hover:text-primary"
                            >
                                <a href="#">Mouse</a>
                            </li>
                            <li
                                class="relative py-1 px-7 hover:text-primary"
                            >
                                <a href="#">Headphone</a>
                            </li>
                            <li
                                class="relative py-1 px-7 hover:text-primary"
                            >
                                <a href="#">Smart watch</a>
                            </li>
                        </ul>
                    </li>
                    <li class="relative group">
                        <a
                            href="#"
                            class="inline-block px-4 py-3 text-xl font-semibold hover:text-primary"
                        >
                            Pages
                        </a>
                        <ul
                            class="invisible absolute top-[170%] z-10 w-full min-w-[175px] rounded-card bg-white py-4 font-semibold opacity-0 shadow transition-[opacity_visibility_top] delay-100 duration-200 ease-in group-hover:visible group-hover:top-full group-hover:opacity-100 capitalize"
                        >
                            <li
                                class="relative py-1 px-7 hover:text-primary"
                            >
                                <a href="#">About us</a>
                            </li>
                            <li
                                class="relative py-1 px-7 hover:text-primary"
                            >
                                <a href="./contact.html">Contact</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- Action button -->
            <div class="flex items-center gap-x-7">
                <button class="p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#000000"
                        viewBox="0 0 256 256"
                    >
                        <path
                            d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
                        ></path>
                    </svg>
                </button>
                <button class="p-2 relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#000000"
                        viewBox="0 0 256 256"
                    >
                        <path
                            d="M233.21,56.31A12,12,0,0,0,224,52H66L60.53,21.85A12,12,0,0,0,48.73,12H24a12,12,0,0,0,0,24H38.71L63.62,173a28,28,0,0,0,4.07,10.21A32,32,0,1,0,123,196h34a32,32,0,1,0,31-24H91.17a4,4,0,0,1-3.93-3.28L84.92,156H196.1a28,28,0,0,0,27.55-23l12.16-66.86A12,12,0,0,0,233.21,56.31ZM100,204a8,8,0,1,1-8-8A8,8,0,0,1,100,204Zm88,8a8,8,0,1,1,8-8A8,8,0,0,1,188,212Zm12-83.28A4,4,0,0,1,196.1,132H80.56L70.38,76H209.62Z"
                        ></path>
                    </svg>
                    <span class="absolute font-semibold -top-1 right-0">0</span>
                </button>
                <button class="relative group btn btn--primary space-x-2 px-4 py-2">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-[22px]"
                    >
                        <defs></defs>
                        <path
                            d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 0 1 520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 0 1 270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 0 1 0 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"
                        ></path>
                    </svg>
                    <span>Sign in</span>
                </button>
            </div>
        </div>
    </div>
</header>
`;

    const mainContent = document.querySelector('main');
    mainContent.insertAdjacentHTML('beforebegin', header);
});
