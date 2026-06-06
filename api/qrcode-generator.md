# 二维码生成

生成 QR Code 二维码，支持 PNG、SVG、PDF 三种输出格式，可自定义纠错等级、边距、尺寸等参数，**直接返回 PNG / SVG / PDF 二进制数据**

## 接口信息

- **请求方法**：`GET`
- **请求主机名**：`api.undz.cn` 或 `api.io.hb.cn`
- **请求路径**：`/qrcode`

## 请求参数

| 参数 | 类型 | 必填 | 默认值 | 描述 |
|------|------|------|--------|------|
| text | string | **是** | 无 | 需要编码为二维码的内容（URL、文本、数字等） |
| type | string | 否 | `png` | 输出格式：`png`（栅格图，默认）、`svg`（矢量图）、`pdf`（文档） |
| level | string | 否 | `M` | 纠错等级：`L`(7%)、`M`(15%)、`Q`(25%)、`H`(30%) |
| margin | integer | 否 | `2` | 二维码四周留白（模块数），范围 0–10 |
| size | integer | 否 | `200` | **仅 PNG 有效**。二维码图片边长（像素），范围 50–1000，步长 10 |
| parse_url | boolean | 否 | `false` | 是否对 URL 进行实验性优化（可改善长链接的编码效率） |

## 响应说明

- **成功时**：根据 `type` 参数返回对应的二进制数据。
  - `type=png` → `Content-Type: image/png`
  - `type=svg` → `Content-Type: image/svg+xml`
  - `type=pdf` → `Content-Type: application/pdf`
- **失败时**：返回 JSON 格式的错误信息。
  - 缺少 `text` 参数时返回 HTML 表单页面（可直接交互）。
  - 无效的 `type` 参数返回 `{"code":400,"message":"Invalid type parameter"}`。

## 说明

- 该接口无需认证，可直接调用。
- 响应头中设置了 `Cache-Control: public, max-age=3600`，同一参数生成的二维码会缓存 1 小时。
- 直接访问 `/qrcode` 不带任何参数时，会返回一个 HTML 生成表单，用户可填写内容并即时生成二维码。

## 调用示例

### 1. 生成 PNG 二维码（默认尺寸 200px）

```bash
curl "https://api.undz.cn/qrcode?text=https://example.com" --output qrcode.png
```

### 2. 生成 SVG 矢量图，H 级纠错，边距 4 模块

```bash
curl "https://api.undz.cn/qrcode?text=Hello%20World&type=svg&level=H&margin=4" --output qrcode.svg
```

### 3. 生成 PDF 文档（二维码占据整页）

```bash
curl "https://api.undz.cn/qrcode?text=你好&type=pdf" --output qrcode.pdf
```

### 4. 生成大尺寸 PNG（500px，URL 优化）

```bash
curl "https://api.undz.cn/qrcode?text=https://example.com/very/long/path&size=500&parse_url=true" --output qrcode.png
```

### 5. 在 HTML 中直接引用

```html
<img src="https://api.undz.cn/qrcode?text=你好&size=300" alt="QR Code">
```
::: info 二维码示例
![二维码示例](https://api.undz.cn/qrcode?text=https://open.undz.cn&size=71)
https://api.undz.cn/qrcode?text=https://open.undz.cn&size=71
:::
## 前端表单页面预览

访问 `/qrcode` 即可看到如下交互界面（自动适配移动端）：

![表单预览](https://net.undz.cn/static/png/3714d87625b0481cffad90ea09fe52ac.png) *（示意，实际请自行体验）*

包含格式选择、纠错等级、尺寸、边距等控件，点击“生成二维码”即可实时获取结果。