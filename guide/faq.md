# 常见问题

## 关于平台

### Q: Ay开放平台需要注册或认证吗？
**不需要。** 正如我们承诺的“三个不”：不限制次数、不限制频率、不需认证。所有 API 开箱即用，无需 API Key 或任何鉴权。

### Q: 真的没有任何限制吗？
是的。目前所有 API 均不设调用次数和频率上限。但如果发现滥用（例如每秒数千次请求影响服务稳定性），我们可能会与您联系协商合理使用策略。

### Q: 平台会一直免费吗？
只要不倒闭，就一直开放

### Q: 服务有哪些？
目前提供 IP 归属地、添加 QQ 好友、短链解析、文本分享，详细列表请查看 [服务列表](/guide/#服务列表)。更多服务正在开发中。

---

## 关于使用

### Q: 如何调用 API？
直接向 `https://api.undz.cn` 发送 HTTP 请求即可，无需添加任何认证头。示例见各接口文档和[快速开始](/guide/#快速开始)。


### Q: 添加 QQ 好友接口在 PC 端能用吗？
该接口生成的 URL Scheme 双端支持，PC 端也能用，不过因为最新版QQ政策，电脑段可能会要求您先打开QQ主程序才能够使用链接唤起添加好友页面。

---

## 故障排查

### Q: 调用 API 返回 `500` 错误怎么办？
请稍后重试。若持续出现，请通过 [GitHub Issues](https://github.com/AeYunDian/open_platform/issues/new?template=bug_report.md) 提交 bug 报告，附上请求 URL、响应内容、发生时间。

### Q: IP 归属地返回的城市不准确怎么办？
我们的数据基于 Cloudflare 的 `request.cf` 对象，可能与实际有偏差。如遇到明显错误，欢迎提交 [Issue](https://github.com/AeYunDian/open_platform/issues/new?template=need_help.md) 反馈，我们会尝试手动优化数据源。

### Q: 我发现文档与实际行为不符？
请使用 [Issue](https://github.com/AeYunDian/open_platform/issues/new?template=bug_report.md) 提交问题，我们会在尽快核实并修正。

---

## 其他问题

### Q: 我想请求增加新功能，如何提交？
请使用 [功能请求模板](https://github.com/AeYunDian/open_platform/issues/new?template=feature_request.md) 描述您的需求和使用场景。

### Q: 如何联系平台维护者？
- 通过 GitHub [Issues](https://github.com/AeYunDian/open_platform/issues)（推荐）
- 发送邮件至 [admin@exm.undz.cn](mailto:admin@exm.undz.cn)
- 通过 [BiliBili](https://space.bilibili.com/3494370328185235)

### Q: 平台代码开源吗？
大部分已开源在 [GitHub](https://github.com/AeYunDian/api)，可直接使用，欢迎 star 和贡献。

---

## 还没找到答案？
请前往 [GitHub Issues](https://github.com/AeYunDian/open_platform/issues) 选择对应的模板提问，我们会尽快回复。