import { LoaderFunction, redirect, useLoaderData, useNavigate } from 'remix';
import { getSession } from '~/sessions';

export type LinkItem = {
  href: string;
  icon: Function;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  if (session.has('userId')) {
    return redirect('/todos');
  }

  const links = [
    {
      href: "http://github.com/appwrite/appwrite",
      icon: <img src="/assets/github.svg" className="w-10 h-10 inline" />,
    },
    {
      href: "https://twitter.com/appwrite_io",
      icon: <img src="/assets/twitter.svg" className="w-10 h-10 inline" />,
    },
    {
      href: "http://appwrite.io",
      icon: <img src="/assets/appwrite.svg" className="w-10 h-10 inline" />,
    },
  ];

  return links;
};

export default function Index() {
  const links = useLoaderData<LinkItem[]>();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }

  return (
    <>
      <section className="container h-screen mx-auto flex">
        <div className="flex flex-col mx-auto justify-center p-6 text-center">
          <p className="my-8 text-xl md:text-2xl lg:text-3xl font-medium">
            Introducing
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold">
            toTooooDoooo
          </h1>
          <p className="my-8 text-xl md:text-2xl lg:text-3xl font-medium">
            A Simple To-do App built with <img src="/assets/appwrite.svg" className="w-8 h-8 inline" /> Appwrite and <img src="/assets/remix-light.svg" className="w-12 h-12 inline" /> Remix
          </p>
          <button
            onClick={handleClick}
            className="mx-auto mt-4 py-3 lg:py-5 px-10 lg:px-24 text-lg md:text-2xl font-semibold  rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="absolute bottom-0 right-0 py-3 px-6 mr-8 mb-8 flex">
        <div className="rounded-full mx-4 transition duration-200 ease-in-out transform hover:-translate-y-3 hover:scale-125 hover:shadow-4xl">
          <a href={links[0].href}>
            <svg className={`w-10 h-10 inline`} viewBox="0 0 128 128">
              <g fill="#181616">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="rounded-full mx-4 transition duration-200 ease-in-out transform hover:-translate-y-3 hover:scale-125 hover:shadow-4xl">
          <a href={links[1].href}>
          <svg
            className={`w-10 h-10 inline fill-current text-blue-400`}
            viewBox="0 0 24 24"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          </a>
        </div>
        <div className="rounded-full mx-4 transition duration-200 ease-in-out transform hover:-translate-y-3 hover:scale-125 hover:shadow-4xl">
          <a href={links[2].href}>
            <svg className={`w-10 h-10 inline`} viewBox="0 0 128 128">
              <path
                d="M40.162 23.768C24.121 25.189 10.496 36.065 5.473 51.443 4.028 55.874 3.53 59.05 3.53 64.026s.498 8.151 1.943 12.582c7.701 23.505 34.334 34.595 56.466 23.529L64 99.094l2.085 1.043c18.222 9.123 40.377 3.293 51.703-13.672 2.962-4.407 5.237-10.118 6.208-15.544.356-2.085.474-3.744.474-6.895 0-4.976-.497-8.152-1.943-12.583-7.701-23.505-34.334-34.594-56.442-23.529L64 28.957l-2.061-1.043a41.323 41.323 0 00-14.904-4.17c-3.152-.261-3.792-.261-6.873.024zm10.142 8.601c2.322.45 6.801 2.203 9.525 3.744 3.721 2.085 7.938 5.995 10.521 9.739 1.398 2.037 3.27 5.876 4.336 8.933 1.517 4.265 1.517 14.217 0 18.481-1.848 5.214-4.194 9.266-7.345 12.607-3.744 3.981-7.227 6.326-12.44 8.364-3.317 1.303-5.307 1.73-9.217 1.919-4.787.237-9.1-.331-12.488-1.682-.853-.356-1.73-.663-1.99-.711-.498-.118-4.763-2.488-6.208-3.46-1.54-1.042-5.331-4.762-6.801-6.682-.734-.971-1.35-1.824-1.35-1.895 0-.071-.545-1.067-1.209-2.204-1.161-2.014-1.943-3.649-1.753-3.649.047 0-.213-.758-.592-1.682-1.161-2.772-1.517-5.213-1.517-10.165 0-4.953.356-7.394 1.517-10.166.379-.924.639-1.682.592-1.682-.19 0 .592-1.635 1.753-3.649.664-1.137 1.209-2.132 1.209-2.204 0-.071.616-.924 1.35-1.895 1.47-1.92 5.261-5.64 6.801-6.682 1.422-.972 5.71-3.342 6.208-3.46.26-.047 1.256-.403 2.227-.782 2.156-.853 3.554-1.184 6.043-1.469 2.559-.284 8.577-.094 10.828.332z"
                fill="#f02e65"
              ></path>
              <path
                d="M44.973 49.737c-.048.119-.664 2.536-1.327 5.403-.688 2.867-1.777 7.393-2.393 10.07-1.185 4.905-1.896 8.128-1.896 8.554 0 .118.735.214 1.635.214h1.635l.734-3.271c.427-1.777 1.375-5.852 2.133-9.051.759-3.199 1.682-7.085 2.038-8.649.355-1.564.711-2.985.782-3.151.071-.213-.332-.284-1.564-.284-.924 0-1.73.071-1.777.165zM32.248 59.997l-2.18 2.37.64.758c.355.426 1.327 1.493 2.156 2.37l1.517 1.611H38.694l-2.038-2.204c-1.114-1.184-2.038-2.322-2.038-2.464 0-.166.853-1.232 1.896-2.369 1.042-1.161 1.895-2.157 1.895-2.275 0-.095-.9-.166-1.99-.166h-1.967l-2.204 2.369zM48.835 57.77c0 .071.403.521.9 1.019 1.849 1.848 3.152 3.412 3.081 3.72-.047.166-.948 1.279-2.038 2.44l-1.966 2.157h2.203l2.204-.024 2.013-2.203c1.115-1.232 2.015-2.323 2.015-2.465 0-.118-.948-1.232-2.133-2.487l-2.132-2.299H50.92c-1.161 0-2.085.071-2.085.142z"
                fill="#f02e65"
              ></path>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
