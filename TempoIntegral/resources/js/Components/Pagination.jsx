import { Link } from "@inertiajs/react";

export default function Pagination ({links, currentPage}) {
  return (
    <div className="flex justify-center mt-6 mb-6 space-x-2">
      {links
        .filter((link, index) => {
          const isPrevious = link.label === '&laquo; Anterior';
          const isNext = link.label === 'Próximo &raquo;';
          const isCurrent = link.active;
          const isPageBeforeAfter = index === currentPage || index === currentPage - 1 || index === currentPage + 1;
          return isPrevious || isNext || isCurrent || isPageBeforeAfter;
      })
      .map((link, index) => (
        <Link
          key={index}
          href={link.url ?? '#'}
          as="button" 
          className={`px-4 py-1 border round-md transition-colors duration-300 ${link.active ? `bg-theme-blue-2 text-white cursor-default` : `bg-white text-background hover:bg-theme-blue-light hover:text-white`} ${!link.url ? `cursor-not-allowed opacity-50` : ``}`}
          onClick={e => !link.url && e.preventDefault()}
        >{link.label === "&laquo; Previous" ? ("<") : (link.label === "Next &raquo;" ? (">") : (!!link.label))}
          {link.label}
        </Link>
      ))}
    </div>
  )
}