import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { css } from 'ui-box'
import { CloseIcon } from '../../icons'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`
}

const ANIMATION_DURATION = 240

const rotate360InAnimation = css.keyframes('rotate360InAnimation', {
  from: {
    transform: `translateX(100%) rotate(0deg)`
  },
  to: {
    transform: `translateX(-100%) rotate(-360deg)`
  }
})

const rotate360OutAnimation = css.keyframes('rotate360OutAnimation', {
  from: {
    transform: `translateX(-100%) rotate(0deg)`
  },
  to: {
    transform: `translateX(100%) rotate(360deg)`
  }
})

const sheetCloseStyle = {
  cursor: 'pointer',
  transform: `translateX(-100%)`,
  backgroundColor: `rgba(255, 255, 255, 0.4)`,
  transition: `background-color 120ms`,
  '&:hover': {
    backgroundColor: `rgba(255, 255, 255, 0.6)`
  },
  '&:active': {
    backgroundColor: `rgba(255, 255, 255, 0.4)`
  },
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${rotate360InAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.deceleration
    } both`
  },
  '&[data-state="exiting"]': {
    animation: `${rotate360OutAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.acceleration
    } both`
  }
}

export default class SheetClose extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    isClosing: PropTypes.bool
  }

  static styles = {
    position: 'absolute',
    marginLeft: -12,
    marginTop: 12,
    padding: 4,
    borderRadius: 9999
  }

  render() {
    const { isClosing, ...props } = this.props
    return (
      <Box css={sheetCloseStyle} {...SheetClose.styles} {...props}>
        <CloseIcon color="#fff" />
      </Box>
    )
  }
}
