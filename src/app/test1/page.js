"use client";
import Image from "next/image";

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
              <button className='btn bg-red' type='submit'>
                Send
              </button>
            </p>
          </form>
        </div>

        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image
              width={300}
              height={200}
              src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5'>
          <div className='xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5'>
            <div className='sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex '>
              {/* <img src='usericon.png' alt='login' className='h-[500px]' /> */}
            </div>
            <div className='mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0'>
              <h1 className='text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]'>
                Create Account
              </h1>
              <div className='w-full mt-5 sm:mt-8'>
                <div className='mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5'>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <input
                      type='text'
                      placeholder='Enter Your First Name'
                      className='input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70'
                    />
                    <input
                      type='text'
                      placeholder='Enter Your Last Name'
                      className='input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70'
                    />
                  </div>
                  <input
                    type='text'
                    placeholder='Enter Your Email'
                    className='input input-bordered input-primary w-full text-black placeholder:text-black/70'
                  />
                  <input
                    type='text'
                    placeholder='Enter Your Phone No'
                    className='input input-bordered input-primary w-full text-black placeholder:text-black/70'
                  />
                  <input
                    type='Password'
                    placeholder='Enter Your Password'
                    className='input input-bordered input-primary w-full text-black placeholder:text-black/70'
                  />
                  <div className='flex items-center gap-1.5  justify-start pl-2'>
                    <div className='form-control'>
                      <label className='label cursor-pointer'>
                        <input
                          type='checkbox'
                          className='checkbox-xs checkbox-primary'
                        />
                      </label>
                    </div>
                    <h3 className='flex items-center whitespace-nowrap text-xs text-black'>
                      I agree to the
                      <span className='text-[#4A07DA]'>&nbsp;Terms</span>
                      &nbsp;and
                      <span className='text-[#4A07DA]'>
                        &nbsp;Privacy Policy
                      </span>
                      .
                    </h3>
                  </div>
                  <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center'>
                    <button className='btn btn-active btn-primary btn-block max-w-[200px]'>
                      Sign Up
                    </button>
                    <button className='btn btn-outline btn-primary btn-block max-w-[200px]'>
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
