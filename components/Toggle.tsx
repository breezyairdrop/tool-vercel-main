import { Switch } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import '../style/textAnimation.css'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({ isPro, setIsPro, colorTheme }: any) {

  const [checkTheme, setCheckTheme] = useState('light');

  useEffect(() => {
    // let whatTheme = localStorage.getItem("theme") || "";  
    setCheckTheme(colorTheme);
  }, []);

  
  return (
    <Switch.Group as="div" className="flex items-center">
      <div  className="tooltipp mr-1">
        <Image
          // src="/info.png"
          src={checkTheme == "dark" ? "/info-white.png" : "/info.png"}
          width={20}
          height={20}
          alt="info logo"
          className={`${!isPro && "opacity-50"}`}
        />
        <span className="tooltiptext">Limited Query information</span>
      </div>
      <Switch.Label
        as="span"
        className="mr-3 text-sm flex justify-center gap-2 items-center"
      >
        <span
          className={`font-medium ${
            !isPro ? "text-gray-400" : checkTheme == "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Limited
        </span>{" "}
      </Switch.Label>
      <Switch
        checked={isPro}
        onChange={setIsPro}
        className={classNames(
          isPro ? "bg-black" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isPro ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <Switch.Label
        as="span"
        className="ml-3 text-sm flex justify-center gap-2 items-center"
      >
        <span
          className={`font-medium ${
            isPro ? "text-gray-400" : checkTheme == "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Pro (Aka K9)
        </span>{" "}
      </Switch.Label>
      <div className="tooltipp ml-1">
        <Image
          src={checkTheme == "dark" ? "/info-white.png" : "/info.png"}
          width={20}
          height={20}
          alt="info logo"
          className={`${isPro && "opacity-50"}`}
        />
        <span className="tooltiptext">Do more with Our pro stuff</span>
      </div>
    </Switch.Group>
  );
}
