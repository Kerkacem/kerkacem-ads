# BEKO ADS PILOT

L'OS intelligent pour gérer, analyser et scaler les campagnes Meta & TikTok Ads pour les e-commerçants COD.

## 🚀 Fonctionnalités Clés
- **Dashboard IA:** KPIs en temps réel avec analyse de performance et ROAS réel (ajusté COD).
- **Hub Agent IA:** Agent de chat expert (RAG-lite, context-aware) avec système de réflexion autonome.
- **Spy Tool:** Intelligence compétitive avec analyse de menaces et opportunités par IA.
- **WinFinder:** Détecteur de produits gagnants avec Pipeline Kanban et analyse de rentabilité.
- **Sentinel:** Agent autonome qui surveille les campagnes 24/7 et alerte en cas de perte de profit.
- **Product DB:** Intelligence produit avec 12 champs stratégiques et simulateur de profit.
- **Reports:** Rapports automatisés avec export PDF et synthèse exécutive.

## 🛠 Tech Stack
- **Frontend:** Next.js 14, Tailwind, ShadCN, Recharts.
- **Backend:** Node.js, Fastify, Prisma, Redis.
- **IA:** Google Gemini 1.5 Flash/Pro, Groq.
- **Sécurité:** JWT, AES-256 (token encryption), Télémetry (ActionLog).

## ⚙️ Installation & Lancement

### Prérequis
- Node.js 18+
- PostgreSQL
- Redis
- Gemini API Key

### Configuration
1. Clonez le repo et installez les dépendances :
   ```bash
   npm install
   ```
2. Configurez les variables d'environnement dans `server/.env` :
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `GEMINI_API_KEY`
   - `ENCRYPTION_KEY` (32 chars)

### Développement
```bash
npm run dev
```

## 📈 Guide d'Audit et Évolutions
Consultez `UPGRADE_REPORT.md` pour voir les détails des optimisations de production (Encryption, Indexing, Telemetry).
Consultez `SYSTEM_AGENTS.md` pour le protocole de gestion des agents IA et les règles de décision automatique.
