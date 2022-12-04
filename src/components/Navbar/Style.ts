import {
    styled,
    ListItemText as MuiListItemText,
    ListItemButton as MuiListItemButton
} from '@mui/material'

export const ListItemText = styled(MuiListItemText)`
  padding-left: 30px;
  color: ${({theme}) => theme.palette.neutral.main};
`

export const ListItemButton = styled(MuiListItemButton)`
  padding: 17px 0 17px 0;
`

export const ButtonContainer = styled('div')`
  padding: 17px 0 17px 30px;
`