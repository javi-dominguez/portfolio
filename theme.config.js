const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Javier Dominguez.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
  darkMode: false,
  navs: [
    {
      url: 'https://github.com/javi-dominguez',
      name: 'GitHub'
    },
    {
      url: 'https://www.linkedin.com/in/dominguezjavier/',
      name: 'LinkedIn'
    },
    {
      url: 'mailto:javierdominguez09@gmail.com',
      name: 'Contact Me'
    }
  ]
}
