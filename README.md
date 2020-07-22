# Git tag

> 公司内部规范了 tagName 的格式 prod-010002

为了偷个懒 用简单的命令 可以自动生成 符合规范的 tagName

## 安装

```
npm install
npm link // 添加到本地的环境变量中 可以直接使用 gtag
```

## 使用

- `gtag [env] [-m msg]`

  - env: tagName 中的前缀 也就是环境 只允许 `prod`, `test`, `alpha`三个
  - msg: tagName 还可以为 tag 添加一些详细的描述信息

- 默认只用 `gtag` 执行的就是 `gtag prod`, 不会默认添加 `msg` 信息
