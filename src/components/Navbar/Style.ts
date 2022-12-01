import {
    styled,
    IconButton as MuiIconButton,
    ListItemText as MuiListItemText,
    ListItemButton as MuiListItemButton, Button
} from '@mui/material'

export const IconButton = styled(MuiIconButton)`
  background: 0;

  :hover {
    background: 0;
  }
`

export const ListItemText = styled(MuiListItemText)`
  padding-left: 30px;
  color: ${({theme}) => theme.palette.neutral.main};
`

export const ListItemButton = styled(MuiListItemButton)`
  padding: 17px 0 17px 0;
`

export const PrimaryButton = styled(Button)`
  width: 140px;
  height: 40px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 14px;
`

export const ButtonContainer = styled('div')`
  padding: 17px 0 17px 30px;
`