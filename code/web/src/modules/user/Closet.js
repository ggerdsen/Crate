// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import userRoutes from '../../setup/routes/user'
import { Link } from 'react-router-dom'


// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import H4 from '../../ui/typography/H4'
import { white, black } from '../../ui/common/colors'

// App Imports
import { getListByUser } from '../subscription/api/actions'
import { messageShow, messageHide } from '../common/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'

// Component
class Closet extends PureComponent {

  // static fetchData({ store }) {
  //   return store.dispatch(getSubscriptionsList('DESC'))
  // }
  //
  // // Runs on client only
  // componentDidMount() {
  //   this.props.getSubscriptionsList('DESC')
  // }

  render() {
    // const { isLoading, list } = this.props.subscriptions
    const list = []
    const isLoading = false
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>My Closet - Crate</title>
        </Helmet>

        {/* Page Content */}
        <div>
          <div>
            <Grid alignCenter={true} style={{ padding: '1em' }}>
              <GridCell style={{ textAlign: 'left' }}>
                <Link to={userRoutes.profile.path}>
                  <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
                </Link>
              </GridCell>
            </Grid>
            <Grid alignCenter={true} style={{ padding: '1em' }}>
              <GridCell>
                <H4 font="secondary" style={{ marginBottom: '1em', textAlign: 'center' }}>
                  My Closet
                </H4>
              </GridCell>
            </Grid>
          </div>


          {/* Purchase list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Received On</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                {
                  isLoading
                    ? <tr>
                        <td colSpan="6">
                          <Loading message="loading products..."/>
                        </td>
                      </tr>
                    : list.length > 0
                      ? list.map(({ id, image, name, description, createdAt, updatedAt }) => (
                          <tr key={id}>
                            <td>
                              <img src={routeImage + image} alt={name} style={{ width: 100 }}/>
                            </td>

                            <td>
                              { name }
                            </td>

                            <td>
                              { description }
                            </td>

                            <td>
                              { new Date(parseInt(createdAt)).toDateString() }
                            </td>

                            <td>
                              { status }
                            </td>

                            <td style={{ textAlign: 'center' }}>
                              <Link to={admin.productEdit.path(id)}>
                                <Icon size={2} style={{ color: black }}>mode_edit</Icon>
                              </Link>

                              <span style={{ cursor: 'pointer' }} onClick={this.remove.bind(this, id)}>
                                  <Icon size={2} style={{ marginLeft: '0.5em' }}>delete</Icon>
                                </span>
                            </td>
                          </tr>
                        ))
                      : <tr>
                          <td colSpan="6">
                            <EmptyMessage message="No products to show."/>
                          </td>
                        </tr>
                }
                </tbody>
              </table>
            </GridCell>
          </Grid>
        </div>
      </div>
    )
  }
}

// Component Properties
// Crates.propTypes = {
//   subscriptions: PropTypes.object.isRequired,
//   getSubscriptionsList: PropTypes.func.isRequired,
//   messageShow: PropTypes.func.isRequired,
//   messageHide: PropTypes.func.isRequired
// }

// Component State
// function listState(state) {
//   return {
//     subscriptions: state.subscriptions
//   }
// }
export default Closet
// export default connect(listState, { getSubscriptionsList, messageShow, messageHide })(List)
