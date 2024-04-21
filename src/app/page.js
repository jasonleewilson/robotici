import Image from "next/image";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <main className='grid h-screen place-items-center'>
      <header className='text-center'>
        <Image
          src='/assets/logo.png'
          className='logo'
          alt='logo'
          width={234}
          height={90}
        />
        <h5>
          Copyright ROBOTICI<sup>&copy;</sup> 1999 - {year}.
        </h5>
        All Rights Reserved.
        <a href='mailto:info@robotici.com' rel='noopener noreferrer'>
          info@robotici.com
        </a>
      </header>
      <div>
        Built by{" "}
        <a href='https://jasonleewilson.com' alt='jasonleewilson.com'>
          jasonleewilson.com
        </a>{" "}
      </div>
    </main>
  );
}
