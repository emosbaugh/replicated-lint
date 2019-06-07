// THIS FILE IS AUTOGENERATED
// tslint:disable
import { YAMLRule } from "../../lint";
const rules: YAMLRule[] = [{"name":"spec-analyze-tip","type":"info","message":"By adding an `analyze` section, you can customize what kinds of insights to surface from your support bundle.","links":["https://help.replicated.com/docs/troubleshoot/analyzers/creating-analyzers/"],"test":{"IsEmpty":{"path":"analyze.v1"}},"examples":{"wrong":[{"description":"Spec has no `analyze`","yaml":"---\n"},{"description":"Spec `analyze` is empty","yaml":"---\nanalyze:\n  v1: []\n"}],"right":[{"description":"Spec has a `analyze` specified","yaml":"---\nanalyze:\n  v1:\n  - name: processes.configmanagement.puppet\n    insight:\n      primary: Managed By Puppet\n      detail: This server is running a Puppet agent\n      severity: info\n"}]}}];
export default rules;
