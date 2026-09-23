# Project Rules & Guidelines

- **Testing On-Demand Only**: Do NOT run automated browser or UI tests unless the user explicitly orders/requests you to do so.
- **Selenium Only**: All automated testing, UI validation, and browser verification must be done exclusively using **Selenium** (`selenium` in Python) when requested.
- **Prohibited Libraries**: Do not install or use **Puppeteer** or **Playwright** (neither via `npm` nor `pip`).
- **Clean Execution**: Any temporary test scripts or output screenshots should be saved in standard scratch directories or cleaned up after testing to avoid cluttering the repository root.
- **Headline Hardlock**: The main headline in `Home.tsx` and the site title MUST remain "Smart AI for Business Excellence." and should NEVER be changed under any circumstances.
