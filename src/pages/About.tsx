export default function About() {
  return (
    <div className="flex sm:flex-row flex-col gap-4 space-x-5">
      <p className="text-xl fontsemi text-zinc-800 max-w-xl leading-relaxed text-justify">
        Hey there! I'm Mark Justin Dinglasan, and I love building things for the
        web. As a Full-Stack Developer, I get to work on everything from
        crafting smooth user interfaces to setting up robust backend systems.
        What really gets me excited is seeing how different pieces of technology
        can work together to solve real problems. Whether it's cooking up new
        features or optimizing existing code, I'm always up for the challenge.
        These days, I'm diving deep into modern web frameworks and constantly
        picking up new tricks to make better, faster websites.
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
