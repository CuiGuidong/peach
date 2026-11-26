# BoardUI 的图片附件

2026-11-26 查阅 [Composer Attachments 的公开示例和说明](https://www.boardui.com/components/composer-attachments)。公开 HTML 中的附件条使用可换行的横排，图片容器为 `size-14`，图像铺满容器，圆形移除按钮定位在右上角。官方说明给出的图片容器尺寸是 56 × 56 像素，也展示了上传队列及进度动画。取证 HTML 的 SHA-256 为 `457be11f6d7d374187197f7fbaca0fe36cb04328ade3074fc6df4e5836a72ee7`。Pro 源码的版本和运行时几何未取得。本页记录公开示例的人工查阅结果。Pro 源码没有可重抓的公开快照，因此未登记进 docs/reference-sources.json。

Peach 在反馈描述上方横排图片，空间不足时换行。缩略图按原比例完整显示，下面标明像素尺寸，右上角可以移除。点击后在反馈弹窗内查看大图，可切换原始像素尺寸。用户发送时才上传全部附件，因此界面显示实际截图状态和提交状态。
