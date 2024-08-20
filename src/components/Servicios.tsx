import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const MarketingIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="text-gray-600 h-6 w-6 group-hover:text-indigo-600"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </svg>
);

const WebIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="text-gray-600 h-6 w-6 group-hover:text-indigo-600"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

const solutions = [
  {
    name: "Impulsá Tu Marca",
    description:
      "Servicios diseñados para impulsar e impactar en el mercado digital.",
    href: "/servicios/impulsa-tu-marca",
    icon: MarketingIcon,
  },
  {
    name: "Desarrollo Web",
    description: "Servicio de creación de sitios web de alta calidad",
    href: "/servicios/desarrollo-web",
    icon: WebIcon,
  },
];

export default function Servicios() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-base font-semibold leading-6 text-black hover:text-neutral-800">
        <span>Servicios</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
