export const networks = {
  shouldNotBeOverridden: {
    a: 1,
    b: 'z',
    c: true,
    url: 'https://',
    someDefaultValue: undefined,
  },
  shouldBeExtended: {
    d: 200,
    e: 'Z',
    url: 'https://',
  },
  shouldBePartiallyExtended: {
    a: 1,
    c: 'tc22',
    e: 'tc52',
    f: 'tc62',
    url: 'https://',
  },
  shouldNotBeOverriddenByHomeDefaultConfig: {
    url: 'http://project-set',
  },
  shouldNotBeOverriddenByLocalDefaultConfig: {
    url: 'http://project-set',
  },
}
