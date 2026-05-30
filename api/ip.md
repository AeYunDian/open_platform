# IP 归属地查询

获取当前请求客户端的 IP 地址及详细地理位置、网络信息。

## 接口信息

- **请求方法**：`GET`
- **请求路径**：`/ip`

## 请求参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| ip | string | 否 | 指定 IP 查询（当前版本已关闭，仅返回请求者 IP） |

## 响应示例

```json
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

## 说明

- 该接口直接返回 `request.cf` 对象及客户端 IP。
- 暂不支持查询其他 IP。
- 可用于获取访客地理位置、运营商、TLS 版本等信息。

## 调用示例

```bash
curl https://api.undz.cn/ip
```