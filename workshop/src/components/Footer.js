import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Button } from 'semantic-ui-react'
import { VisibilityFilters as vf } from '../actions/actionTypes'

const Footer = () => (
    <div>
        <label> Show:</label>
        {' '}
        <Button.Group size='mini'>
            <FilterLink filter={vf.SHOW_ALL}>
                All
            </FilterLink>
            <Button.Or />
            <FilterLink filter={vf.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <Button.Or />
            <FilterLink filter={vf.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </Button.Group>
    </div>
)

export default Footer;
