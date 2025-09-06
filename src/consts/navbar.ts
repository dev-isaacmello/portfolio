export function getNavItems(t: (key: any) => string) {
  return [
    { href: '#home', label: t('nav.home'), icon: 'lucide:home' },
    { href: '#about', label: t('nav.about'), icon: 'lucide:user' },
    { href: '#projects', label: t('nav.projects'), icon: 'lucide:folder-open' },
    { href: '#footer', label: t('nav.contact'), icon: 'lucide:mail' }
  ];
}
