"""Render the branded white paper HTML to a print-ready PDF.

Usage:  python scripts/render_whitepaper_pdf.py

Reads:  scripts/whitepaper-print.html
Writes: public/the-invisible-business.pdf
"""
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).parent.parent
HTML = ROOT / "scripts" / "whitepaper-print.html"
OUT = ROOT / "public" / "the-invisible-business.pdf"

def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context()
        page = ctx.new_page()
        page.goto(HTML.as_uri(), wait_until="networkidle")
        # Give Google Fonts a beat to settle if networkidle was too eager
        page.wait_for_timeout(1200)
        page.pdf(
            path=str(OUT),
            format="Letter",
            print_background=True,
            margin={"top": "0", "bottom": "0", "left": "0", "right": "0"},
            prefer_css_page_size=True,
        )
        browser.close()
    print(f"Wrote {OUT}  ({OUT.stat().st_size // 1024} KB)")

if __name__ == "__main__":
    main()
