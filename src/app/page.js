import Image from "next/image";
import ClientClock from "./components/ClientClock";
// import SuperButton from "./components/SuperButton";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <main className='grid h-screen place-items-center'>
      <header className='text-center'>
        <Image
          src='/assets/logo.png'
          className='logo w-[240px] mx-auto h-auto'
          alt='logo'
          width='0'
          height='0'
          sizes='100vw'
        />
        <h5>
          Copyright ROBOTICI<sup>&copy;</sup> 1999 - {year}.
        </h5>
        All Rights Reserved.
        <a href='mailto:info@robotici.com' rel='noopener noreferrer'>
          info@robotici.com
        </a>
        <br />
        <ClientClock />
      </header>

      <div>
        {/* <SuperButton className='w-8' text='Go to test1' link='/test1' /> */}
        Built by{" "}
        <a href='https://jasonleewilson.com' alt='jasonleewilson.com'>
          jasonleewilson.com
        </a>{" "}
      </div>
    </main>
  );
}
