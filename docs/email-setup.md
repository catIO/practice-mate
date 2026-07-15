# Email Setup: contact@practice-mate.app

## Overview

Forward `contact@practice-mate.app` to `catherina@microsaurus.com` using ImprovMX (free).

- Domain registrar/DNS: Netlify
- Email provider: Proton Mail Plus (1 custom domain used by microsaurus.com)
- Forwarding service: ImprovMX (free tier)

---

## Step 1: Add Domain on ImprovMX

1. Go to https://improvmx.com
2. Enter `practice-mate.app` → click **Create a free alias**
3. Create a free account when prompted

---

## Step 2: Add DNS Records in Netlify

Navigate to: **Netlify → Domains → practice-mate.app → DNS settings → Add record**

| Type | Name | Value                        | Priority |
|------|------|------------------------------|----------|
| MX   | `@`  | `mx1.improvmx.com`           | 10       |
| MX   | `@`  | `mx2.improvmx.com`           | 20       |
| TXT  | `@`  | `v=spf1 include:spf.improvmx.com ~all` | — |

> **Note:** If an SPF TXT record already exists on `@`, merge the `include:spf.improvmx.com` into it rather than adding a duplicate.

---

## Step 3: Create the Alias in ImprovMX

In the ImprovMX dashboard under `practice-mate.app`:

- Alias: `contact`
- Forward to: `catherina@microsaurus.com`

Save the alias.

---

## Step 4: Verify DNS Propagation

- Use the **Check DNS** button in the ImprovMX dashboard
- DNS typically propagates within 10 minutes on Netlify (up to 24hrs max)
- Send a test email to `contact@practice-mate.app` to confirm delivery

---

## Limitations

- **Receiving:** Works immediately once DNS propagates
- **Replying:** Replies will show `catherina@microsaurus.com` as the sender
- To send *as* `contact@practice-mate.app`, an upgrade to Proton Unlimited (3 custom domains) would be required

---

## Future Upgrade Path

If a dedicated inbox is needed later:
- Upgrade Proton Mail to **Unlimited** plan (~$10/mo)
- Add `practice-mate.app` as a second custom domain in Proton Mail settings
- Create `contact` address natively in Proton
