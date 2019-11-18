module.exports = {
  extends: [
    'tslint:recommended',
    'tslint-react',
    'tslint-config-airbnb',
    'tslint-config-prettier'
  ],
  rules: {
    'array-type': [true, 'array'],
    'interface-name': [true, 'never-prefix'],
    'import-name': [
      true,
      {
        react: 'React',
        reactDom: 'ReactDom',
        styledComponents: 'styled',
        graphqlTag: 'gql',
        reactLoadingSkeleton: 'Skeleton',
        reactHelmet: 'Helmet',
        reactEventListener: 'EventListener',
        ravenJs: 'Raven',
        reactLoadable: 'Loadable',
        reactRouterBreadcrumbsHoc: 'withBreadcrumbs',
        bsonObjectid: 'ObjectId',
        htmlReactParser: 'htmlParser',
        josaJs: 'josa',
        reactCountup: 'CountUp',
        reactAnimateOnScroll: 'ScrollAnimation',
        reactInfiniteScrollComponent: 'InfiniteScroll',
        reactLinkify: 'ReactLinkify'
      },
    ],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case'
    ],
    'no-namespace': false,
    'object-literal-sort-keys': false,
    'ordered-imports': [
      true,
      {
        'named-imports-order': 'any'
      }
    ],
    'no-unused-variable': true,
    'no-unused-expression': true,
    'jsx-boolean-value': false,
    'quotemark': [true, 'single', 'jsx-double']
  }
}
