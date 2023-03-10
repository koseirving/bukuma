import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <div className='bg-gray-900'>
        <div className='container mx-auto flex max-w-4xl items-center px-2 py-7'>
          <div className='mx-auto flex w-full flex-wrap items-center'>
            <div className='flex w-full justify-center font-extrabold text-white lg:w-1/2 lg:justify-start'>
              <Link href='/' legacyBehavior>
                <a className='text-2xl text-gray-900 no-underline hover:text-gray-900 hover:no-underline'>
                  ๐ &nbsp; <span className=' text-gray-200'>BUKUMA</span>
                </a>
              </Link>
            </div>
            <div className='flex w-full content-center justify-between pt-2 lg:w-1/2 lg:justify-end lg:pt-0'>
              <ul className='list-reset flex flex-1 items-center justify-center lg:flex-none'>
                <li className='py-1 px-4 text-white no-underline'>
                  <Link href='/articles' legacyBehavior>
                    <a>Articles</a>
                  </Link>
                </li>
                {status !== 'loading' && session && (
                  // status ใ 'loading' ใงใชใใใคใพใ่ช่จผๆๅ ฑใฎๅๅพใๅฎไบใใฆใใใ
                  // ใใคใ่ช่จผใใใฆใใๅ ดๅใซใไธ่จใ่กจ็คบใใใพใ
                  <>
                    <li className='py-1 px-4 text-white no-underline'>
                      <Link href='/mypage' legacyBehavior>
                        <a>MyPage</a>
                      </Link>
                    </li>
                    <li className='py-1 px-4 text-white no-underline'>
                      <button onClick={() => signOut()}>
                        <a>Log out</a>
                      </button>
                    </li>
                  </>
                )}
                {status !== 'loading' && !session && (
                  // status ใ 'loading' ใงใชใใใคใพใ่ช่จผๆๅ ฑใฎๅๅพใๅฎไบใใฆใใใ
                  // ใใคใ่ช่จผใใใฆใใชใๅ ดๅใซใไธ่จใ่กจ็คบใใใพใ
                  <li className='py-1 px-4 text-white no-underline'>
                    <button onClick={() => signIn()}>
                      <a>Log in</a>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
