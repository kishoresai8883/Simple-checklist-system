const rules = require("../config/rules");

const evaluateRules = (data) => {
  if (!data) return [];
  
  return rules.map((rule) => ({
    id: rule.id,
    description: rule.description,
    passed: rule.evaluate(data),
  }));
};

module.exports = evaluateRules;
