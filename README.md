# bkn_500-252_mita-lounge

# BKN Prototype

## 環境要件

- Node.js (推奨: 最新のLTS版)
- Yarn v4.4.0

## 環境構築

### 1. パッケージマネージャーの準備

```bash
# yarnの最新版をインストール
corepack enable
yarn set version 4.4.0
```

### 2. プロジェクトのセットアップ

```bash
# リポジトリをクローン
git clone [リポジトリURL]
cd bkn_prototype

# 依存パッケージのインストール
yarn install
```

### 3. 開発サーバーの起動

```bash
# ローカル環境で起動
yarn dev

# ネットワーク経由でアクセス可能な開発サーバーを起動
yarn devh
```

## 開発用コマンド

### 基本コマンド

```bash
# 開発サーバー起動
yarn dev

# ビルド
yarn build

# ビルド結果のプレビュー
yarn preview

# 型チェック
yarn astro check
```

### コード品質管理

```bash
# フォーマット
yarn format  # Prettier + Stylelintによる自動フォーマット

# リント
yarn lint    # ESLint + Stylelintによるコード検証

# 自動修正
yarn fix     # ESLint, Stylelint, Prettierによる自動修正
```

### テスト

```bash
# テストの実行
yarn test

# テストの監視モード
yarn test:watch
```

## 主要な依存パッケージ

- [Astro](https://astro.build/) - Webフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型システム
- [GSAP](https://greensock.com/gsap/) - アニメーション
- [Lenis](https://github.com/studio-freight/lenis) - スムーススクロール
- [Vitest](https://vitest.dev/) - テストフレームワーク

## フォント

以下のフォントが利用可能です：

- Noto Sans JP (Variable)
- Noto Serif JP (Variable)
- EB Garamond
- Shippori Mincho
- YakuhanJP
- YakuhanMP

## ライセンス

UNLICENSED - 社内利用限定

## 作者

Daiki Nojima