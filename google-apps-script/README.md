# Google Apps Script Integration - Dibexa Infotech

This directory contains the backend Google Apps Script responsible for:
1. **Google Sheets Logging**: Automatically creates a monthly sheet (e.g., `September 2026`) and logs lead records with formatted headers.
2. **Internal Notification**: Dispatches immediate lead notification emails to `dibexainfotech@gmail.com`.
3. **Automated Client Reply**: Dispatches an enterprise branded confirmation receipt to the client signed off by the **Business Development Team**.

---

### Deployment Information
- **Web App URL**: `https://script.google.com/macros/s/AKfycbzN8Ez_bv05hyQ6aT2BMqdMzJjLMomxNdXsp6QPgtSPCnA8oSUKO-5SvIvP_XplS95z/exec`
- **Library Reference (Version 6)**: `https://script.google.com/macros/library/d/1mzfUdNLmdc8Q5QfQxdJa4XnzYQrd8_z3AidfuLYz0r0Cpeg_NAvu-FNJ/6`

---

### Environment Variable
The frontend reads this endpoint via:
```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzN8Ez_bv05hyQ6aT2BMqdMzJjLMomxNdXsp6QPgtSPCnA8oSUKO-5SvIvP_XplS95z/exec
```
*(Also baked into `src/pages/Contact.tsx` as a fallback).*
