# Slooze Dashboard

## Login Instructions

### Manager Account

- **Email:** [manager@example.com](mailto:manager@example.com)
- **Password:** any password (validation currently placeholder)
- This account has access to the **Dashboard** page.

### Storekeeper Account

- **Email:** [storekeeper@example.com](mailto:storekeeper@example.com)
- **Password:** any password
- This account does **not** have access to the Dashboard page and will be redirected.

## How Roles Work

- When you sign in, the app checks your email.
- If the email contains the word `manager`, your role is set to **manager**.
- Otherwise, it is set to **storekeeper**.
- The role is stored in **localStorage** as `role`.

## Running the Project

1. Clone the repository:

```bash
git clone <repo-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm run dev
```
