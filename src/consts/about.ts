export function getExperiences(t: (key: any) => string) {
  return [
    {
      year: '2025 - Presente',
      title: t('about.experience.current.title'),
      company: t('about.experience.current.company'),
      description: t('about.experience.current.description'),
      icon: 'lucide:code',
      color: 'from-blue-500 to-purple-600',
      tags: ['C#', '.NET', 'Next.js', 'Tailwind CSS' ,'TypeScript', 'API Rest', 'Postgres', 'Docker', 'Git', 'Entity Framework', 'Flutter', 'Dart']
    },
    {
      year: '2019 - 2023',
      title: t('about.experience.past.title'),
      company: t('about.experience.past.company'),
      description: t('about.experience.past.description'),
      icon: 'lucide:gamepad-2',
      color: 'from-green-500 to-emerald-600',
      tags: ['Lua', 'XMPP', 'XMPP Client', '3D Graphics', 'Texture Pack', 'Mods']
    }
  ];
}

// Função para criar dados de educação baseados no idioma
export function getEducation(t: (key: any) => string) {
  return [
    {
      year: '2025',
      degree: t('about.education.degree'),
      institution: t('about.education.institution'),
      description: t('about.education.description'),
      icon: 'lucide:graduation-cap',
      color: 'from-purple-500 to-pink-600',
      gpa: '9.5'
    }
  ];
}