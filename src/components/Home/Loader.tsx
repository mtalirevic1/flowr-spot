import { CircularProgress, styled } from '@mui/material'

const Root = styled('div')`
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`

const Loader = () => {
    return (
        <Root>
            <CircularProgress color="primary" />
        </Root>
    )
}

export default Loader