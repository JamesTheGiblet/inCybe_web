# 🌐 inCybe

**Making tech simple**

![Status: Phase 1](https://img.shields.io/badge/Status-Phase%201%20In%20Progress-orange)
![Version: 1.1](https://img.shields.io/badge/Version-1.1-blue)
![Updated: March 2026](https://img.shields.io/badge/Updated-March%202026-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

---

## 🦸 Project Heroes
| Role | Entity |
| :--- | :--- |
| **Builder** | Giblets Creations |
| **Vision** | Abe |

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
| **Orchestration** | Legion (Semantic capsule routing) |
| **Embeddings** | Local Ollama (nomic-embed-text) |
| **Vector Store** | Supabase pgvector |
| **Runtime** | Node.js |
| **Process Manager** | PM2 |
| **Frontend** | Vite PWA |
| **Mobile Target** | Samsung S24 Ultra / Termux |
| **Notifications** | Telegram bot |
| **File Semantics** | SCP (Semantic Capsule Protocol) |
| **AI Assistant** | BuddAI |
| **Dashboard** | Forge HQ |

---

## 🧱 Roadmap

### PHASE 1 — LLM + Obsidian Integration (⚙️ In Progress)
Connect Ollama to an Obsidian vault and enable question-answering
grounded entirely in the vault's own content. This phase establishes the
knowledge layer that everything else builds upon.

#### 📍 Milestone 1.1 — Project Scaffold
- [ ] Initialise monorepo (/incybe)
- [ ] Set up Node.js runtime with PM2 config
- [ ] Configure environment (.env)

#### 📍 Milestone 1.2 — Vault Reader
- [ ] Recursive Markdown file scanner
- [ ] Frontmatter parser
- [ ] Wikilink resolver

#### 📍 Milestone 1.3 — Embedding Pipeline
- [ ] Supabase project setup (pgvector)
- [ ] Chunking strategy implementation
- [ ] Embedding generation via Ollama

### PHASE 2 — AI-Assisted Note Management (📋 Planned)
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
*"I wanted it. So I forged it. Now forge yours."*
