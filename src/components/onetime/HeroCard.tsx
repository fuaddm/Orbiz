"use client";
import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import FormCard from "@/components/onetime/FormCard";
import ThankYouForOrder from "@/components/onetime/ThankYouForOrder";
import ProductItem from "@/components/onetime/ProductItem";
import chartPic from "~/public/images/home/chart.webp";
import Image from "next/image";
import IconItem from "./IconItem";
import SvgPaper from "@/svg/Paper";
import SvgPayments from "@/svg/Payments";
import SvgShoppingCart from "@/svg/ShoppingCart";
import SvgCoinsHand from "@/svg/CoinsHand";
import PriceCard from "./PriceCard";
import SomeCard from "./SomeCard";

const HeroCard = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", (e) => {
        let x = (window.innerWidth / 2 - e.clientX) / 40;
        let y = (window.innerHeight / 2 - e.clientY) / 40;
        setCords({ x, y });
      });
    }
  }, []);
  return (
    <div className="w-fit max-w-[1200px] rounded-xl bg-white/20 p-1 drop-shadow-[0px_24px_48px_-12px_rgba(13,13,18,0.04)] backdrop-blur-sm md:rounded-3xl md:p-3">
      <div className="h-fit w-full rounded-lg border border-solid border-solid-100 bg-white shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)] md:rounded-2xl">
        <div className="flex w-full gap-0.5 border-b-2 border-solid border-solid-50 p-1.5 px-2 md:gap-1.5 md:p-4">
          <div className="h-1 w-1 rounded-full bg-solid-100 md:h-2.5 md:w-2.5"></div>
          <div className="h-1 w-1 rounded-full bg-solid-100 md:h-2.5 md:w-2.5"></div>
          <div className="h-1 w-1 rounded-full bg-solid-100 md:h-2.5 md:w-2.5"></div>
        </div>
        <div className={`${styles.bgPattern} relative flex h-fit w-full justify-center rounded-b-[16px] px-2 py-4 md:px-4 md:py-8`}>
          <div className={styles.responsivePx}>
            <div className="grid grid-cols-[min-content_1fr_min-content] gap-[2em]">
              <div className="flex flex-col justify-around gap-[1em] ps-[2em]">
                <div className="flex h-full w-full flex-col justify-around">
                  <div
                    style={{ transform: `translate(${cords["x"] / 20}em,${cords["y"] / 20}em)` }}
                    className="grid w-fit grid-cols-[min-content_min-content] gap-[0.8em]"
                  >
                    <IconItem word="Invoice">
                      <SvgPaper className="h-full w-full stroke-yellow-100" />
                    </IconItem>
                    <IconItem word="Payments">
                      <SvgPayments className="h-full w-full" />
                    </IconItem>
                    <div className="translate-x-[0.5em]">
                      <IconItem word="Invoice">
                        <SvgShoppingCart className="h-full w-full" />
                      </IconItem>
                    </div>
                    <div className="translate-x-[0.5em]">
                      <IconItem word="Payments">
                        <SvgCoinsHand className="h-full w-full" />
                      </IconItem>
                    </div>
                  </div>
                  <div
                    style={{ transform: `translate(${cords["x"] / 10 - 5}em,${cords["y"] / 10}em)` }}
                    className="-translate-x-[5em]"
                  >
                    <PriceCard />
                  </div>
                  <div
                    className=""
                    style={{ transform: `translate(${cords["x"] / 24}em,${cords["y"] / 24}em)` }}
                  >
                    <SomeCard />
                  </div>
                </div>
              </div>
              <FormCard />
              <div className="flex flex-col justify-around gap-[1em]">
                <div
                  style={{ transform: `translate(${cords["x"] / 16}em,${cords["y"] / 16}em)` }}
                  className="h-[6.5em] w-[13.5em]"
                >
                  <Image
                    src={chartPic}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
                <div
                  style={{ transform: `translate(${cords["x"] / 24}em,${cords["y"] / 24}em)` }}
                  className=""
                >
                  <ThankYouForOrder />
                </div>
                <div
                  style={{ transform: `translate(calc(${cords["x"] / 8}em + 4em),${cords["y"] / 8}em)` }}
                  className=""
                >
                  <ProductItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
