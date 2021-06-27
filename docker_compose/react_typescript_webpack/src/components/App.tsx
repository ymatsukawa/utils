import React from 'react'
import clsx from 'clsx'
import { useStyles } from './styles'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import { SideDrawer } from './Side/SideDrawer'

interface AppProps {
}

export const App = ({}: AppProps) => {
  const classes = useStyles()
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{
          paper: clsx(classes.side_drawer)
        }}>
        <SideDrawer />
      </Drawer>
      <Container>
        <h1>Hello world</h1>
      </Container>
    </>
  )
}