const StandardJoi = require("joi");
const Joi = StandardJoi.extend((joi) => ({
    type: "stringArray",
    base: joi.array(),
    messages: {
      'stringArray.type': '{{#label}} is not a valid string array',
    },
    coerce: (value, helpers) => {
      if(typeof value !== 'string') {
        return {value: value, errors: helpers.error('stringArray.type')};
      }
  
      value = value.replace(/^\[|\]$/g, "").split(",");
      arr = value.map((element) => {
        return element.trim()
      })
      
      return {value: arr}
    }
  }))

module.exports = Joi