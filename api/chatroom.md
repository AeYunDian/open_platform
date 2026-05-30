# 聊天室 API

聊天室提供复古风格的 Web 界面和轮询式消息接口。

## 前端页面

- `GET /chat`：聊天室入口（需传入 `room`、`nick` 等参数）
- `GET /`：登录选择界面

## 消息轮询

`GET /poll?room={room}&after_time={time}&after_id={id}`

返回新消息列表。

## 发送消息

`GET /send?room={room}&nick={nick}&msg={text}`（公开房间无需认证；自定义房间需提供用户名密码）

## 创建自定义房间账号

`GET /create?key={adminKey}&username={name}&password={pass}`

## 管理员接口

`/api/admin/*` 需要超级密钥，可管理房间、敏感词、消息等。

详细用法请直接访问 `/setting` 登录管理面板。