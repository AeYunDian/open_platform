# 短链解析

通过短链码获取原始 URL。

## 接口信息

- **请求方法**：`GET`
- **请求路径**：`/go/parse`

## 请求参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| link | string | 是 | 短链码（例如 `abc123`） |

## 响应示例

```json
{
  "code": 200,
  "data": {
    "link": "https://example.com/very/long/original/url",
    "tip": false
  }
}
```

| 字段 | 类型 | 描述 |
|------|------|------|
| link | string | 原始完整 URL |
| tip | boolean | 是否显示中间提示页（保留字段） |

## 错误码

| 状态码 | 含义 |
|--------|------|
| 400 | 缺少 link 参数 |
| 404 | 短链不存在或已过期 |

## 调用示例

```bash
curl 'https://api.undz.cn/go/parse?link=abc123'
```