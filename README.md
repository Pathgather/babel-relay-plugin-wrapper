# babel-relay-plugin-wrapper

https://facebook.github.io/relay/docs/guides-babel-plugin.html#content

When using Babel with Webpack, you have to specify Babel plugins as a string, e.g, `loader: babel?plugins[]=my-plugin`, which doesn't allow you to pass any configuration to them. `babel-relay-plugin` requires a schema file to be passed, so what this does is tries to find `schema.json` by looking at the project's `package.json` and uses it to configure `babel-relay-plugin`.

### Usage ###

In your `webpack.config.js`:

```js
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?plugins[]=babel-relay-plugin-wrapper' }
    ]
  }
```
