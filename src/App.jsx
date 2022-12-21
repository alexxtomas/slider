import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './index.css'

// import required modules
import { Navigation } from 'swiper'

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper min-h-screen"
      >
        <SwiperSlide>
          <div className="flex flex-col">
            <h1>Accelerator</h1>
            <img id="logo" src="../public/thunder.png" alt="accelerator_logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-full gap-10 justify-center align-center">
            <h1>Tecnologías</h1>
            <ul>
              <li>Vite</li>
              <li>Vanilla JS</li>
              <li>ReactJS</li>
              <li>NodeJS - scripting avanzado</li>
              <li>Express</li>
              <li>Prompts</li>
              <li>kolorist</li>
              <li>Eslint</li>
              <li>Prettier</li>
              <li>JWT</li>
              <li>React Testing Library</li>
              <li>Vitest</li>
              <li>Cypress</li>
              <li>Styled-Components</li>
              <li>Emotion</li>
              <li>Tailwind</li>
              <li>Chakra UI</li>
              <li>MUI</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <video width="900" height="900" controls>
            <source src="/public/video_ljkKrAHU.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
