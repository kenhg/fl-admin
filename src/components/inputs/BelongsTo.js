import _ from 'lodash' // eslint-disable-line
import React, {PropTypes} from 'react'
import {Input} from 'fl-react-utils'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

export default function BelongsTo(_props) {
  const {relationField, modelStore, ...props} = _props
  const models = modelStore.get('models').toJSON ? modelStore.get('models').toJSON() : {}

  // const selectOptions = _.map(models, model => (<option key={model.id} value={model.id}>{relationField.modelAdmin.display(model)}</option>))
  const options = _.map(models, model => ({label: relationField.modelAdmin.display(model), value: model.id}))
  console.log('options', options)
  console.log('props', props)

  if (relationField.readOnly) {
    const model = _.find(models, model => model.id === props.input.value)
    const value = relationField.modelAdmin.display(model)
    console.log('value', value)
    return (
      <FormGroup>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl.Static>{value}</FormControl.Static>
      </FormGroup>
    )
  }

  return (
    <Input
      type="react-select"
      options={options}
      {...props}
    />
  )
}

BelongsTo.propTypes = {
  relationField: PropTypes.object.isRequired,
  modelStore: PropTypes.object.isRequired,
}
