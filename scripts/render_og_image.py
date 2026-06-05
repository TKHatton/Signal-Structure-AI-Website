"""Render a 1200×630 OG image for The Invisible Business white paper.

Usage:  python scripts/render_og_image.py
Writes: public/og-invisible-business.png
"""
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).parent.parent
OUT  = ROOT / "public" / "og-invisible-business.png"

HTML = """<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=DM+Serif+Display&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #1B2B4B;
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    position: relative;
  }
  /* grid texture */
  body::before {
    content: "";
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
  }
  .inner {
    position: relative; z-index: 1;
    padding: 64px 72px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {}
  .eyebrow {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #C17A3A;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
  }
  .eyebrow::before {
    content: "";
    width: 6px; height: 6px;
    background: #C17A3A;
    border-radius: 50%;
  }
  .article {
    font-size: 13px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    margin-bottom: -4px;
  }
  h1 {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 96px;
    line-height: 0.93;
    color: #fff;
    letter-spacing: -0.02em;
    font-weight: 400;
  }
  .sub {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 18px;
    color: rgba(255,255,255,0.7);
    line-height: 1.35;
    max-width: 520px;
    margin-top: 20px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .brand {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 16px;
    color: #fff;
  }
  .stat-row {
    display: flex;
    gap: 32px;
    align-items: flex-end;
  }
  .stat { text-align: right; }
  .stat .n {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 28px;
    color: #C17A3A;
    line-height: 1;
  }
  .stat .l {
    font-size: 10px;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.05em;
    line-height: 1.4;
    max-width: 120px;
  }
  .divider {
    width: 1px;
    height: 48px;
    background: rgba(255,255,255,0.15);
    align-self: flex-end;
  }
</style>
</head>
<body>
<div class="inner">
  <div class="top">
    <div class="eyebrow">White Paper &mdash; Signal &amp; Structure AI</div>
    <p class="article">The</p>
    <h1>Invisible<br>Business</h1>
    <p class="sub">Why your business exists in the real world but not in AI.</p>
  </div>
  <div class="bottom">
    <div class="brand">signalstructure.ai</div>
    <div class="stat-row">
      <div class="stat">
        <div class="n">20</div>
        <div class="l">businesses tested</div>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <div class="n">0</div>
        <div class="l">reached Strong Signal</div>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <div class="n">49.7</div>
        <div class="l">mean score out of 100</div>
      </div>
    </div>
  </div>
</div>
</body>
</html>"""

def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1200, "height": 630})
        page.set_content(HTML, wait_until="networkidle")
        page.wait_for_timeout(1200)
        page.screenshot(path=str(OUT), full_page=False)
        browser.close()
    print(f"Wrote {OUT}  ({OUT.stat().st_size // 1024} KB)")

if __name__ == "__main__":
    main()
