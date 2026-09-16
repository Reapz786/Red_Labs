Investigate a suspected breach on a CRM portal using logs and EDR data.

## Portal Drop

You are on the day shift in the ProbablyFine when the monitoring dashboard flashes red. A new alert appears in the WAF summary, reporting a web scan on `crm.trypatchme.thm` followed by a suspicious file upload anomaly. The affected website is TryPatchMe's public-facing CRM portal, a valued customer who provides software patching consulting services.

That should be an easy case, since you have access to both the web access logs and the EDR console. Combined, they should give you a clear answer: either it's a False Positive, or the portal has been breached and TryPatchMe needs to patch the CRM now!