# 保存文本

将文本内容保存到数据库，自动生成唯一 ID 或使用自定义名称。

## 接口信息

- **请求方法**：`POST`
- **请求路径**：`/api/sf/v1/save`

## 请求参数（JSON Body）

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| text | string | 是 | 文本内容（支持明文或 Base64） |
| name | string | 否 | 自定义名称（若不提供则自动生成 UUID） |

## 响应示例

```json
{
  "code": 200,
  "name": "550e8400-e29b-41d4-a716-446655440000",
  "content": "dGV4dCBjb250ZW50",
  "message": "文本已保存"
}
```

## 调用示例

```bash
curl -X POST https://api.undz.cn/api/sf/v1/save \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello world"}'
```

## 获取文本

保存后，可通过 `GET /sf/{name}` 直接获取原始文本。