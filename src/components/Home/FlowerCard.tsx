import {FC, useState} from 'react'
import {Box, IconButton, Typography, useMediaQuery, useTheme} from '@mui/material'
import {Flower} from '../../model/flower'
import StarIcon from '@mui/icons-material/Star'

type FlowerCardProps = {
    flower: Flower
    isLoggedIn: boolean
}

const FlowerCard: FC<FlowerCardProps> = ({flower, isLoggedIn}) => {
    const {name, latin_name, profile_picture, favorite, sightings} = flower

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'))

    const [isFavorite, setIsFavorite] = useState(favorite)

    return (
        <div>
            <Box sx={{
                backgroundImage: `url(${profile_picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: {
                    xs: '184px',
                    sm: '200px',
                    md: '232px',
                    lg: '280px',
                    xl: '280px'
                },
                height: {
                    xs: '230px',
                    sm: '250px',
                    md: '290px',
                    lg: '350px',
                    xl: '350px'
                },
                borderRadius: '3px',
            }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flexDirection: 'column',
                        borderRadius: '3px',
                    }}
                >
                    {isLoggedIn &&
                        <IconButton
                            size={isMobile ? 'small' : 'medium'}
                            onClick={() => setIsFavorite(prevFav => !prevFav)}
                            sx={{
                                position: 'relative',
                                top: {
                                    xs: '-40%',
                                    sm: '-33%',
                                    md: '-40%',
                                    lg: '-50%',
                                    xl: '-55%'
                                },
                                right: {
                                    xs: '-35%',
                                    sm: '-33%',
                                    md: '-33%',
                                    lg: '-40%',
                                    xl: '-39%'
                                },
                                background: (theme) => isFavorite ? theme.palette.primary.main : 'white',
                                '&:hover': {
                                    background: (theme) => isFavorite ? theme.palette.primary.main : 'white',
                                }
                            }}>
                            <StarIcon
                                fontSize={isMobile ? 'small' : 'medium'}
                                sx={{
                                    color: (theme) => isFavorite ? 'white' : theme.palette.neutral.dark,
                                    '&:hover': {
                                        color: (theme) => isFavorite ? 'white' : theme.palette.neutral.dark,
                                    }
                                }}
                            />
                        </IconButton>
                    }
                    <Typography
                        variant={isMobile ? 'h4' : 'h3'}
                        fontWeight={400}
                        color="white"
                    >
                        {name}
                    </Typography>
                    <Typography
                        fontSize={isMobile ? '12px' : '9.6px'}
                        fontWeight={400}
                        fontStyle="italic"
                        color="white"
                        sx={{opacity: 0.7, mt: '3px'}}
                    >
                        {latin_name}
                    </Typography>
                    <Typography
                        mb={isMobile ? '15px' : '20px'}
                        mt={isMobile ? '15px' : '20px'}
                        p={isMobile ? '6px' : '9px 15px'}
                        borderRadius={isMobile ? '16px' : '20px'}
                        color="white"
                        sx={{
                            background: (theme) => isFavorite && isLoggedIn ?
                                theme.palette.primary.main : 'rgba(0, 0, 0, 0.7)'
                        }}
                    >
                        {`${sightings} sightings`}
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default FlowerCard