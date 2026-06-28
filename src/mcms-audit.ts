export interface AuditInput {
  organizationId: string;
  correlationId: string;
  sourceEvent: string;
  action: string;
  actorId: string;
  repositories: string[];
  status: "recorded" | "pending" | "blocked";
  notes: string[];
}

export interface AuditRecordedEvent {
  id: string;
  name: "McmsAuditRecorded";
  version: "1.0";
  timestamp: string;
  source: "mobius-mcms";
  organizationId: string;
  correlationId: string;
  payload: AuditInput & {
    auditId: string;
  };
}

export function createAudit(input: AuditInput): AuditRecordedEvent {
  return {
    id: "evt-mcms-" + Date.now(),
    name: "McmsAuditRecorded",
    version: "1.0",
    timestamp: new Date().toISOString(),
    source: "mobius-mcms",
    organizationId: input.organizationId,
    correlationId: input.correlationId,
    payload: {
      ...input,
      auditId: "audit-" + Date.now()
    }
  };
}
