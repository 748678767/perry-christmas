# Christmas Tree Photo Wall

一個前端手勢控制聖誕樹照片牆專案。頁面使用 Three.js 建立 3D 聖誕樹、照片掛飾、粒子與光暈效果，並透過 MediaPipe Hand Landmarker 嘗試讀取攝影機手勢；如果瀏覽器或權限不支援攝影機，會自動切換成滑鼠控制模式。

## 項目介紹

- 3D 聖誕樹照片牆：可上傳多張照片，照片會作為聖誕樹上的相框掛飾。
- 手勢控制：開掌可切換散開模式，握拳回到聖誕樹模式，捏合可聚焦照片。
- 鍵盤控制：支援樹形模式、散開模式、照片聚焦、全螢幕與隱藏 UI。
- 背景音樂：可上傳本機音訊檔作為背景音樂播放。
- 靜態部署：主入口是 `index.html`，依賴 CDN 載入 Three.js 與 MediaPipe，不需要後端服務。

## 部署說明

### 上傳到 GitHub

1. 在 GitHub 建立一個新的 repository。
2. 將本資料夾內的檔案上傳到 repository，至少包含：
   - `index.html`
   - `App.tsx`
   - `music/`
   - `package.json`
   - `scripts/build.mjs`
   - `_headers`
   - `README.md`
3. 提交後即可連接 Cloudflare Pages。

### Cloudflare Pages 部署

推薦使用 GitHub repository 連接 Cloudflare Pages：

1. 進入 Cloudflare Dashboard。
2. 選擇 `Workers & Pages` -> `Create application` -> `Pages`。
3. 連接你的 GitHub repository。
4. Build settings 填寫：
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: 留空或使用預設
5. 儲存並部署。

如果你想用 Cloudflare Pages 的直接上傳功能，也可以先在本機執行：

```bash
npm run build
```

然後把產生的 `dist/` 資料夾上傳到 Cloudflare Pages。

注意：手勢攝影機功能需要 HTTPS 或 localhost 環境。Cloudflare Pages 會自動提供 HTTPS，所以正式部署後可以正常請求攝影機權限。

## 操作說明

### 頁面按鈕

- `Add Photos`：上傳一張或多張照片，加入聖誕樹照片牆。
- `Upload BGM`：上傳音訊檔作為背景音樂。
- 音樂按鈕：播放或暫停已上傳的背景音樂。

### 鍵盤快捷鍵

- `1`：切換到聖誕樹模式。
- `2`：切換到照片散開模式。
- `Space` 或 `3`：聚焦一張照片。
- `F`：切換全螢幕。
- `H`：隱藏或顯示上方操作 UI。

### 手勢控制

- 握拳：回到聖誕樹模式。
- 開掌：切換到散開模式。
- 捏合拇指與食指：聚焦照片。
- 移動手部：在散開模式中控制旋轉方向。

如果攝影機權限被拒絕，或瀏覽器不支援相關 API，頁面會顯示 `Mouse Mode`，此時可用滑鼠移動控制散開模式的旋轉。
