# 🌐 inCybe

**Making simple tech**

![Status: Phase 2](https://img.shields.io/badge/Status-Phase%202%20In%20Progress-orange)
![Version: 1.1](https://img.shields.io/badge/Version-1.1-blue)
![Updated: March 2026](https://img.shields.io/badge/Updated-March%202026-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

---

## 🦸 Project Heroes
| Role | Entity |
| :--- | :--- |
| **Builder** | Giblets Creations x Abe |


---

## 📖 Overview
inCybe is an ambitious, long-term project to build a fully local,
privacy-preserving knowledge engine that understands, organises, and evolves
your personal information, files, and apps — an OS that collaborates with the
user, organises itself, and evolves over time.

## 🚀 Project Vision
inCybe aims to become an AI-native OS layer that acts as a:

*   **Semantic file system** that understands meaning, not just filenames.
*   **Knowledge environment** where files form a living, interconnected system.
*   **Personal intelligence layer** that learns how you think.

### 🧠 Core Principles
*   **Privacy by default:** 100% local LLM usage (Ollama-first).
*   **Modular architecture:** Components are independently deployable.
*   **Safe write system:** No destructive actions without explicit confirmation.
*   **Simplicity:** Working prototypes before complexity.

---

## 🛠️ Tech Stack
The stack is drawn directly from the proven Giblets Creations toolchain.

| Layer | Choice |
| :--- | :--- |
| **LLM (local)** | Ollama (Llama 3 / Mistral / Phi-3) |
| **Orchestration** | Legion (Giblets Internal - Operational) |
| **Embeddings** | Local Ollama (nomic-embed-text) |
| **Vector Store** | Supabase pgvector |
| **Local Backup** | SQLite (Local persistent mirror) |
| **Runtime** | Node.js |
| **Process Manager** | PM2 |
| **Frontend** | Vite PWA |
| **Mobile Target** | Samsung S24 Ultra / Termux |
| **Aesthetic** | Inverted Space Theme (Dark/Deep Space) |
| **File Semantics** | SCP (Semantic Capsule Protocol) |
| **AI Assistant** | BuddAI |
| **Dashboard** | Relevance Forge HQ |

---

## 🧱 Roadmap

### PHASE 1 — LLM + Obsidian Integration (✅ Complete)
**Result:** Full local RAG capabilities established. Vault reading, embedding pipelines, and semantic querying are operational.

### ✅ Phase 1 Success Criteria
- [x] "Ask Incybe" returns correct notes with citations.
- [x] 100% vault-grounded responses via Ollama.
- [x] Response times validated on S24 Ultra hardware.

### PHASE 2 — AI-Assisted Note Management (⚙️ In Progress)
Use the LLM to actively maintain and improve the Obsidian vault. The AI shifts
from passive Q&A to active collaborator — but always with the user's explicit
approval before touching anything.

#### 📍 Milestone 2.1 — Safe Write System
- [ ] Version history for every file modification
- [ ] Atomic write operations
- [ ] Rollback commands

### PHASE 3 — Intelligent File Manager Prototype (📝 Planning)
Expand beyond Obsidian to all files, all types. This is where inCybe starts to
feel like a new kind of OS — every file becomes semantically aware, searchable,
and connected.

### PHASE 4 — inCybe OS (🌐 Vision)
A fully AI-native operating system layer. Intentionally open-ended — the
project evolves as the earlier phases mature. Phase 4 draws deeply from the
broader Giblets Creations platform ecosystem. 

---

### 🔄 Recovery & Sovereignty Strategy
- **Primary Source:** Obsidian vault (Markdown files).
- **Cloud Mirror:** Supabase pgvector (used for high-performance retrieval).
- **Local Backup:** Persistent SQLite database storing local mirrors of indices.
- **Sovereignty:** System is rebuildable from source Markdown if cloud sync is disabled.

---

## ⚠️ Risk Register
| Risk | Likelihood | Mitigation |
| :--- | :--- | :--- |
| **Embedding costs** | Low | Incremental sync + Ollama is free |
| **Vault corruption** | Low | Atomic writes + version history |
| **LLM Hallucination** | Medium | Vault-grounded prompts + citations |

---

## 📖 Glossary
*   **SCP:** Semantic Capsule Protocol (JSON sidecar files).
*   **RAG:** Retrieval-Augmented Generation (grounding AI in your docs).
*   **pgvector:** Postgres extension for vector embeddings.

---

## 🤝 Collaboration Guidelines
*   Simplicity is key.
*   British English throughout.
*   Boy Scout Rule — leave it better than you found it.

---

**inCybe · Giblets Creations · 2026**
*Making simple tech*
