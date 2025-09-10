# KANTTEA — Graffiti Iced Tea

**Glow-in-the-dark graffiti iced tea. Clean taste. No HFCS.**  
Local delivery in **Coatesville, PA** — made by **Doyen** (student entrepreneur & indie web dev).

[![Website](https://img.shields.io/badge/site-kanttea.com-05f18c.svg)](https://kanttea.com)
[![Instagram](https://img.shields.io/badge/IG-@kanticedtea-05f18c.svg)](https://instagram.com/kanticedtea)
[![Firebase](https://img.shields.io/badge/Realtime-Chat%20(Firebase)-05f18c.svg)](#kant-chat)

---

## What is this repo?

This is the source for **kanttea.com** — a fast, static website hosted on **GitHub Pages** with a neon-green graffiti theme.  
It includes a simple order menu + cart, payment links, contact page, and a real-time **KanT Chat** room powered by **Firebase Firestore**.

### Highlights
- ⚡ **Lightweight static site** (HTML/CSS/JS) — loads fast on mobile.
- 🎨 **Graffiti aesthetic** with glow effects and readable typography.
- 🛒 **Order Menu** — $3 per item, cart stored in `localStorage`.
- 💸 **Payments** — PayPal link + copy-to-clipboard Cash App & Step tags.
- 💬 **KanT Chat** — public demo chat using Firebase Firestore.
- ♻️ **Brand** — reusable glass jars + glow-in-the-dark stickers.
- 🚚 **Delivery note** — *Only in Coatesville, PA* (on foot or by car).

---

## Live Sections

- **Home:** `index.html` — brand intro, features, flavors.
- **About:** `about.html` — story & price.
- **Order:** `order.html` — menu, cart, and payment options.
- **Contact:** `contact.html` — phone, email, Instagram.
- **KanT Chat:** `chat.html` — real-time messaging (Firebase).
- **Second Page:** `second.html` — extra info requested by the founder.

Directory snapshot:

/assets/logo.svg  
/app.js  
/styles.css  
index.html  
about.html  
order.html  
contact.html  
chat.html  
second.html

---

## Local Setup

You can open `index.html` directly, or run a tiny local server:

```bash
# any of these work
python -m http.server 8080
# or
npx serve .
```

Then visit: http://localhost:8080

---

## Ordering & Payments

**Price:** $3 per can/jar  
**Delivery:** Coatesville, PA only

**Payment options:**
- **PayPal:** https://www.paypal.me/Iamdoyen
- **Cash App:** $findtheself (copyable in the Order page)
- **Step:** $doyen (copyable in the Order page)

After paying, DM your order + address via KanT Chat or Instagram [@kanticedtea](https://instagram.com/kanticedtea).

---

## Contact

**Instagram:** [@kanticedtea](https://instagram.com/kanticedtea)  
**Email:** [doyenthefirst@gmail.com](mailto:doyenthefirst@gmail.com)

---

## Roadmap

- GA4 analytics + basic events (view_menu, add_to_cart, start_checkout).
- Optional Shopify Buy Buttons or a lightweight card checkout.
- Better cart (quantities, remove items).
- Admin-only chat room for order confirmations.
- Accessibility & performance polish (Lighthouse 95+).

---

## License

© KANTTEA. All rights reserved. Content, logo, and brand assets are owned by Doyen.