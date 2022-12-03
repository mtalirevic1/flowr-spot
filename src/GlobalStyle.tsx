import {FC} from 'react'
import {Box, styled, TextField as MuiTextField, TextFieldProps} from '@mui/material'


export const ColumnBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`


export const TextField: FC<TextFieldProps> = (props) => {
    return (
        <MuiTextField
            InputLabelProps={{
                sx: {
                    color: (theme) => theme.palette.neutral.main,
                    '&.Mui-focused': {
                        color: (theme) => theme.palette.neutral.main
                    }
                }
            }}
            InputProps={{
                sx: {
                    background: (theme) => theme.palette.neutral.background,
                    borderRadius: '3px',
                    border: (theme) => `1px solid ${theme.palette.neutral.light}`,
                    '&:hover': {
                        background: (theme) => theme.palette.neutral.background
                    },
                    '&.Mui-focused': {
                        background: (theme) => theme.palette.neutral.background
                    }
                },
                disableUnderline: true
            }}
            {...props}
            variant="filled"
        />
    )
}

