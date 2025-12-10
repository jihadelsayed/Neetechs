# Neetechs

**Modular Full-Stack Platform for Web, Mobile, and IoT Solutions**

This repository contains the full codebase of the **Neetechs** ecosystem. Built to be scalable, maintainable, and adaptable for a range of services such as resume builders, restaurant management, trackers, and more.

---

## 🧱 Monorepo Structure

```
Neetechs_Accounts/    # User auth, sessions, login via phone/email, subdomain-aware
Neetechs_Ads/         # Ad services module (planned or partial)
Neetechs_Backend/     # Django/PostgreSQL core backend (Knox, Allauth, Channels, etc.)
Neetechs_Chain/       # Web3 or blockchain integration layer
Neetechs_Data/        # Utilities, shared services, database connectors
Neetechs_Frontend/    # Main Angular 20 SSR frontend
Neetechs_MVC/         # Legacy or .NET MVC module (optional use)
Neetechs_Mobile/      # Mobile app (Ionic/Angular or React Native)
Neetechs_Myaccount/   # Account/profile dashboard interface
Neetechs_Policies/    # Static pages like Privacy Policy, Terms, etc.
Neetechs_Restaurant/  # Restaurant ordering/management system
Neetechs_Resume/      # Resume builder (Angular frontend)
Neetechs_Tracker/     # Tracking system (package/user/data/etc.)
Neetechs_React/       # Alternate frontend (React, experimental/tested UI)
```

---

## 🛠 Tech Stack

- **Frontend**: Angular 20 + SSR, React (secondary)
- **Backend**: Django, DRF, PostgreSQL, AWS S3, Channels
- **Auth**: Knox tokens, OTP login, social logins (Google, Facebook, Twitter)
- **Styling**: SCSS, Tailwind (some modules), CSS-in-JS (React)
- **Languages**: TypeScript, SCSS, HTML, JavaScript

---

## 🚀 Getting Started

```bash
# Clone
git clone --recursive https://github.com/jihadelsayed/Neetechs.git
cd Neetechs

# Example: Run Angular Frontend
cd Neetechs_Frontend
npm install
npm run dev:ssr

# Run Backend
cd ../Neetechs_Backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## 📦 Deployment Strategy

- SSR Angular frontend using Vite
- Subdomain-aware login iframe (accounts.neetechs.com)
- Cookie/session/token sync via postMessage
- Static/media files served via S3

---

## 📌 Roadmap (High-Level)

- [x] Angular SSR frontend with multi-language support
- [x] OTP login with phone/email
- [x] Resume builder with PDF export
- [x] Restaurant management panel
- [ ] Web3 wallet login integration
- [ ] AI assistant integration for builder UX
- [ ] Neetechs VS Code extension (WIP)

---

## 👤 Author

**Jihad Al Sayed**  
Palestinian-Syrian developer passionate about full-stack systems, AI, and resilience-driven tech.  
🔗 [neetechs.com](https://neetechs.com) | [LinkedIn](https://linkedin.com/company/neetechs) | [GitHub](https://github.com/jihadelsayed)

---

## 📄 License

Licensed under the [GPL-3.0 License](LICENSE).


Get-ChildItem *.json | Rename-Item -NewName { $_.BaseName + "_transcript" + $_.Extension }
