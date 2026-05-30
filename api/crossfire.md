# Crossfire: Ys 游戏云端 API

为游戏提供账号注册、登录、背包数据存取功能。

## 基础 URL

`https://api.undz.cn/api/crossfire/v1`

## 1. 注册账号

- **路径**：`/account/create`
- **方法**：`POST`
- **请求体**：
```json
{
  "email": "user@example.com",
  "password": "plaintext",
  "name": "玩家昵称"
}
```
- **响应**：
```json
{
  "status": "success",
  "message": "User created successfully",
  "CreateTime": "2026/05/30 20:30:00"
}
```

## 2. 登录

- **路径**：`/account/login`
- **方法**：`POST`
- **请求体**：
```json
{
  "email": "user@example.com",
  "password": "plaintext"
}
```
- **响应**：
```json
{
  "status": "success",
  "token": "uuid-token",
  "uuid": "user-uuid",
  "name": "玩家昵称"
}
```
- 登录后 token 有效期 7 天。

## 3. 获取背包数据

- **路径**：`/bag/get`
- **方法**：`POST`
- **请求体**：
```json
{
  "uuid": "user-uuid",
  "token": "login-token"
}
```
- **响应**：
```json
{
  "status": "success",
  "level": 0
}
```

## 4. 更新背包数据

- **路径**：`/bag/push`
- **方法**：`POST`
- **请求体**：
```json
{
  "uuid": "user-uuid",
  "token": "login-token",
  "level": 100
}
```
- **响应**：
```json
{
  "status": "success"
}
```

## 5. 登出（可选）

- **路径**：`/account/logout`
- **方法**：`POST`
- **请求体**：同上包含 `uuid` 和 `token`

## 错误码

- 400：参数缺失或无效
- 401：密码错误或 token 过期
- 403：账号被封禁
- 409：邮箱已存在
- 500：服务器内部错误