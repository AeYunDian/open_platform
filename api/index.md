# API 参考

欢迎使用 Ay 开放平台 API。所有接口均通过 `https://api.undz.cn` 或 `https://api.io.hb.cn` 提供，无需认证（部分管理接口除外），开箱即用。

## 可用 API 分组

### 📍 IP 归属地
| 方法 | 路径 | 描述 |
|------|------|------|
| GET | `/ip` | 获取当前请求的 IP 信息（含地理位置、运营商、TLS 信息等） |

**使用示例**：`curl https://api.undz.cn/ip`

详见 [IP 归属地](/api/ip) 文档。

---

### 👥 添加 QQ 好友
| 方法 | 路径 | 描述 |
|------|------|------|
| GET | `/addqq` | 生成 QQ 好友添加链接，移动端一键拉起 QQ |

**参数**：`uid`（QQ 号）
**示例**：`https://api.undz.cn/addqq?uid=10000`

详见 [添加 QQ 好友](/api/add-qq-friend) 文档。
---

### 🔗 短链服务
| 方法 | 路径 | 描述 |
|------|------|------|
| GET | `/go/parse` | 解析短链码，返回原始 URL |
| POST | `/go/addlink` | 创建短链（需管理员密钥） |

详见 [短链解析](/api/short-link/short-link-resolve) 和 [创建短链](/api/short-link/short-link-create) 文档。

---

### 📝 文本分享 (AyPass)
| 方法 | 路径 | 描述 |
|------|------|------|
| POST | `/api/sf/v1/save` | 保存文本，自动生成唯一 ID |
| POST | `/api/sf/v1/delete` | 删除已保存的文本 |
| GET | `/sf/{name}` | 获取原始文本 |

详见 [文本分享](/api/pass-text/pass-text-save) 和 [删除文本](/api/pass-text/pass-text-delete)。

---

### 📧 邮件验证码（暂停）
| 方法 | 路径 | 描述 |
|------|------|------|
| POST | `/api/verifymail/v1/send` | 发送验证码（目前暂停） |
| POST | `/api/verifymail/v1/verify` | 校验验证码 |

详见 [邮件验证码](/api/verifymail) 文档。

::: warning
当前服务暂停
:::
---

### 💬 聊天室相关
| 方法 | 路径 | 描述 |
|------|------|------|
| GET | `/chat` | 进入聊天室前端页面 |
| GET | `/poll` | 轮询新消息 |
| GET | `/send` | 发送消息 |
| GET | `/create` | 创建自定义房间账号 |

详见 [聊天室](/api/chatroom) 文档。

---

### 🎮 Crossfire: Ys 游戏云端
| 方法 | 路径 | 描述 |
|------|------|------|
| POST | `/api/crossfire/v1/account/create` | 注册账号 |
| POST | `/api/crossfire/v1/account/login` | 登录获取 token |
| POST | `/api/crossfire/v1/bag/get` | 获取背包数据 |
| POST | `/api/crossfire/v1/bag/push` | 更新背包数据 |

详见 [Crossfire: Ys](/api/crossfire) 文档。

---

### 🌐 网络代理（需授权）
| 方法 | 路径 | 描述 |
|------|------|------|
| GET | `/proxy/*` | 通用代理（需认证） |
| GET | `/gh/*` | GitHub 专用代理（无需认证，但只能访问GitHub及其相关域名） |
| GET | `/auth-proxy` | 获取代理授权（需密钥） |

详见 [网络代理](/api/proxy) 文档。

通用代理功能仅供授权用户使用。
如需使用通用代理，请与我联系：
- 通过 [BiliBili](https://space.bilibili.com/3494370328185235)（推荐）
- 通过 GitHub [Issues](https://github.com/AeYunDian/open_platform/issues)
- 发送邮件至 [admin@exm.undz.cn](mailto:admin@exm.undz.cn)

---

## 基础信息

- **基础 URL**：`https://api.undz.cn`（也支持 `https://api.io.hb.cn`）
- **请求格式**：大部分接口返回 JSON，具体见各接口文档。
- **认证方式**：目前公开 API 无需认证。涉及写入/删除的接口需提供 `key` 参数（与管理员共享密钥）。
- **频率限制**：无硬性限制，请合理使用。

## 更多资源

- [快速开始](/guide/) – 从零调用第一个 API
- [常见问题](/guide/faq) – 解答使用中的疑问
- [GitHub 仓库](https://github.com/AeYunDian/api) – 开源代码与问题反馈

> 各 API 详细参数、响应示例请点击上方链接查看独立文档。