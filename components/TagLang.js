import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const TagLang = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-yellow-500 hover:text-yellow-300 dark:text-green-500  dark:hover:text-green-300	">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default TagLang
