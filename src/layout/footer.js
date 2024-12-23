document.addEventListener('DOMContentLoaded', () => {
    const footer = `
    <footer class="container px-4 mx-auto">
        <div class="mb-10">
            <hr class="border-border" />
            <div class="flex gap-x-7 mt-7 pb-7">
                <div class="max-w-[25%]">
                    <h4
                        class="mb-4 text-xl font-semibold capitalize text-text"
                    >
                        About us
                    </h4>
                    <p class="text-slate-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Possimus non rerum hic tenetur odit minima eos
                        vel, tempore iusto aliquid quidem dolore deleniti
                        voluptates? Omnis, corporis distinctio architecto
                        blanditiis obcaecati excepturi aperiam voluptas at
                        vero beatae ipsam, impedit facilis, earum porro ab?
                        Consequatur possimus quia sint earum maiores autem
                        blanditiis?
                    </p>
                </div>
                <div class="flex flex-1 gap-x-7">
                    <ul class="flex-1">
                        <h4 class="mb-4 text-xl font-semibold capitalize">
                            Information
                        </h4>
                        <li class="mb-2">
                            <a
                                href="#"
                                class="text-sm text-slate-900 hover:text-primary"
                            >
                                About us
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                href="#"
                                class="text-sm text-slate-900 hover:text-primary"
                            >
                                Blogs
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                href="./contact.html"
                                class="text-sm text-slate-900 hover:text-primary"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul class="flex-1">
                        <h4 class="mb-4 text-xl font-semibold capitalize">
                            Policy
                        </h4>
                        <li class="mb-2">
                            <a
                                href="#"
                                class="text-sm text-slate-900 hover:text-primary"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                href="#"
                                class="text-sm text-slate-900 hover:text-primary"
                            >
                                Shipping Policy
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                href="#"
                                class="text-sm text-slate-900 hover:text-primary"
                            >
                                Refund Policy
                            </a>
                        </li>
                    </ul>
                    <div class="w-[45%]">
                        <h4 class="mb-5 text-xl font-semibold">Store</h4>
                        <div class="mb-7">
                            <span>
                                Xóm 3, Quỳnh Ngọc 1, Ea na, Krông Ana, Đăk Lăk
                            </span>
                        </div>
                        <div>
                            <span>
                                Call us: <strong>0835-913-025</strong>
                            </span>
                        </div>
                        <div>
                            <span>Mon - Sun: 8:00am - 9:00pm</span>
                        </div>
                    </div>
                </div>
                <div class="w-[25%]">
                    <h4 class="mb-5 text-xl font-semibold">
                        Subscribe to Our Newsletter!
                    </h4>
                    <div class="relative flex items-center w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autocomplete="off"
                            class="w-full border border-input py-[10px] pl-[10px] pr-10 text-sm outline-none placeholder:text-slate-900 placeholder:text-sm rounded-input"
                        />
                        <button
                            class="absolute right-[10px] text-slate-900 hover:text-primary"
                        >
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-5"
                            >
                                <path
                                    d="M44.001 24.001L4 4L10 24.001L4.001 44.001L44.001 24.001ZM11.788 25.001H37.529L7.246 40.142L11.788 25.001ZM37.528 23.001H11.788L7.245 7.859L37.528 23.001Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-6 border-t border-border">
            <p class="text-sm/6 text-slate-600">
                © 2024 Gear-K. All rights reserved.
            </p>
        </div>
    </footer>
    `;

    const mainContent = document.querySelector('main');
    mainContent.insertAdjacentHTML('afterend', footer);
});
