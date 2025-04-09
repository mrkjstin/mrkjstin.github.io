export default function About() {
  return (
    <div className="flex sm:flex-row flex-col gap-4 px-2 mt-2">
      <p className="text-lg sm:text-xl text-zinc-800 dark:text-zinc-400 max-w-2xl leading-relaxed text-justify bg-zinc-100 dark:bg-zinc-800/40 px-6 py-4 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm transition-all duration-300">
        Hey there! I'm{" "}
        <span className="font-semibold text-primary">
          Mark Justin Dinglasan
        </span>
        , and I love building things for the web. As a
        <span className="font-medium text-zinc-900 dark:text-white">
          {" "}
          Full-Stack Developer
        </span>
        , I get to work on everything from crafting smooth user interfaces to
        setting up robust backend systems. What really gets me excited is seeing
        how different pieces of technology can work together to solve real
        problems. Whether it's cooking up new features or optimizing existing
        code, I'm always up for the challenge. These days, I'm diving deep into
        modern web frameworks and constantly picking up new tricks to make
        better, faster websites.
      </p>

      <div className="flex gap-4 mt-4 items-center justify-center w-full">
        <img
          src="https://raw.githubusercontent.com/laravel/art/master/laravel-logo.png"
          alt="Laravel"
          className="w-12 h-12 animate-bounce drop-shadow-2xl"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-12 h-12 animate-bounce drop-shadow-2xl [animation-delay:200ms]"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          alt="Vue"
          className="w-12 h-12 animate-bounce drop-shadow-2xl [animation-delay:400ms]"
        />
        <img
          src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
          alt="Tailwind"
          className="w-12 h-12 animate-bounce drop-shadow-2xl [animation-delay:600ms]"
        />
      </div>
    </div>
  )
}
