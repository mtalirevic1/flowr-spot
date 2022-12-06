import {ColumnBox, IconButtonNoBg} from '../../GlobalStyle'
import {NAVBAR_HEIGHT} from '../../constants/layout'
import HeroImage from '../../assets/heroImage.png'
import {InputBase, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'


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
                <Typography variant="h1" color="white" sx={{mb: '15px'}}>
                    Discover flowers around you
                </Typography>
                <Typography
                    fontSize="17px"
                    fontWeight={300}
                    color="white"
                    sx={{opacity: 0.7, mb: '45px'}}
                >
                    Explore between more than 8.427 sightings
                </Typography>
                <InputBase
                    sx={{
                        background: (theme) => theme.palette.common.white,
                        borderRadius: '3px',
                        p: '0 20px 0 20px',
                        width: {
                            md: '600px',
                            sm: '450px',
                            xs: '300px'
                        },
                        height: '56px',
                        fontWeight: 300,
                        fontSize: '18px'
                    }}
                    placeholder="Looking for something specific?"
                    endAdornment={
                        <IconButtonNoBg>
                            <SearchIcon fontSize='large' color="primary"/>
                        </IconButtonNoBg>
                    }
                />
            </div>
        </ColumnBox>
    )
}

export default Home