import { propertyGroups } from 'stylelint-config-clean-order';

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never', // Don't add empty lines between order groups.
  properties
}))

export default {
  "extends": ["stylelint-config-standard","stylelint-config-clean-order/error"],
  "plugins": ["stylelint-order"],
  "rules": {
    "no-descending-specificity": null,
    "selector-class-pattern": "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
    "order/properties-order": [
      propertiesOrder,
      {
        severity: "warning",
        unspecified: "bottomAlphabetical"
      }
    ]
  }
}
