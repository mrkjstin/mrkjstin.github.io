const TechStack = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 p-2 ">
      <div className="flex flex-col p-5 rounded-md drop-shadow-xl bg-zinc-100 dark:bg-zinc-800 space-y-2 gap-2 hover:scale-105 transition-all delay-75">
        <span className="text-md font-semibold dark:text-zinc-400">
          Front End Development
        </span>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            React
            <p className="text-zinc-500 text-sm font-normal">
              Uses React.js for building dynamic user interfaces.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            alt="Vue.js"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Vue.js
            <p className="text-zinc-500 text-sm font-normal">
              Uses Vue.js for building interactive user interfaces.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
            alt="Tailwind CSS"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Tailwind CSS
            <p className="text-zinc-500 text-sm font-normal">
              Uses Tailwind CSS for utility-first CSS framework.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://raw.githubusercontent.com/laravel/art/master/laravel-logo.png"
            alt="Laravel Blade"
            className="w-10 h-10"
          />

          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Laravel Blade
            <p className="text-zinc-500 text-sm font-normal">
              Uses Laravel Blade for templating in PHP applications.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/47703742"
            alt="Laravel Inertia.js"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Laravel Inertia.js
            <p className="text-zinc-500 text-sm font-normal">
              Uses Inertia.js for seamless single-page applications.
            </p>
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5 rounded-md drop-shadow-xl bg-zinc-100 dark:bg-zinc-800 space-y-2 gap-2 hover:scale-105 transition-all delay-75">
        <span className="text-md font-semibold dark:text-zinc-400">
          Back End Development
        </span>
        <div className="flex items-center gap-4">
          <img
            src="https://raw.githubusercontent.com/laravel/art/master/laravel-logo.png"
            alt="Laravel"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Laravel
            <p className="text-zinc-500 text-sm font-normal">
              Uses Laravel for building robust back-end applications.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
            alt="Go"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Go
            <p className="text-zinc-500 text-sm font-normal">
              Uses Go for building efficient and scalable back-end services.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Node.js
            <p className="text-zinc-500 text-sm font-normal">
              Uses Node.js for building fast and scalable server-side
              applications.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            alt="PHP"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            PHP
            <p className="text-zinc-500 text-sm font-normal">
              Uses PHP for server-side scripting and web development.
            </p>
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5 rounded-md drop-shadow-xl bg-zinc-100 dark:bg-zinc-800 space-y-2 gap-2 hover:scale-105 transition-all delay-75">
        <span className="text-md font-semibold dark:text-zinc-400">
          Databases
        </span>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            MySQL
            <p className="text-zinc-500 text-sm font-normal">
              Uses MySQL for relational database management.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
            alt="SQLite"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            SQLite
            <p className="text-zinc-500 text-sm font-normal">
              Uses SQLite for lightweight database solutions.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            MongoDB
            <p className="text-zinc-500 text-sm font-normal">
              Uses MongoDB for NoSQL database solutions.
            </p>
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5 rounded-md drop-shadow-xl bg-zinc-100 dark:bg-zinc-800 space-y-2 gap-2 hover:scale-105 transition-all delay-75">
        <span className="text-md font-semibold dark:text-zinc-400">
          UI / UX
        </span>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Figma
            <p className="text-zinc-500 text-sm font-normal">
              Uses Figma for designing user interfaces and user experiences.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            alt="Photoshop"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Photoshop
            <p className="text-zinc-500 text-sm font-normal">
              Uses Photoshop for creating and editing graphics.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg"
            alt="Inkscape"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Inkscape
            <p className="text-zinc-500 text-sm font-normal">
              Uses Inkscape for vector graphic design.
            </p>
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5 rounded-md drop-shadow-xl bg-zinc-100 dark:bg-zinc-800 space-y-2 gap-2 hover:scale-105 transition-all delay-75">
        <span className="text-md font-semibold dark:text-zinc-400">
          CI / CD
        </span>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
            alt="GitLab"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            GitLab
            <p className="text-zinc-500 text-sm font-normal">
              Uses GitLab for CI/CD pipelines and version control.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            GitHub
            <p className="text-zinc-500 text-sm font-normal">
              Uses GitHub for version control and CI/CD workflows.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Docker
            <p className="text-zinc-500 text-sm font-normal">
              Uses Docker for containerization and deployment.
            </p>
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5 rounded-md drop-shadow-xl bg-zinc-100 dark:bg-zinc-800 space-y-2 gap-2 hover:scale-105 transition-all delay-75">
        <span className="text-md font-semibold dark:text-zinc-400">
          Web Servers
        </span>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
            alt="Nginx"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Nginx
            <p className="text-zinc-500 text-sm font-normal">
              Uses Nginx for high-performance web server and reverse proxy.
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
            alt="Apache"
            className="w-10 h-10"
          />
          <span className="text-zinc-800 text-md font-semibold dark:text-zinc-300">
            Apache
            <p className="text-zinc-500 text-sm font-normal">
              Uses Apache for reliable and flexible web server solutions.
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TechStack
