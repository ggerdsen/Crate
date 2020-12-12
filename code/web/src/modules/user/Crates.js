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

// App Imports
import { getListByUser } from '../subscription/api/actions'
import { messageShow, messageHide } from '../common/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'

// Component
class Crates extends PureComponent {

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
          <title>My Crates - Crate</title>
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
                My Crates
              </H4>
            </GridCell>
          </Grid>
        </div>
          {/* Subscriptions list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Crate</th>
                    <th>Shipped Date</th>
                    <th>Next Shipment</th>
                  </tr>
                </thead>

                <tbody>
                {
                  isLoading
                    ? <tr>
                        <td colSpan="6">
                          <Loading message="loading crates..."/>
                        </td>
                      </tr>
                    : list.length > 0
                      ? list.map(({id, user, crate, createdAt}) => (
                          <tr key={id}>
                            <td>
                              { crate.name }
                            </td>

                            <td>
                              { user.name } - { user.email }
                            </td>

                            <td>
                              { new Date(parseInt(createdAt)).toDateString() }
                            </td>
                          </tr>
                        ))
                      : <tr>
                          <td colSpan="6">
                            <EmptyMessage message="No crates to show."/>
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
export default Crates
// export default connect(listState, { getSubscriptionsList, messageShow, messageHide })(List)
