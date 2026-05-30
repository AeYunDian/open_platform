# 删除文本

根据名称删除已保存的文本。

## 接口信息

- **请求方法**：`POST`
- **请求路径**：`/api/sf/v1/delete`
- **需要认证**

## 请求参数（JSON Body）

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| name | string | 是 | 文本名称 |
| key | string | 是 | 管理员密钥 |

## 响应示例

```json
{
  "code": 200,
  "message": "文本已删除: 550e8400-e29b-41d4-a716-446655440000"
}
```

## 调用示例

```bash
curl -X POST https://api.undz.cn/api/sf/v1/delete \
  -H "Content-Type: application/json" \
  -d '{"name":"550e8400-e29b-41d4-a716-446655440000","key":"your_key"}'
```