# 平台简介

Ay开放平台是一个为个人开发者打造的统一API服务平台，提供稳定、易用的HTTP API接口。
Ay开放平台主打无限制，秉持三个不，不限制次数、不限制频率、不需认证。

## 服务列表

| API名称 | 描述 | 状态 |
|---------|------|------|
| 短链解析 | 自定义短链服务，将短链码还原为原始完整URL | 🟢 运行  |
| 添加QQ好友 | 生成QQ好友添加链接，双端一键拉起QQ并跳转至添加页面 | 🟢 运行  |
| IP归属地 | 获取IPv4/IPv6地址及IP的地理位置信息（国家、省份、城市、运营商） | 🟢 运行  |
| 文本分享 | 文本暂存服务，保存、更新、删除文本，自动生成唯一访问ID，Base64编码存储 | 🟢 运行  |
| 二维码生成 | 	生成二维码，直接返回 PNG / SVG / PDF 二进制数据 | 🟢 运行  |
| 邮件验证码 | 向指定邮箱发送验证码（目前暂停服务） | 🔴 暂停 |

> 更多服务敬请期待，您也可以[点击这里](https://github.com/AeYunDian/open_platform/issues/new?template=feature_request.md)向我提交需求

## API 基础信息

### 服务地址
```
https://api.undz.cn
https://api.io.hb.cn
```

### 请求格式
大部分API请求和响应使用 **JSON** 格式，但请以接口文档界面为主。

## 快速开始

### 1. 寻找您感兴趣的API
在 [服务列表](#服务列表) 内寻找您感兴趣的API

### 2. 查看接口详细信息
选择API后（此处使用 [IP归属地](/api/ip) 示范）

### 3. 发起第一个请求
在命令行中尝试调用IP归属地API：

```bash
curl -X GET https://api.undz.cn/ip
```
```powershell
Invoke-RestMethod -Uri "https://api.undz.cn/ip" -Method GET
```

返回示例
```
{
  "code": 200,
  "ip": "1234:123:1234:1234:1234:1234:1234:1233",
  "httpProtocol": "HTTP/2",
  "clientAcceptEncoding": "gzip, deflate, br",
  "requestPriority": "weight=256;exclusive=1",
  "edgeRequestKeepAliveStatus": 1,
  "requestHeaderNames": {
  },
  "clientTcpRtt": 242,
  "clientQuicRtt": 0,
  "colo": "AMS",
  "asn": 4134,
  "asOrganization": "Chinatelecom IPv6 address for fixed broadband",
  "country": "CN",
  "isEUCountry": false,
  "city": "Xiaogan",
  "continent": "AS",
  "region": "Hubei",
  "regionCode": "HB",
  "timezone": "Asia/Shanghai",
  "longitude": "114.26667",
  "latitude": "30.58333",
  "postalCode": "430000",
  "tlsVersion": "TLSv1.3",
  "tlsCipher": "AEAD-AES128-GCM-SHA256",
  "tlsClientRandom": "xugU+B2gqofwmBtN/Z+f1QrFuelut4jRl7ToyBsQvR4=",
  "tlsClientCiphersSha1": "cG3ksVXz5z5aMztJKpmN9By5SR8=",
  "tlsClientExtensionsSha1": "diWqP03GCE33buU7R6gv3FcVht0=",
  "tlsClientExtensionsSha1Le": "JX/K0EUV3q2Ntt2FDmFgR7yh6mk=",
  "tlsExportedAuthenticator": {
    "clientHandshake": "8657248af6040de556bfe380a20dc3b1a79e1d44f78572eb15e0d31797dcfabb",
    "serverHandshake": "60006d6c306d36be90ca929b37f4716e4f6e111fe0930dcdf36ef4e764a8442d",
    "clientFinished": "3ec2ce63e15e8609db9cf89f2748d5a020a464c742ef203f581a60cc5a5d2dba",
    "serverFinished": "84247b644360dc90b7a64ea8c2fd49414c463d5e07f7e3ba6aa0a78e9878ea24"
  },
  "tlsClientHelloLength": "1758",
  "tlsClientAuth": {
    "certPresented": "0",
    "certVerified": "NONE",
    "certRevoked": "0",
    "certIssuerDN": "",
    "certSubjectDN": "",
    "certIssuerDNRFC2253": "",
    "certSubjectDNRFC2253": "",
    "certIssuerDNLegacy": "",
    "certSubjectDNLegacy": "",
    "certSerial": "",
    "certIssuerSerial": "",
    "certSKI": "",
    "certIssuerSKI": "",
    "certFingerprintSHA1": "",
    "certFingerprintSHA256": "",
    "certNotBefore": "",
    "certNotAfter": "",
    "certRFC9440": "",
    "certRFC9440TooLarge": false,
    "certChainRFC9440": "",
    "certChainRFC9440TooLarge": false
  },
  "verifiedBotCategory": "",
  "edgeL4": {
    "deliveryRate": 16677
  }
}

```

## 下一步

- 查看 [API 参考](/api/)了解各接口详细说明
- 遇到问题请参考 [常见问题](/guide/faq)或在GitHub提交Issue


## 相关链接

- [GitHub 仓库](https://github.com/AeYunDian/api)


<style>
.vp-doc table td:last-child,
.vp-doc table th:last-child {
  white-space: nowrap;
}
</style>