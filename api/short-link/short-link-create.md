# 创建短链

生成一个新的短链映射。

## 接口信息

- **请求方法**：`POST`
- **请求路径**：`/go/addlink`

## 请求参数（JSON Body）

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| link | string | 是 | 短链码（自定义） |
| target | string | 是 | 目标完整 URL |
| tip | boolean | 否 | 是否显示中间提示页，默认 false |
| expires_in | number | 否 | 有效期（秒），不填则永不过期 |

## 响应示例

```json
{
  "code": 200,
  "message": "OK"
}
```

## 错误码

| 状态码 | 含义 |
|--------|------|
| 400 | 缺少 link 或 target |
| 429 | 请求过多 |

## 调用示例

```bash
curl -X POST https://api.undz.cn/go/addlink \
  -H "Content-Type: application/json" \
  -d '{"link":"mylink","target":"https://example.com"}'
```