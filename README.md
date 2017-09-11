这是用 Framework-React 重写的 kkbwechat 微信客户端。

主要使用了以下的框架和库：

- [Reactjs](https://facebook.github.io/react/)
- [Framework7-React](http://framework7.io/react/)
- [Mobx](https://github.com/mobxjs/mobx) + [Mobx-react](https://github.com/mobxjs/mobx-react)
- [Reflux](https://github.com/reflux/refluxjs)
- [formstate](https://github.com/formstate/formstate) + [validatorjs](https://github.com/skaterdav85/validatorjs)
- [axios](https://github.com/mzabriskie/axios)
- 其他的一些库如 lodash, momentjs 等。

这个项目是用 facebook 的 [create-react-app](https://github.com/facebookincubator/create-react-app) 创建的，运行程序使用

    npm start

打包生产环境使用

    npm run build

开发这个项目的一点心得。

1. Mobx 的确可以简化 Reactjs 的开发，但这只是状态管理框架，所以我又加上了 reflux 来粘结 React View。

    加上了 Reflux 以的后，框架流程变成

        View -> Actions -> Stores -> Mobx states -> View

    当然有时如果不需要 Mobx 的状态管理的话，也可以直接使用 reflux 的 Store 管理

        View -> Actions -> Stores -> View

2. Framework7+React 事实上是基于 Framework7+Vue 转化生成的，组件是利用了某种机制从 Vue 组件映射成 React 组件，可惜映射的不太完整，有些 bug，不过还好可以自己重写组件，或者动用 jQuery 大法。

3. Mobx + FormState + validatorjs 是表单管理的三剑客，这三个组合起来可以完成表单的状态管理和验证。

4. 之所以使用 axios 来发送 http 请求，是因为 axios 直接 interceptors，这样当访问 service 出现问题的时候，我可以在 interceptors 里统一处理，而不需要在每一个 service 调动的地方写代码来管理并显示错误消息。

5. 这个项目里使用了 mobx-react 的 inject 和 Provider 做依赖注入，但跟 angular 的依赖注入相比实在太小儿科了。

先写这些，之后再补充在这个项目中的一些心得体会。