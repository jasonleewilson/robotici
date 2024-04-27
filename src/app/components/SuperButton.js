"use client";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

const SuperButton = ({ text, link }) => {
  return (
    <div>
      <Link
        className='block w-full rounded bg-primary hover:bg-transparent hover:text-primary hover:outline hover:outline-2 hover:outline-primary px-12 py-3 text-sm uppercase font-normal text-white focus:outline-none focus:ring active:bg-primary sm:w-auto'
        href={link}
      >
        {text}{" "}
        <RiArrowRightUpLine
          className='inline'
          aria-label='arrow goto page'
          tabIndex={0}
        />
      </Link>
    </div>
  );
};

export default SuperButton;
