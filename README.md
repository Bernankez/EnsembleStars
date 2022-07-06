# EnsembleStarsUI

## **WIP**

An EnsembleStars Style UI Component Library built on Vue3.

// TODO
* [x] 输出esm, cjs, umd格式包，支持tree shaking
* [x] `volar.d.ts`中的`es-ui`会被换成相对目录 vite打包会读tsconfig的include，替换掉，暂时先去掉，和输出目录结构调整一起改，调整tsconfig配置或目录结构
* [ ] cjs包中lodash-es替换成lodash？
* [ ] 构建的库中的lodash是否保留？
* [ ] `package.json`中的`./style.css`配置
* [ ] 输出目录结构调整？
* [-] 类型文件如何生成（最好使用vue-tsc）（通过锁vue版本的方式vite-plugin-dts已经可以生成.vue.d.ts，但是生成类型不如vue-tsc全面，不能生成slots类型。另外对css中v-bind会类型检查导致报错）
* [ ] 组件已有类型，但volar中仍缺少类型提示
* [ ] 目前全局css变量仍需在main.ts全局引入，组件css由于写在sfc中会跟组件一起编译。如何打包样式，管理css？
