import Joi from 'joi';

function getJoiSchemaBuilder(type) {
  if (type == 'string') return Joi.string();
  else {
    return Joi.number();
  }
}

function getJoiSchema(conditions) {
  const { type: fieldType, ...restConditions } = conditions;
  const schema = getJoiSchemaBuilder(fieldType);
  for (let con in restConditions) {
    const conValue = conditions[con];
    const method = schema[con];
    if (conValue != true || conValue != false) {
      method(conValue);
    } else {
      method();
    }
  }
  return schema;
}

export default getJoiSchema;
