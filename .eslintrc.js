module.exports = {
  'env': {'browser': true, 'commonjs': true, 'es6': true, 'node': false},
  'extends': 'eslint:recommended',
  'parserOptions': {'sourceType': 'module'},
  'rules': {
    'comma-dangle': ['error', 'only-multiline'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};
