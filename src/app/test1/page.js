"use client";

import ClientClock from "../components/ClientClock";

export default function Test1() {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <>
      <main>
        <div className='columns-1 sm:columns-2 md:columns-6 lg:columns-6 xl:columns-12 2xl:columns-12 mx-auto bg-slate-300'>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
          <div className='bg-slate-500'>1</div>
        </div>
        {/* <h1>helloworld</h1> */}
        <div className=' bg-primary'>
          <h1 className='text-2xl'>robotici</h1>
          <p className='text-8xl'>
            {month}.{day}.{year}
          </p>
        </div>

        <p className='text-4xl p-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Donec id
          elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus. Nulla vitae elit libero, a pharetra augue.
        </p>
        <p className='px-12'>
          <ClientClock />
          <br />
          By using this website, you agree to our use of cookies. We use cookies
          to provide you with a great experience and to help our website run
          effectively.
        </p>
        <p>
          Wheelhouse uses cookies to provide necessary site functionality and
          improve your experience. By using our website, you agree to our Cookie
          Policy and Terms of Service.
        </p>
        <div>
          <form name='contact' method='POST' data-netlify='true'>
            <input type='hidden' name='form-name' value='contact' />
            <p>
              <label>
                Your Name: <input type='text' name='name' />
              </label>
            </p>
            <p className='p-4'>
              <label>
                Your Email: <input type='email' name='email' />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name='message'></textarea>
              </label>
            </p>
            <p>
              <button className='bg-red' type='submit'>
                Send
              </button>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
