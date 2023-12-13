import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export function NoMatch() {
  return (
    <Fragment>
      <h1>😭 NO MATCH 😭</h1>
      <Link to="/">TAKE ME BACK</Link>
    </Fragment>
  )
}
