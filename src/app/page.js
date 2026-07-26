import Image from "next/image";
import ClientClock from "./components/ClientClock";
import SuperButton from "./components/SuperButton";

export const runtime = "edge";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <main className='grid h-screen place-items-center bg-gradient-to-tr'>
      <header className='text-center'>
        <Image
          src='/assets/logo.webp'
          className='logo w-[190px] mx-auto h-auto'
          alt='logo'
          width='240'
          height='92'
          sizes='100vw'
        />
        <h1 className="text-4xl font-thin">
          ROBOTICI
        </h1>
        
        <a href='mailto:info@robotici.com' rel='noopener noreferrer'>
          info@robotici.com
        </a>
        <br />
        <ClientClock />
         {/* <SuperButton className='bg-black outline-dotted outline-lime-300' text='Go to test1' link='/test1' /> */}
      </header>

      <div className="flex flex-col text-center">
        <div>Copyright ROBOTICI. All Rights Reserved. 1999-{year}.</div>
        <div>Built by{" "}<a href='https://jasonleewilson.com' alt='jasonleewilson.com'>
          jasonleewilson.com
        </a></div>
      </div>
    </main>
  );
}
