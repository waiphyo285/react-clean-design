import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from '@material-ui/core'
import { DASHBOARD, ROOT } from 'navigation/CONSTANTS'
import { useHistory } from 'react-router-dom'

const HomeView = props => {
    const history = useHistory();
    const navigateTo = (path) => { history.push(path || ROOT) }
    return (
        <div>
            <Typography variant="h4">{props.title} Page</Typography>
            <p>This is root page that can view something layouts</p>
            {/* <Button
                color="primary"
                variant="contained"
                onClick={() => navigateTo(DASHBOARD)}
            >
                Dashboard
            </Button> */}
        </div>
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
