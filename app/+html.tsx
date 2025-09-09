// app/+html.tsx
import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ScrollViewStyleReset />

        {/* 1) Pretendard 웹폰트 로드 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/pretendard.css"
        />

        {/* 2) 바디 기본 폰트 강제 지정 (중요) */}
        <style>{`
          * {
            font-family: Pretendard !important;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
