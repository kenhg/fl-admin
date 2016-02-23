import _ from 'lodash' // eslint-disable-line
import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col, Glyphicon, Button} from 'react-bootstrap'
import ModelListTable from './ModelListTable'

export default function ModelList(props) {
  const {model_admin, config, visible_items, onAdd, handleSaveFn, handleDeleteFn} = props
  const {Pagination} = model_admin.components
  const table_props = {model_admin, config, handleSaveFn, handleDeleteFn, models: visible_items}

  return (
    <div className="admin-list">
      <section>
        <Grid className="shadow-panel">
          <Row>
            <Col xs={12}>
              <Link to={model_admin.root_path}><Glyphicon glyph="chevron-left" />Admin home</Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h1>{model_admin.plural}</h1>
              <Button bsStyle="primary" className="pull-right" onClick={onAdd}><Glyphicon glyph="plus" /></Button>
              <Pagination {...props} />
              <ModelListTable {...table_props} />
            </Col>
          </Row>
        </Grid>
      </section>
    </div>
  )
}

ModelList.propTypes = {
  visible_items: PropTypes.array.isRequired,
  model_admin: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  handleSaveFn: PropTypes.func.isRequired,
  handleDeleteFn: PropTypes.func.isRequired,
  items_per_page: PropTypes.number.isRequired,
}
