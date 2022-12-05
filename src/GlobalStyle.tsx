import {FC, forwardRef} from 'react'
import {
    Box,
    Button,
    ButtonProps, IconButton as MuiIconButton,
    styled,
    TextField as MuiTextField,
    TextFieldProps,
    useMediaQuery,
    useTheme
} from '@mui/material'
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip'


export const ColumnBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const IconButtonNoBg = styled(MuiIconButton)`
  background: 0;

  :hover {
    background: 0;
  }
`

export const ErrorTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }}  children={props.children}/>
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.error.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.error.main,
    },
}));

export const PrimaryButton: FC<ButtonProps> = (props) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'))
    const boxShadow = isMobile ? `0px 15px 20px ${theme.palette.primary.light}33` : ''
    return (
        <Button
            {...props}
            sx={{
                borderRadius: '3px',
                '&:hover': {
                    background: theme.palette.primary.main,
                    boxShadow
                },
                boxShadow,
                ...props.sx
            }}
            variant="contained"
            color="primary"
        >
            {props.children}
        </Button>
    )
}


export const TextField: FC<TextFieldProps> = forwardRef((props, ref) => {
    return (
        <MuiTextField
            {...props}
            InputLabelProps={{
                ...props.InputLabelProps,
                sx: {
                    ...props.sx,
                    color: (theme) => props.error ? theme.palette.error.main : theme.palette.neutral.main,
                    '&.Mui-focused': {
                        color: (theme) => props.error ? theme.palette.error.main : theme.palette.neutral.main
                    }
                }
            }}
            InputProps={{
                ...props.InputProps,
                sx: {
                    ...props.sx,
                    color: (theme) => theme.palette.secondary.main,
                    background: (theme) => theme.palette.neutral.background,
                    borderRadius: '3px',
                    border: (theme) => `1px solid ${props.error ? theme.palette.error.main : theme.palette.neutral.light}`,
                    '&:hover': {
                        background: (theme) => theme.palette.neutral.background
                    },
                    '&.Mui-focused': {
                        background: (theme) => theme.palette.neutral.background
                    }
                },
                disableUnderline: true
            }}
            variant="filled"
            ref={ref}
        />
    )
})

