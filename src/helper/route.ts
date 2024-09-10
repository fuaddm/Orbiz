export function getIsBgDark(pathname: string): boolean {
  let isBgDark = true;

  if (pathname.startsWith('/career')) {
    isBgDark = false;
  } else if (pathname.startsWith('/blog')) {
    isBgDark = false;
  } else if (pathname.startsWith('/integrations')) {
    isBgDark = false;
  }

  return isBgDark;
}
