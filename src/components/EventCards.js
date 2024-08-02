import React from "react";
import axios from "axios";
import NoEvent from "../assets/noEvents.svg";

function EventCards() {
  const baseURL =
    "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-wzbdi/endpoint/events";
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="flex justify-center md:flex-row flex-col flex-wrap items-center align-middle m-2">
      {data.length === 0 ? (
        // Image Appears if no Event is available in the database.
        <div className="flex justify-center flex-col -mt-16 sm:mt-0">
          <img src={NoEvent} alt="Checkback soon for more Events :)" />
          <div className=" text-xl mx-5 font-custom text-highlight -mt-6 text-center flex flex-wrap justify-center font-semibold">
            Checkback Later for Upcoming Events!!
          </div>
        </div>
      ) : (
        //  Data is mapped if available
        data.map((data) => (
          <>
            {/* Card */}
            <div
              className="container h-[25rem] lg:w-1/5 md:w-1/3 w-3/4 bg-secondary rounded-2xl border-4 border-primary sm:scale-100 scale-[0.85]  sm:m-10 p-5 flex flex-col justify-center"
              key={data.id}
            >
              {/* image */}
              <a href="https://ibb.co/47f59XX">
                {/* <img src="https://imgur.com/a/CG06vXA" alt="encc" border="0" /> */}
                <img src="/techNiche.png" alt="encc" border="0" />
              </a>
              <blockquote class="imgur-embed-pub" lang="en" data-id="a/CG">
                <a href="imgur.com/a/CG06vXA"></a>
              </blockquote>
              <script
                async
                src="//s.imgur.com/min/embed.js"
                charset="utf-8"
              ></script>
              {data.formLink ? (
                // <a href={data.formLink} target="_blank" rel="noreferrer">
                <a
                  href="https://forms.gle/uXr1FaKLiqtysFPe9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className=" h-16 w-16 rounded-full 
                bg-highlight duration-200 hover:scale-110 hover:my-1 font-semibold mt-2 z-10 relative bottom-28 text-2xl shadow-md lg:left-[13vw] md:left-[22vw] left-[45vw] shadow-background content-center flex justify-center items-center"
                  >
                    <svg
                      width="25px"
                      height="25px"
                      className="fill-secondary"
                      viewBox="0 0 512 512"
                      version="1.1"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <style type="text/css">
                          {" "}
                        </style> <g id="Layer_1"></g>{" "}
                        <g id="Layer_2">
                          {" "}
                          <g>
                            {" "}
                            <path
                              class="st0"
                              d="M132.56,54.6c-19.51,18.23-30.25,43.18-30.25,70.28c0,26.7,10.17,54.87,27.92,77.28 c19.77,24.98,45.62,38.74,72.79,38.74s53.02-13.76,72.79-38.74c17.74-22.42,27.92-50.59,27.92-77.28 c0-27.1-10.74-52.05-30.25-70.28c-18.71-17.48-43.73-27.1-70.45-27.1S151.26,37.13,132.56,54.6z M271.71,124.88 c0,38.06-30.65,84.02-68.7,84.02s-68.7-45.96-68.7-84.02c0-18.13,7.14-34.79,20.1-46.9c12.76-11.92,30.02-18.49,48.6-18.49 s35.84,6.57,48.6,18.49C264.57,90.09,271.71,106.75,271.71,124.88z"
                            ></path>{" "}
                            <path
                              class="st0"
                              d="M373.27,284.57c-11.18,0-22.01,1.8-32.36,5.36c-3.3-3.78-6.89-7.42-10.76-10.88 c-8.47-7.59-18.2-14.29-28.91-19.92c-5.28-2.78-10.93-5.36-16.81-7.67c-4.64-1.82-9.86-1.38-14.12,1.2 c-20.83,12.58-44.1,19.23-67.31,19.23s-46.48-6.65-67.31-19.23c-4.26-2.57-9.48-3.02-14.11-1.2c-5.85,2.29-11.5,4.87-16.8,7.66 c-24.5,12.87-43.83,31.52-54.44,52.51c-10.38,20.53-13.72,45.13-10.19,75.21c3.86,32.96,8.97,61.02,15.61,85.79 c1.88,6.99,8.21,11.86,15.45,11.86H334.8c3.98,0,7.68-1.47,10.52-3.96c9.02,2.63,18.37,3.96,27.95,3.96 c55.12,0,99.96-44.84,99.96-99.96C473.23,329.42,428.39,284.57,373.27,284.57z M83.68,452.5c-4.81-20.35-8.68-43.18-11.75-69.37 c-2.81-23.98-0.59-42.1,6.97-57.06c7.63-15.11,22.11-28.82,40.77-38.63c2.16-1.14,4.39-2.23,6.68-3.27 c23.95,12.92,50.28,19.72,76.64,19.72c26.36,0,52.69-6.79,76.64-19.71c2.3,1.05,4.54,2.14,6.7,3.28 c8.39,4.41,15.95,9.6,22.48,15.46c1.01,0.9,2,1.82,2.96,2.75c-0.18,0.14-0.36,0.29-0.54,0.43c-0.3,0.24-0.6,0.48-0.9,0.72 c-0.55,0.45-1.1,0.9-1.64,1.35c-0.29,0.24-0.57,0.48-0.86,0.73c-0.59,0.51-1.17,1.02-1.75,1.54c-0.21,0.19-0.43,0.38-0.64,0.58 c-0.78,0.72-1.56,1.45-2.32,2.19c-0.11,0.11-0.23,0.23-0.34,0.34c-0.64,0.63-1.27,1.27-1.89,1.92c-0.24,0.25-0.47,0.5-0.71,0.75 c-0.5,0.53-0.99,1.06-1.47,1.6c-0.25,0.28-0.5,0.55-0.74,0.83c-0.48,0.54-0.95,1.09-1.41,1.64c-0.22,0.26-0.44,0.53-0.66,0.79 c-0.55,0.67-1.09,1.35-1.63,2.04c-0.11,0.15-0.23,0.29-0.34,0.44c-0.65,0.84-1.28,1.69-1.9,2.55c-0.15,0.2-0.29,0.41-0.43,0.62 c-0.47,0.66-0.92,1.32-1.37,1.98c-0.2,0.29-0.39,0.58-0.58,0.88c-0.39,0.6-0.78,1.2-1.17,1.81c-0.19,0.31-0.38,0.61-0.57,0.92 c-0.39,0.64-0.77,1.28-1.15,1.93c-0.16,0.27-0.31,0.53-0.47,0.8c-1.04,1.83-2.03,3.7-2.95,5.6c-0.13,0.27-0.26,0.55-0.39,0.83 c-0.32,0.68-0.64,1.37-0.95,2.06c-0.15,0.33-0.29,0.67-0.44,1c-0.29,0.66-0.56,1.32-0.83,1.98c-0.14,0.33-0.27,0.66-0.4,0.99 c-0.29,0.74-0.57,1.48-0.85,2.22c-0.09,0.25-0.19,0.5-0.28,0.76c-0.36,1-0.71,2.01-1.03,3.02c-0.05,0.16-0.1,0.32-0.15,0.48 c-0.27,0.85-0.53,1.7-0.78,2.56c-0.1,0.33-0.19,0.67-0.28,1c-0.19,0.7-0.38,1.4-0.56,2.1c-0.09,0.37-0.19,0.74-0.27,1.11 c-0.17,0.7-0.33,1.41-0.49,2.11c-0.08,0.35-0.15,0.69-0.23,1.04c-0.18,0.85-0.34,1.71-0.5,2.57c-0.04,0.2-0.08,0.39-0.11,0.59 c-0.18,1.06-0.35,2.12-0.5,3.19c-0.04,0.28-0.07,0.57-0.11,0.85c-0.1,0.79-0.2,1.57-0.29,2.36c-0.04,0.38-0.08,0.76-0.11,1.15 c-0.07,0.71-0.13,1.43-0.19,2.14c-0.03,0.39-0.06,0.79-0.08,1.18c-0.05,0.75-0.09,1.5-0.12,2.26c-0.01,0.34-0.03,0.69-0.04,1.03 c-0.04,1.09-0.06,2.19-0.06,3.29c0,19.18,5.46,37.83,15.77,53.91c0.73,1.14,1.49,2.26,2.27,3.37c0.23,0.33,0.48,0.66,0.71,0.99 c0.56,0.79,1.14,1.56,1.73,2.33c0.27,0.35,0.54,0.7,0.81,1.05c0.64,0.82,1.3,1.62,1.96,2.42c0.2,0.24,0.4,0.49,0.61,0.73 c0.87,1.02,1.76,2.03,2.67,3.01c0.04,0.05,0.08,0.1,0.13,0.14H83.68z M373.27,452.5c-10.31,0-20.21-2.25-29.42-6.68 c-23.42-11.26-38.55-35.32-38.55-61.28c0-1.62,0.06-3.23,0.17-4.83c1.67-23.97,15.7-45.14,37.47-56.01 c9.45-4.73,19.66-7.13,30.33-7.13c37.47,0,67.96,30.49,67.96,67.97C441.23,422.01,410.74,452.5,373.27,452.5z"
                            ></path>{" "}
                            <path
                              class="st0"
                              d="M399.2,368.54h-9.93v-9.93c0-8.84-7.16-16-16-16s-16,7.16-16,16v9.93h-9.93c-8.84,0-16,7.16-16,16 s7.16,16,16,16h9.93v9.93c0,8.84,7.16,16,16,16s16-7.16,16-16v-9.93h9.93c8.84,0,16-7.16,16-16S408.03,368.54,399.2,368.54z"
                            ></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </button>
                </a>
              ) : (
                <a href={data.formLink} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className=" opacity-0 h-16 w-16 rounded-full 
                  bg-highlight duration-200 hover:scale-110 hover:my-1 font-semibold mt-2 z-10 relative bottom-28 text-2xl shadow-md lg:left-[13vw] md:left-[22vw] left-[45vw] shadow-background content-center flex justify-center items-center"
                    disabled
                  >
                    <svg
                      width="25px"
                      height="25px"
                      className="fill-secondary"
                      viewBox="0 0 512 512"
                      version="1.1"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <style type="text/css">
                          {" "}
                        </style> <g id="Layer_1"></g>{" "}
                        <g id="Layer_2">
                          {" "}
                          <g>
                            {" "}
                            <path
                              class="st0"
                              d="M132.56,54.6c-19.51,18.23-30.25,43.18-30.25,70.28c0,26.7,10.17,54.87,27.92,77.28 c19.77,24.98,45.62,38.74,72.79,38.74s53.02-13.76,72.79-38.74c17.74-22.42,27.92-50.59,27.92-77.28 c0-27.1-10.74-52.05-30.25-70.28c-18.71-17.48-43.73-27.1-70.45-27.1S151.26,37.13,132.56,54.6z M271.71,124.88 c0,38.06-30.65,84.02-68.7,84.02s-68.7-45.96-68.7-84.02c0-18.13,7.14-34.79,20.1-46.9c12.76-11.92,30.02-18.49,48.6-18.49 s35.84,6.57,48.6,18.49C264.57,90.09,271.71,106.75,271.71,124.88z"
                            ></path>{" "}
                            <path
                              class="st0"
                              d="M373.27,284.57c-11.18,0-22.01,1.8-32.36,5.36c-3.3-3.78-6.89-7.42-10.76-10.88 c-8.47-7.59-18.2-14.29-28.91-19.92c-5.28-2.78-10.93-5.36-16.81-7.67c-4.64-1.82-9.86-1.38-14.12,1.2 c-20.83,12.58-44.1,19.23-67.31,19.23s-46.48-6.65-67.31-19.23c-4.26-2.57-9.48-3.02-14.11-1.2c-5.85,2.29-11.5,4.87-16.8,7.66 c-24.5,12.87-43.83,31.52-54.44,52.51c-10.38,20.53-13.72,45.13-10.19,75.21c3.86,32.96,8.97,61.02,15.61,85.79 c1.88,6.99,8.21,11.86,15.45,11.86H334.8c3.98,0,7.68-1.47,10.52-3.96c9.02,2.63,18.37,3.96,27.95,3.96 c55.12,0,99.96-44.84,99.96-99.96C473.23,329.42,428.39,284.57,373.27,284.57z M83.68,452.5c-4.81-20.35-8.68-43.18-11.75-69.37 c-2.81-23.98-0.59-42.1,6.97-57.06c7.63-15.11,22.11-28.82,40.77-38.63c2.16-1.14,4.39-2.23,6.68-3.27 c23.95,12.92,50.28,19.72,76.64,19.72c26.36,0,52.69-6.79,76.64-19.71c2.3,1.05,4.54,2.14,6.7,3.28 c8.39,4.41,15.95,9.6,22.48,15.46c1.01,0.9,2,1.82,2.96,2.75c-0.18,0.14-0.36,0.29-0.54,0.43c-0.3,0.24-0.6,0.48-0.9,0.72 c-0.55,0.45-1.1,0.9-1.64,1.35c-0.29,0.24-0.57,0.48-0.86,0.73c-0.59,0.51-1.17,1.02-1.75,1.54c-0.21,0.19-0.43,0.38-0.64,0.58 c-0.78,0.72-1.56,1.45-2.32,2.19c-0.11,0.11-0.23,0.23-0.34,0.34c-0.64,0.63-1.27,1.27-1.89,1.92c-0.24,0.25-0.47,0.5-0.71,0.75 c-0.5,0.53-0.99,1.06-1.47,1.6c-0.25,0.28-0.5,0.55-0.74,0.83c-0.48,0.54-0.95,1.09-1.41,1.64c-0.22,0.26-0.44,0.53-0.66,0.79 c-0.55,0.67-1.09,1.35-1.63,2.04c-0.11,0.15-0.23,0.29-0.34,0.44c-0.65,0.84-1.28,1.69-1.9,2.55c-0.15,0.2-0.29,0.41-0.43,0.62 c-0.47,0.66-0.92,1.32-1.37,1.98c-0.2,0.29-0.39,0.58-0.58,0.88c-0.39,0.6-0.78,1.2-1.17,1.81c-0.19,0.31-0.38,0.61-0.57,0.92 c-0.39,0.64-0.77,1.28-1.15,1.93c-0.16,0.27-0.31,0.53-0.47,0.8c-1.04,1.83-2.03,3.7-2.95,5.6c-0.13,0.27-0.26,0.55-0.39,0.83 c-0.32,0.68-0.64,1.37-0.95,2.06c-0.15,0.33-0.29,0.67-0.44,1c-0.29,0.66-0.56,1.32-0.83,1.98c-0.14,0.33-0.27,0.66-0.4,0.99 c-0.29,0.74-0.57,1.48-0.85,2.22c-0.09,0.25-0.19,0.5-0.28,0.76c-0.36,1-0.71,2.01-1.03,3.02c-0.05,0.16-0.1,0.32-0.15,0.48 c-0.27,0.85-0.53,1.7-0.78,2.56c-0.1,0.33-0.19,0.67-0.28,1c-0.19,0.7-0.38,1.4-0.56,2.1c-0.09,0.37-0.19,0.74-0.27,1.11 c-0.17,0.7-0.33,1.41-0.49,2.11c-0.08,0.35-0.15,0.69-0.23,1.04c-0.18,0.85-0.34,1.71-0.5,2.57c-0.04,0.2-0.08,0.39-0.11,0.59 c-0.18,1.06-0.35,2.12-0.5,3.19c-0.04,0.28-0.07,0.57-0.11,0.85c-0.1,0.79-0.2,1.57-0.29,2.36c-0.04,0.38-0.08,0.76-0.11,1.15 c-0.07,0.71-0.13,1.43-0.19,2.14c-0.03,0.39-0.06,0.79-0.08,1.18c-0.05,0.75-0.09,1.5-0.12,2.26c-0.01,0.34-0.03,0.69-0.04,1.03 c-0.04,1.09-0.06,2.19-0.06,3.29c0,19.18,5.46,37.83,15.77,53.91c0.73,1.14,1.49,2.26,2.27,3.37c0.23,0.33,0.48,0.66,0.71,0.99 c0.56,0.79,1.14,1.56,1.73,2.33c0.27,0.35,0.54,0.7,0.81,1.05c0.64,0.82,1.3,1.62,1.96,2.42c0.2,0.24,0.4,0.49,0.61,0.73 c0.87,1.02,1.76,2.03,2.67,3.01c0.04,0.05,0.08,0.1,0.13,0.14H83.68z M373.27,452.5c-10.31,0-20.21-2.25-29.42-6.68 c-23.42-11.26-38.55-35.32-38.55-61.28c0-1.62,0.06-3.23,0.17-4.83c1.67-23.97,15.7-45.14,37.47-56.01 c9.45-4.73,19.66-7.13,30.33-7.13c37.47,0,67.96,30.49,67.96,67.97C441.23,422.01,410.74,452.5,373.27,452.5z"
                            ></path>{" "}
                            <path
                              class="st0"
                              d="M399.2,368.54h-9.93v-9.93c0-8.84-7.16-16-16-16s-16,7.16-16,16v9.93h-9.93c-8.84,0-16,7.16-16,16 s7.16,16,16,16h9.93v9.93c0,8.84,7.16,16,16,16s16-7.16,16-16v-9.93h9.93c8.84,0,16-7.16,16-16S408.03,368.54,399.2,368.54z"
                            ></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </button>
                </a>
              )}
              {/* Event Name   */}
              <div className="mt-3 text-center relative bottom-20  text-2xl font-bold flex-wrap tracking-wide">
                {data.name}
              </div>
              {/* Event Location and Date */}
              <div className="flex justify-around relative bottom-[4.4rem] ">
                {/* <div className="text-lg text-highlight text-center items-center flex">
                  <span className="inline-block ">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M10 8L14 12M14 8L10 12M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                          stroke="#77DDEE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                  <span className="inline-block ">{data.description}</span>
                </div> */}
                <div className="text-lg text-highlight  text-center items-center flex">
                  <span className="inline-block ">
                    <svg
                      width="25px"
                      height="25px"
                      className=" fill-highlight"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <defs> </defs> <title></title>{" "}
                        <g data-name="Layer 8" id="Layer_8">
                          {" "}
                          <path
                            class="cls-1"
                            d="M5,5V27H27V5ZM25,25H7V12H25ZM7,10V7H25v3Z"
                          ></path>{" "}
                          <rect
                            class="cls-1"
                            height="5.29"
                            width="2"
                            x="10.38"
                            y="16.08"
                          ></rect>{" "}
                          <rect
                            class="cls-1"
                            height="5.29"
                            width="2"
                            x="15"
                            y="16.04"
                          ></rect>{" "}
                          <rect
                            class="cls-1"
                            height="5.29"
                            width="2"
                            x="19.63"
                            y="16.04"
                          ></rect>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </span>
                  <span className="inline-block ">{data.date}</span>
                </div>
              </div>
              {/* Insta Link */}
              {data.instaLink ? (
                <div className=" p-2 absolute bottom-1 left-10 text-lg text-highlight flex justify-center hover:underline">
                  <a
                    href="https://www.instagram.com/ieenc_manipal/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center"
                  >
                    <span className=" inline-block">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                            stroke="#77DDEE"
                            stroke-width="2"
                          ></path>{" "}
                          <circle
                            cx="16.5"
                            cy="7.5"
                            r="1.5"
                            fill="#77DDEE"
                          ></circle>{" "}
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="#77DDEE"
                            stroke-width="2"
                          ></circle>{" "}
                        </g>
                      </svg>
                    </span>
                    &nbsp;Event Information
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        ))
      )}
    </div>
  );
}

export default EventCards;
