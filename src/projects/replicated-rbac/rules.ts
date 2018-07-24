// THIS FILE IS AUTOGENERATED
// tslint:disable
import { YAMLRule } from "../../lint";
const rules: YAMLRule[] = [{"name":"allowed-valid-policy","type":"error","message":"This is not a valid policy","links":["https://help.replicated.com/docs/vendor-rbac"],"test":{"AnyOf":{"path":"v1.resources.allowed","pred":{"NotMatch":{"path":"","pattern":"^(([a-zA-Z0-9]+|\\*\\*?)\\/)*(([a-zA-Z0-9]+|\\*\\*?))$"}}}},"examples":{"wrong":[{"description":"Policy is not valid","yaml":"---\nv1:\n  resources:\n    allowed: \n      - \"//\"                   \n"}],"right":[{"description":"Policy is valid","yaml":"---\nv1:\n  resources:\n    allowed:\n      - \"**/*\"\n"}]}},{"name":"denied-valid-policy","type":"error","message":"This is not a valid policy","links":["https://help.replicated.com/docs/vendor-rbac"],"test":{"AnyOf":{"path":"v1.resources.denied","pred":{"NotMatch":{"path":"","pattern":"^(([a-zA-Z0-9]+|\\*\\*?)\\/)*(([a-zA-Z0-9]+|\\*\\*?))$"}}}},"examples":{"wrong":[{"description":"Policy is not valid","yaml":"---\nv1:\n  resources:\n    denied: \n      - \"//\"                   \n"}],"right":[{"description":"Policy is valid","yaml":"---\nv1:\n  resources:\n    denied:\n      - \"**/*\"\n  \n"}]}}];
export default rules;