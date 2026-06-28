import { createAudit } from "./mcms-audit.js";

const audit = createAudit({
  organizationId: "mobius-technologies",
  correlationId: "corr-demo",
  sourceEvent: "evt-memory-demo",
  action: "Provider execution remembered and measured.",
  actorId: "mobius-provider-engine",
  repositories: ["mobius-provider-engine", "mobius-memory", "mobius-pulse"],
  status: "recorded",
  notes: ["Enterprise Alpha loop audit recorded."]
});

console.log(JSON.stringify(audit, null, 2));
