import {ColumnBox} from '../../GlobalStyle'
import {NAVBAR_HEIGHT} from '../../constants/layout'
import HeroImage from '../../assets/heroImage.png'
import {Typography} from '@mui/material'


const Home = () => {
    return (
        <ColumnBox
            mt={NAVBAR_HEIGHT}
            sx={{
                background: (theme) => theme.palette.secondary.background
            }}
        >
            <div
            style={{
                height: '500px',
                width: '100%',
                background: `url(${HeroImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center'
            }}
            >
                <Typography variant='h1' color='white' sx={{mb: '15px'}}>
                    Discover flowers around you
                </Typography>
                <Typography
                    fontSize='17px'
                    fontWeight={300}
                    color='white'
                    sx={{opacity: 0.7, mb: '45px'}}
                >
                    Explore between more than 8.427 sightings
                </Typography>
            </div>
        </ColumnBox>
    )
}

export default Home