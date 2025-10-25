import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-indigo-800 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-x1 font-bold">
            Blog Pessoal Generation | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/william-m-almeida/">
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://github.com/willmartinsss">
              <GithubLogoIcon size={48} weight="bold" />
            </a>
            <a href="">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer