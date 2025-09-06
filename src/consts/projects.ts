export function getProjects(t: (key: any) => string) {
  return [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: '/api/placeholder/400/300',
      category: 'Web',
      technologies: ['Tecnologia', 'Tecnologia', 'Tecnologia'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: '/api/placeholder/400/300',
      category: 'Mobile',
      technologies: ['Tecnologia', 'Tecnologia', 'Tecnologia'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: '/api/placeholder/400/300',
      category: 'API',
      technologies: ['Tecnologia', 'Tecnologia', 'Tecnologia'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];
}

export function getCategories(t: (key: any) => string) {
  return [
    t('projects.categories.all'),
    t('projects.categories.web'),
    t('projects.categories.mobile'),
    t('projects.categories.api'),
    t('projects.categories.ai'),
    t('projects.categories.gaming')
  ];
}
