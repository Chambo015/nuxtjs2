"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";

import graphicAnimation from '../../../public/Block-4-3.json';

export const Section04 = () => {
  function findAngle(sx: number, sy: number, toX: number, toY: number) {
    // make sx and sy at the zero point
    return Math.atan((toY - sy) / (toX - sx));
  }

  function drawLineWithArrow(
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    width: number,
    heigh: number
  ) {
    const headlen = 20;

    const sx = (width / 100) * 70; // точка X к которой изгибается линия
    const sy = (heigh / 100) * 95; // точка Y к которой изгибается линия

    const directionArrow = toX - sx > 0 || toY - sy > 0 ? 1 : -1; // 1 или -1

    // Рисуется Основная линия
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = "white";
    ctx.moveTo(fromX, fromY);
    ctx.quadraticCurveTo(sx, sy, toX, toY); // quadraticCurveTo рисует линию с скруглением
    ctx.stroke();

    // Рисуется стрелка
    ctx.beginPath();
    ctx.setLineDash([]); // Убираем пунктиры для стрелки
    var angle = findAngle(sx, sy, toX, toY);
    ctx.moveTo(toX, toY);
    ctx.lineTo(
      toX - headlen * directionArrow * Math.cos(angle - Math.PI / 6),
      toY - headlen * directionArrow * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(toX, toY);
    ctx.lineTo(
      toX - headlen * directionArrow * Math.cos(angle + Math.PI / 6),
      toY - headlen * directionArrow * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  }

  function draw() {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    // Получаем координаты элементов div
    const div1 = document.getElementById("start1") as HTMLElement;
    const div2 = document.getElementById("end1") as HTMLElement;

    // Вычисляем начальную и конечные координаты линии
    const startX = div1?.offsetLeft + div1?.clientWidth;
    const startY = div1?.offsetTop + div1?.clientHeight / 2;

    const endX = div2?.offsetLeft + div2.clientWidth / 2;
    const endY = div2?.offsetTop + div2.clientHeight + 10;

    // Рисуем линию со стрелкой
    drawLineWithArrow(
      ctx!,
      startX,
      startY,
      endX,
      endY,
      canvas.offsetWidth,
      canvas.offsetHeight
    );
  }

  useEffect(() => {
    draw();
    window.onresize = draw;
  }, []);

  const parrent = useRef(null);
  const lottieRef = useRef<Lottie>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // @ts-ignore
            lottieRef.current?.play(); // Start playing when visible
          } else {
            // @ts-ignore
            lottieRef.current?.stop(); // Stop playing when out of view
          }
        });
      },
      {threshold: 0.5} // 50% видимости
    );

    if (parrent.current) {
      observer.observe(parrent.current);
    }

    return () => {
      if (parrent.current) {
        observer.unobserve(parrent.current);
      }
    };
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: graphicAnimation,
  };

  return (
    <article className="container mx-auto mt-[65px]">
      <div data-aos="fade-up" className="bg-primary md:hidden py-[65px] px-[35px] max-lg:p-5 rounded-[20px] flex size-full relative max-md:flex-col-reverse">
        <div>
          <Heading className="text-white  font-medium max-w-[630px] max-lg:max-w-[382px] max-lg:text-[22px]">
            Начните получать в 2-3 раза больше горячих лидов уже сегодня
          </Heading>
          <p
            className="text-white text-sm leading-[22px] max-w-[530px] mt-[15px] max-lg:max-w-[430px]"
            id="start1"
          >
            Зарегистрируйтесь прямо сейчас и получите 30 идентификаций
            бесплатно, чтобы проверить как это работает
          </p>
          <Button
            variant={"link"}
            className="bg-white text-primary max-w-[315px] w-[315px] mt-[15px] max-sm:w-full"
          >
            Попробовать бесплатно
          </Button>
        </div>
        <div className="flex items-center justify-center grow max-md:h-[120px]">
          <div
            className="flex bg-white py-5 px-[34px] max-lg:px-4 max-lg:py-2 gap-5 max-lg:rounded-xl rounded-[27px] relative bottom-[50px] max-md:bottom-0 -rotate-12"
            id="end1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="49"
              fill="none"
              viewBox="0 0 49 49"
              className="max-lg:size-[23px]"
            >
              <g clipPath="url(#a)">
                <path
                  fill="#4280EF"
                  d="M40.506 14.593h-3.464a10.24 10.24 0 0 0 3.464-7.974 1.993 1.993 0 1 0-3.986 0c0 5.227-4.727 7.037-8.32 7.657a18.602 18.602 0 0 0 2.34-7.657 5.98 5.98 0 0 0-11.96 0 18.6 18.6 0 0 0 2.34 7.657c-3.594-.62-8.32-2.43-8.32-7.657a1.994 1.994 0 0 0-3.987 0 10.24 10.24 0 0 0 3.464 7.974H8.613a7.973 7.973 0 0 0-7.974 7.973v1.993a3.987 3.987 0 0 0 3.987 3.987v9.967a9.978 9.978 0 0 0 9.967 9.967h19.933a9.979 9.979 0 0 0 9.967-9.967v-9.967a3.987 3.987 0 0 0 3.987-3.987v-1.993a7.973 7.973 0 0 0-7.974-7.973ZM24.56 4.626a1.993 1.993 0 0 1 1.994 1.993 15.37 15.37 0 0 1-1.994 6.006 15.368 15.368 0 0 1-1.993-6.006 1.993 1.993 0 0 1 1.993-1.993ZM4.626 22.566a3.987 3.987 0 0 1 3.987-3.987h13.953v5.98H4.626v-1.993Zm3.987 15.947v-9.967h13.953v15.947h-7.973a5.98 5.98 0 0 1-5.98-5.98Zm31.893 0a5.98 5.98 0 0 1-5.98 5.98h-7.973V28.546h13.953v9.967ZM26.553 24.559v-5.98h13.953a3.987 3.987 0 0 1 3.987 3.987v1.993h-17.94Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.64.64h47.84v47.84H.64z" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-center text-xl font-medium max-lg:text-[9px] max-lg:leading-tight">
              <p className="text-primary pb-1 border-b-2 border-primary">
                30 идентификаций в подарок
              </p>
              <p className="text-[#434343]/80 font-normal pt-0.5">
                Получите сразу после регистрации
              </p>
            </div>
          </div>
        </div>
        <canvas id="myCanvas" className="absolute inset-0 size-full max-md:hidden"></canvas>
      </div>
      <div  ref={parrent} className="max-md:hidden">
        {/* @ts-ignore */}
      <Lottie options={defaultOptions} ref={lottieRef}  />
      </div>
    </article>
  );
};
