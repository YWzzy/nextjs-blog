import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon
            kind="mail"
            show={siteMetadata.email.show}
            href={`mailto:${siteMetadata.email.url}`}
            size={6}
          />
          <SocialIcon
            kind="github"
            show={siteMetadata.github.show}
            href={siteMetadata.github.url}
            size={6}
          />
          <SocialIcon
            kind="facebook"
            show={siteMetadata.facebook?.show}
            href={siteMetadata.facebook?.url}
            size={6}
          />
          <SocialIcon
            kind="youtube"
            show={siteMetadata.youtube?.show}
            href={siteMetadata.youtube?.url}
            size={6}
          />
          <SocialIcon
            kind="linkedin"
            show={siteMetadata.linkedin?.show}
            href={siteMetadata.linkedin?.url}
            size={6}
          />
          <SocialIcon
            kind="twitter"
            show={siteMetadata.twitter?.show}
            href={siteMetadata.twitter?.url}
            size={6}
          />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
