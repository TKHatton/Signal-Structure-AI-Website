"""Render the default 1536x768 share card (Open Graph and Twitter) in the Night Signal palette.

Usage:  python scripts/render_brand_card.py
Writes: app/opengraph-image.png, app/twitter-image.png and public/og-image.png
"""
import base64
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).parent.parent
LOGO = base64.b64encode((ROOT / "public" / "images" / "logo-light.png").read_bytes()).decode()
OUTS = [ROOT / "app" / "opengraph-image.png", ROOT / "app" / "twitter-image.png", ROOT / "public" / "og-image.png"]

HTML = f"""<!doctype html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{ width: 1536px; height: 768px; background: #161A3F; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center; gap: 56px; padding: 0 120px; }}
  img {{ width: 300px; height: 300px; position: relative; }}
  .words {{ position: relative; }}
  h1 {{ font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; font-size: 84px; line-height: 1.05; color: #fff; white-space: nowrap; }}
  h1 .amp {{ color: #D8F07A; }}
  h1 .ai {{ color: #9BA2D6; }}
  .rule {{ height: 4px; background: #D8F07A; margin-top: 14px; width: 100%; }}
  .tag {{ font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 28px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #9BA2D6; margin-top: 28px; text-align: center; }}
</style></head>
<body>
  <img src="data:image/png;base64,{LOGO}" alt="">
  <div class="words">
    <h1>Signal <span class="amp">&amp;</span> Structure <span class="ai">AI</span></h1>
    <div class="rule"></div>
    <div class="tag">Be found. Be accurate. Be recommended.</div>
  </div>
</body></html>"""

def main():
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1536, "height": 768})
        page.set_content(HTML, wait_until="networkidle")
        page.wait_for_timeout(1500)
        page.screenshot(path=str(OUTS[0]), full_page=False)
        b.close()
    for o in OUTS[1:]:
        o.write_bytes(OUTS[0].read_bytes())
    for o in OUTS:
        print("Wrote", o, o.stat().st_size // 1024, "KB")

if __name__ == "__main__":
    main()
